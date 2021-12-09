import { NgxCookiebotConfig } from '@halloverden/ngx-cookiebot';

export class CookiebotConfig extends NgxCookiebotConfig {
  blockingMode: 'auto' | 'manual' | string = 'auto';
  cbId: string = '3745138d-12b2-427c-ad18-9e3cdd022d0e';
  culture?: string;
  framework?: string;
  level?: string;
  type?: string;
}
