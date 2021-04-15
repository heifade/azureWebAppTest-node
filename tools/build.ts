import { copyFileSync, existsSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

copyFileIfNotExists(resolve(__dirname, "../src/server-config.json"), resolve(__dirname, "../dist/server-config.json"));

function copyFileIfNotExists(source: string, target: string) {
  if (!existsSync(target)) {
    copyFileSync(source, target);
  }
}

function changeServerFile(serverFileName: string) {
  const content = readFileSync(serverFileName, { encoding: "utf8" });
  writeFileSync(serverFileName, `#!/usr/bin/env node\n${content}`);
}
changeServerFile(resolve(__dirname, "../dist/index.js"));
