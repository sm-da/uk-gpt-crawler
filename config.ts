import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mva.gov.ua/en",
  match: "https://mva.gov.ua/en**",
  maxPagesToCrawl: 999999999,
  outputFileName: "mva-gov-ua.json",
  maxTokens: 2000000,
  selector: "body",
};
