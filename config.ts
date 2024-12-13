import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.mvs.gov.ua/",
  match: "https://www.mvs.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mvs-gov-ua.json",
  maxTokens: 2000000,
  selector: "body",
};
