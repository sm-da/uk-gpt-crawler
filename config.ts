import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mfa.gov.ua/en/about-ukraine",
  match: "",
  maxPagesToCrawl: 999999999,
  outputFileName: "mfa-gov-ua.json",
  maxTokens: 2000000,
  selector: "html",
};
