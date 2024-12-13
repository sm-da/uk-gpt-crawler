import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mspu.gov.ua/",
  match: "https://mspu.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mspu.json",
  maxTokens: 2000000,
  selector: "body",
};
