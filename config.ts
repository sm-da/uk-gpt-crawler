import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mof.gov.ua/",
  match: "https://mof.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mof-gov-ua.json",
  maxTokens: 2000000,
  selector: "body"
};
