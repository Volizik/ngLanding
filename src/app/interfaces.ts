export interface IUser {
    id?: string;
    photo: string;
    name: string;
    position: string;
    position_ad: string;
    email: string;
    phone: string;
    registration_timestamp?: number;
}
export interface IUserResponse {
    success: string;
    user: IUser;
}

export interface IPosition {
    id: string;
    name: string;
}
export interface IPositionsResponse {
    success: string;
    positions: IPosition[];
}

export interface IUsersResponse {
    page: number;
    count: number;
    success: boolean;
    total_pages: number;
    total_users: number;
    links: {next_url: string | null, prev_url: string | null};
    users: IUser[];
}
