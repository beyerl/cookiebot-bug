import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NgxCookiebotModule } from '@halloverden/ngx-cookiebot';
import { CookiebotConfig } from './cookiebot.config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxCookiebotModule.forRoot(CookiebotConfig),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
