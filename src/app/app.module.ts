import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {IconSpriteModule} from 'ng-svg-icon-sprite';

import {AppComponent} from './app.component';
import {ButtonComponent} from './components/button/button.component';
import {MenuComponent} from './components/menu/menu.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        MenuComponent,
        TopbarComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        IconSpriteModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
