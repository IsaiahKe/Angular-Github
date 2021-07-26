import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { Material } from 'src/app/material';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './components/content/content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GithubService } from './core/service/github.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ProfileComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    Material,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
