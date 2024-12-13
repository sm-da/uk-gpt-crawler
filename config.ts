import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mon.gov.ua/en/tag/preschool-education?&type=all&tag=Preschool%20Education",
  match: "https://mon.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mon-gov-ua.json",
  maxTokens: 2000000,
  selector: "body",
};
