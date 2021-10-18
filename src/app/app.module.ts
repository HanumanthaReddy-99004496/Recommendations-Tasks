import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { IdleLogOutComponent } from './idle-log-out/idle-log-out.component';




@NgModule({
  declarations: [
    AppComponent,
    IdleLogOutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIdleKeepaliveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
