import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Keep this import
import { ListAtelierRouaComponent } from './core/list-atelier-roua/list-atelier-roua.component';

@NgModule({
  declarations: [
    AppComponent
    // 1. REMOVED ListAtelierRouaComponent from here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListAtelierRouaComponent // 2. MOVED to here
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }