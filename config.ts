import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mepr.gov.ua/",
  match: "https://mepr.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mepr.json",
  maxTokens: 2000000,
  selector: "body"
};
