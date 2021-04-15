interface Config {
    server: {
        https: boolean;
        pfx: string;
        pfxPassword: string;
        port: number;
    };
}
export declare function getConfig(): Config;
export {};
