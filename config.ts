import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://thedigital.gov.ua/",
  match: "https://thedigital.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "thedigital.json",
  maxTokens: 2000000,
  selector: "body",
};
