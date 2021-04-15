/// <reference types="node" />
import * as express from "express";
import * as httpsHelper from "https";
export declare function runServer(pars: {
    app: express.Express;
    https: boolean;
    pfx?: string;
    pfxPassword?: string;
    port: number;
}): httpsHelper.Server | import("http").Server;
