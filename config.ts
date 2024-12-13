import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.mva.gov.ua/",
  match: "https://www.mva.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mva-gov-ua.json",
  maxTokens: 2000000,
  selector: "body"
};
