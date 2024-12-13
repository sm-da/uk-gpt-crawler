import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.mvs.gov.ua/en",
  match: "https://www.mvs.gov.ua/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "mvs-gov-ua.json",
  maxTokens: 2000000,
  selector: "body",
};
