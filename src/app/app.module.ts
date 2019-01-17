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
import { AboutComponent } from './components/about/about.component';
import { RelationshipsComponent } from './components/relationships/relationships.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { UsersComponent } from './components/users/users.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent,
        MenuComponent,
        TopbarComponent,
        HeaderComponent,
        AboutComponent,
        RelationshipsComponent,
        RequirementsComponent,
        UsersComponent,
        RegistrationComponent,
        FooterComponent,
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
