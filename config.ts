import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://minagro.gov.ua/investoram/prezentatsiia-stratehiia-rozvytku-ahropromyslovoho-kompleksu",
  match: "https://minagro.gov.ua/**",
  maxPagesToCrawl: 999999999,
  outputFileName: "minagro.json",
  maxTokens: 2000000,
  selector: "body",
};
