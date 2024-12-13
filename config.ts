import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://mon.gov.ua/sitemap-kitsoft-mediagallery-models-mediagallery-1.xml",
  match: "https://mon.gov.ua/**",
  maxPagesToCrawl: 9999999999,
  outputFileName: "mon-gov-ua.json",
  maxTokens: 2000000,
  selector: "html",
};
