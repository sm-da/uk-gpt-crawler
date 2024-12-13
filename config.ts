import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.kmu.gov.ua/en",
  match: "https://www.kmu.gov.ua/en/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "kmu.json",
  maxTokens: 2000000,
  selector: "body",
};
