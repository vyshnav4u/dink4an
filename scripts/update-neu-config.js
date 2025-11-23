import fs from "fs";
import { PORT } from "../fe/config/project.config.js";
import { getNeuConfigFile } from "./neu-config-helper.js";

const { configJson, configPath } = getNeuConfigFile();
configJson.cli.frontendLibrary.devUrl = `http://localhost:${PORT}`;
// Write back JSON
fs.writeFileSync(configPath, JSON.stringify(configJson, null, 2));

console.log("\x1b[32m✅ package.json updated successfully (ESM mode).\x1b[0m");
