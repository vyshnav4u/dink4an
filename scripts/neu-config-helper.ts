import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const getNeuConfigFile = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const neuConfigPath = path.join(__dirname, "..", "neutralino.config.json");
  const neuConfigJson = JSON.parse(fs.readFileSync(neuConfigPath, "utf8")) as Record<string,any>;

  return { configPath: neuConfigPath, configJson: neuConfigJson };
};
