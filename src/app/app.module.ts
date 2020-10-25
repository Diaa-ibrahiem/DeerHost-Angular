import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './Core/core.module';
import { CoreRoutingModule } from './Core/Routing/Core-Routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, CoreRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
