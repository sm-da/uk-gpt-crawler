import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.msp.gov.ua/",
  match: "https://www.msp.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "msp-gov-us.json",
  maxTokens: 2000000,
  selector: "body",
};
