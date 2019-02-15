import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {NgxSmartModalModule} from 'ngx-smart-modal';

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

import { appReducer } from './store/app.reducer';

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
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        IconSpriteModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({appState: appReducer}),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
        }),
        NgxSmartModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
