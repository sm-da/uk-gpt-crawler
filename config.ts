import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://online.minjust.gov.ua/",
  match: "https://online.minjust.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "online-minjust-gov-ua.json",
  maxTokens: 2000000,
  selector: "body"
};
