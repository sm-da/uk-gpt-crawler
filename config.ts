import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mod.gov.ua/",
  match: "https://mod.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mod.json",
  maxTokens: 2000000,
  selector: "body"
};
