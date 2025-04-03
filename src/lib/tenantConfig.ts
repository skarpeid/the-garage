import { createContext, useContext } from 'react';

export interface TenantConfig {
  id: string;
  name: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  content: {
    [key: string]: {
      [key: string]: string;
    };
  };
  components: {
    [key: string]: {
      [key: string]: any;
    };
  };
}

export const defaultTenantConfig: TenantConfig = {
  id: 'master',
  name: 'Master App',
  theme: {
    primary: '#0070f3',
    secondary: '#00b4d8',
    accent: '#fb7185',
  },
  content: {
    login: {
      title: 'Welcome back',
      description: 'Please sign in to continue',
      signupText: "Don't have an account?",
      signupLink: 'Sign up',
    },
  },
  components: {
    LoginForm: {
      card: {
        className: 'shadow-lg',
      },
      emailInput: {
        placeholder: 'Enter your email',
      },
      passwordInput: {
        placeholder: 'Enter your password',
      },
      submitButton: {
        variant: 'primary',
      },
      signupLink: {
        className: 'text-primary-600 hover:text-primary-500',
      },
    },
  },
};

export const TenantContext = createContext<TenantConfig>(defaultTenantConfig);

export const useTenantConfig = () => {
  return useContext(TenantContext);
}; 