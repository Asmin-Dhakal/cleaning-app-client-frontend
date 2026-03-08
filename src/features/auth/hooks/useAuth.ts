import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../api/authApi';
import { useAuthStore } from '../stores/authStore';
import type {
    LoginCredentials,
    SignupData,
    AuthTokens,
    User,
} from '../types/auth.ts';
import { jwtDecode } from 'jwt-decode';

// Decode JWT to get user info
const decodeToken = (token: string): User => {
    const decoded = jwtDecode<{
        sub: string;
        email: string;
        userType: string;
        roles: string[];
        permissions: string[];
    }>(token);

    return {
        id: decoded.sub,
        email: decoded.email,
        firstName: '', // You can add more fields as needed
        lastName: '',
        userType: decoded.userType as 'client',
        roles: decoded.roles,
        permissions: decoded.permissions,
    };
};

// Register Hook (for client signup - pending admin approval)
export const useRegister = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: authApi.register,
        onSuccess: (response) => {
            // Client signup doesn't log them in, just returns success message
            // Admin needs to approve first
            queryClient.invalidateQueries({ queryKey: ['signup-status'] });
        },
    });
};

// Login Hook (only works if admin approved the client)
export const useLogin = () => {
    const queryClient = useQueryClient();
    const { setAuth } = useAuthStore();

    return useMutation({
        mutationFn: authApi.login,
        onSuccess: (response) => {
            const tokens: AuthTokens = response.data.data;
            const user = decodeToken(tokens.accessToken);

            setAuth(tokens, user);
            queryClient.setQueryData(['user'], user);
        },
    });
};

// Logout Hook
export const useLogout = () => {
    const queryClient = useQueryClient();
    const { logout, accessToken, refreshToken } = useAuthStore();

    return useMutation({
        mutationFn: () => {
            if (!accessToken || !refreshToken) {
                throw new Error('No tokens available for logout');
            }
            return authApi.logout(accessToken, refreshToken);
        },
        onSuccess: () => {
            logout();
            queryClient.clear();
        },
        onError: () => {
            // Even if logout API call fails, we should clear local auth state
            logout();
            queryClient.clear();
        },
    });
};

// Logout All Devices Hook
export const useLogoutAllDevices = () => {
    const queryClient = useQueryClient();
    const { logout, accessToken } = useAuthStore();

    return useMutation({
        mutationFn: () => {
            if (!accessToken) {
                throw new Error('No access token available');
            }
            return authApi.logoutAllDevices(accessToken);
        },
        onSuccess: () => {
            logout();
            queryClient.clear();
        },
        onError: () => {
            logout();
            queryClient.clear();
        },
    });
};

// Refresh Token Hook
export const useRefreshToken = () => {
    const { setAuth, refreshToken } = useAuthStore();

    return useMutation({
        mutationFn: () => {
            if (!refreshToken) {
                throw new Error('No refresh token available');
            }
            return authApi.refreshToken(refreshToken);
        },
        onSuccess: (response) => {
            const tokens: AuthTokens = response.data.data;
            const user = decodeToken(tokens.accessToken);

            setAuth(tokens, user);
        },
    });
};

// Get Sessions Hook
export const useSessions = () => {
    const { accessToken } = useAuthStore();

    return useQuery({
        queryKey: ['sessions'],
        queryFn: () => {
            if (!accessToken) {
                throw new Error('No access token available');
            }
            return authApi.getSessions(accessToken);
        },
        enabled: !!accessToken, // Only run if access token exists
    });
};

// Get current user from store
export const useCurrentUser = () => {
    return useAuthStore((state) => state.user);
};

// Check if user is authenticated
export const useIsAuthenticated = () => {
    return useAuthStore((state) => state.isAuthenticated);
};
