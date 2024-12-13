import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "hhttps://infotech.gov.ua/",
  match: "https://infotech.gov.ua/**",
  maxPagesToCrawl: 99999999,
  outputFileName: "infotech.json",
  maxTokens: 2000000,
  selector: "body",
};
