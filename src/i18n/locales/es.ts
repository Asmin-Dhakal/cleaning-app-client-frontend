const es = {
    auth: {
        login: {
            title: "Bienvenido de nuevo",
            subtitle: "Inicia sesión en tu portal de cliente",
            emailLabel: "Correo electrónico",
            passwordLabel: "Contraseña",
            rememberMe: "Recuérdame",
            forgotPassword: "¿Olvidaste tu contraseña?",
            signIn: "Iniciar sesión",
            noAccount: "¿No tienes una cuenta?",
            signUp: "Regístrate",
            invalidCredentials: "Correo, contraseña incorrectos o cuenta no aprobada",
        },
        signup: {
            title: "Crear cuenta",
            subtitle: "Solicita acceso a nuestros servicios de limpieza",
            firstNameLabel: "Nombre",
            lastNameLabel: "Apellido",
            emailLabel: "Correo electrónico",
            phoneLabel: "Teléfono (Opcional)",
            passwordLabel: "Contraseña",
            confirmPasswordLabel: "Confirmar contraseña",
            createAccount: "Solicitar cuenta",
            alreadyHaveAccount: "¿Ya tienes una cuenta?",
            signIn: "Iniciar sesión",
            registrationFailed: "El correo ya existe o el registro falló.",
            successTitle: "¡Registro exitoso!",
            pendingApproval: "Tu cuenta ha sido creada y está pendiente de aprobación del administrador. Podrás iniciar sesión una vez que un administrador apruebe tu solicitud.",
            backToLogin: "Volver al inicio de sesión",
        },
        validation: {
            emailInvalid: "Dirección de correo electrónico inválida",
            passwordMin: "La contraseña debe tener al menos 6 caracteres",
            firstNameMin: "El nombre debe tener al menos 2 caracteres",
            lastNameMin: "El apellido debe tener al menos 2 caracteres",
            passwordsMustMatch: "Las contraseñas no coinciden",
        },
    },
    navigation: {
        dashboard: "Panel",
        bookings: "Mis reservas",
        properties: "Mis propiedades",
        invoices: "Facturas",
        feedback: "Comentarios",
        settings: "Configuración",
    },
    header: {
        clientPortal: "Portal del Cliente",
        logout: "Cerrar sesión",
        loggingOut: "Cerrando sesión...",
    },
    dashboard: {
        title: "En desarrollo",
        subtitle:
            "El portal del cliente está actualmente en desarrollo. Vuelve pronto para funciones de reserva y gestión.",
    },
} as const;

export default es;
