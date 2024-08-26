export interface HttpOptionsDto {
    method: string;
    hostname: string;
    port: string | null;
    path: string;
    headers: {};
}