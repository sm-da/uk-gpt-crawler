import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://minjust.gov.ua/pages/mission/",
  match: "https://www.minjust.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "minjust-gov-ua.json",
  maxTokens: 2000000,
  selector: "body",
};
