import { app } from "./app";
import { getConfig } from "./config";
import { runServer } from "./utils/runServer";

const { server: serverConfig } = getConfig();

const server = runServer({
  app,
  ...serverConfig
});

export { server };
