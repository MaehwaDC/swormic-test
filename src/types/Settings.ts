export type Locale = string;

export interface ISettings {
  plan: string;
  locales: Locale[];
  default_locale: string;
  currency: string;
  base_url: string;
  brand: string;
  logo: string;
  favicon: string;
  spinner: string;
  html_title: string;
  authentication_providers: string[];
  issue_tracker: string;
  n_weekly_aqi: number;
  n_weekly_lai: number;
  ticket_form: string;
  features: [string];
  license: {};
}
