import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://me.gov.ua/Documents/SiteMap?lang=en-GB",
  match: "https://me.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "me-gov-ua.json",
  maxTokens: 2000000,
  selector: "body",
};
