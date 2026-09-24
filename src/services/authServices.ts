import api from '../utility/api';

export interface LoginRequest {
    email: string | null;
    password: string | null;
}

export interface LoginResponse {
    token: string;
    user: {
        id:number,
        email:string;
        name:string;
    };
}

export const login = async(
    data: LoginRequest
): Promise<any> => {
    const response = await api.post<any>(
        "/auth/login",
        data
    );

    return response.data;
}