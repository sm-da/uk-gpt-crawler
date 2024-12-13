import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.msp.gov.us/",
  match: "https://www.msp.gov.us/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "msp-gov-us.json",
  maxTokens: 2000000,
  selector: "body"
};
