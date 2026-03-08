const en = {
    auth: {
        login: {
            title: "Welcome Back",
            subtitle: "Sign in to your client portal",
            emailLabel: "Email",
            passwordLabel: "Password",
            rememberMe: "Remember me",
            forgotPassword: "Forgot password?",
            signIn: "Sign In",
            noAccount: "Don't have an account?",
            signUp: "Sign up",
            invalidCredentials: "Invalid email, password, or account not approved yet",
        },
        signup: {
            title: "Create Account",
            subtitle: "Request access to our cleaning services",
            firstNameLabel: "First Name",
            lastNameLabel: "Last Name",
            emailLabel: "Email",
            phoneLabel: "Phone (Optional)",
            passwordLabel: "Password",
            confirmPasswordLabel: "Confirm Password",
            createAccount: "Request Account",
            alreadyHaveAccount: "Already have an account?",
            signIn: "Sign in",
            registrationFailed: "Email already exists or registration failed.",
            successTitle: "Registration Successful!",
            pendingApproval: "Your account has been created and is pending admin approval. You will be able to log in once an administrator approves your request.",
            backToLogin: "Back to Login",
        },
        validation: {
            emailInvalid: "Invalid email address",
            passwordMin: "Password must be at least 6 characters",
            firstNameMin: "First name must be at least 2 characters",
            lastNameMin: "Last name must be at least 2 characters",
            passwordsMustMatch: "Passwords don't match",
        },
    },
    navigation: {
        dashboard: "Dashboard",
        bookings: "My Bookings",
        properties: "My Properties",
        invoices: "Invoices",
        feedback: "Feedback",
        settings: "Settings",
    },
    header: {
        clientPortal: "Client Portal",
        logout: "Logout",
        loggingOut: "Logging out...",
    },
    dashboard: {
        title: "Work in Progress",
        subtitle:
            "The client portal is currently under development. Check back soon for booking and management features.",
    },
} as const;

export default en;
