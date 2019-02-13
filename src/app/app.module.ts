import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {NgxMaskModule} from 'ngx-mask';

import {AppComponent} from './app.component';
import {ButtonComponent} from './components/elements/button/button.component';
import {MenuComponent} from './components/menu/menu.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { RelationshipsComponent } from './components/relationships/relationships.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { UsersComponent } from './components/users/users.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/elements/input/input.component';
import { SelectComponent } from './components/elements/select/select.component';
import { InputFileComponent } from './components/elements/input-file/input-file.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InputPhoneComponent } from './components/elements/input-phone/input-phone.component';

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
        InputComponent,
        SelectComponent,
        InputFileComponent,
        NavigationComponent,
        InputPhoneComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        IconSpriteModule,
        NgxMaskModule.forRoot(),
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
