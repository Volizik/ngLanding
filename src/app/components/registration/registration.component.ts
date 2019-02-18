import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {takeWhile} from 'rxjs/operators';

import {SharedService} from '../../services/shared.service';
import {LoadUsersList} from '../../store/app.actions';
import {AppState} from '../../store/app.state';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit, OnDestroy {

    regForm: FormGroup;
    regErrorMessage: string;
    get formControls() { return this.regForm.controls; }
    private alive: boolean;

    constructor(private fb: FormBuilder,
                private sharedService: SharedService,
                private store: Store<AppState>,
                public ngxSmartModalService: NgxSmartModalService) {
        this.alive = true;
    }

    ngOnInit() {
        // Инициализация валидации формы
        this.regForm = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(60)])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            phone: ['', Validators.compose([Validators.required, Validators.pattern('^\\+38\\\s\?\\(\?\\d{3}\\)\?\\\s\?\\d{3}\\\s\?\\d{2}\\\s\?\\d{2}$')])],
            positions: ['', Validators.required],
            photo: ['', Validators.required]
        });
    }

    submit() { // Отправка формы регистрации
        const data = new FormData();
        data.append('name', this.formControls.name.value);
        data.append('email', this.formControls.email.value);
        data.append('phone', this.formControls.phone.value);
        data.append('position_id', this.formControls.positions.value);
        data.append('photo', this.formControls.photo.value);
        this.sharedService.registerUser(data).pipe(takeWhile(() => this.alive)).subscribe(
            () => {
                this.sharedService.getUsers().pipe(takeWhile(() => this.alive)).subscribe(res => {
                    this.store.dispatch(new LoadUsersList(res.users));
                    this.regErrorMessage = null;
                    this.ngxSmartModalService.getModal('myModal').open();
                });
            },
            err => {
                this.regErrorMessage = err.error.message;
                console.error(err);
            }
        );
    }

    ngOnDestroy(): void {
        this.alive = false;
    }

}
