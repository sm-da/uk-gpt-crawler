import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.minjust.gov.ua/",
  match: "httpshttps://www.minjust.gov.ua/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "minjust-gov-ua.json",
  maxTokens: 2000000,
  selector: "body"
};
