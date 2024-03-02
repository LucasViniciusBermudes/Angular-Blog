import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { MoreComponent } from './pages/more/more.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { CharacterPopupComponent } from './components/character-popup/character-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    MainCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent,
    MoreComponent,
    CharactersComponent,
    CharacterCardComponent,
    PageFooterComponent,
    CharacterPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
