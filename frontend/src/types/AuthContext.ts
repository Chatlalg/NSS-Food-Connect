type AuthContextType = {
    user: jwtPayload | null;
    setUser: (user: jwtPayload | null) => void;
    login: (token: string) => boolean;
    logout: () => void;
    loading: boolean;
}