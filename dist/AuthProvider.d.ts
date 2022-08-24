import React from 'react';
export declare type AuthProviderProps = {
    defaultAuthenticated?: boolean;
    onLogin?: () => void;
    onLogout?: () => void;
    children: React.ReactNode;
};
export declare const AuthProvider: React.FC<AuthProviderProps>;
