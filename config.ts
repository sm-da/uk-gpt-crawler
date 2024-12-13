import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mms.gov.ua/",
  match: "https://mms.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mms.json",
  maxTokens: 2000000,
  selector: "body"
};
