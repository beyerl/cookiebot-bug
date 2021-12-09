import { NgxCookiebotConfig } from '@halloverden/ngx-cookiebot';

export class CookiebotConfig extends NgxCookiebotConfig {
  blockingMode: 'auto' | 'manual' | string = 'auto';
  cbId: string = 'af590895-94ce-4b67-a09c-d29c65d2f2e5';
  culture?: string;
  framework?: string;
  level?: string;
  type?: string;
}
