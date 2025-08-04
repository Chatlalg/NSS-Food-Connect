/**
 * userType: 0 for admin; 1 for volunteer
 */
type jwtPayload = {
    userType : 0 | 1;
    name: string;
    email: string;
    enrollmentNumber?: string;
}