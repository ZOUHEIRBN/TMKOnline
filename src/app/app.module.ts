import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SectionComponent } from './components/section/section.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TilesetComponent } from './components/tileset/tileset.component';
import { TileComponent } from './components/tile/tile.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LandingPageComponent,
    ToolbarComponent,
    SectionComponent,
    TilesetComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
