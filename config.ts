import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.who.int/",
  match: "https://www.who.int/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "who-int.json",
  maxTokens: 2000000,
  selector: "body",
};
