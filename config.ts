import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https/mvs.gov.ua/",
  match: "https/mvs.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mvs-gov-ua.json",
  maxTokens: 2000000,
  selector: "body",
};
