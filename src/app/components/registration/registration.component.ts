import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {NgxSmartModalService} from 'ngx-smart-modal';

import {SharedService} from '../../services/shared.service';
import {LoadUsersList} from '../../store/app.actions';
import {AppState} from '../../store/app.state';
@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

    regForm: FormGroup;
    regErrorMessage: string;
    get formControls() { return this.regForm.controls; }

    constructor(private fb: FormBuilder,
                private sharedService: SharedService,
                private store: Store<AppState>,
                public ngxSmartModalService: NgxSmartModalService) {}

    ngOnInit() {
        this.regForm = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(60)])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            phone: ['', Validators.compose([Validators.required, Validators.pattern('^\\+38\\\s\?\\(\?\\d{3}\\)\?\\\s\?\\d{3}\\\s\?\\d{2}\\\s\?\\d{2}$')])],
            positions: ['', Validators.required],
            photo: ['', Validators.required]
        });
    }

    async submit() {
        const data = new FormData();
        data.append('name', this.formControls.name.value);
        data.append('email', this.formControls.email.value);
        data.append('phone', this.formControls.phone.value);
        data.append('position_id', this.formControls.positions.value);
        data.append('photo', this.formControls.photo.value);
        this.sharedService.registerUser(data).subscribe(
            () => {
                this.sharedService.getUsers().subscribe(res => {
                    this.store.dispatch(new LoadUsersList(res.users));
                    this.regErrorMessage = null;
                    this.ngxSmartModalService.getModal('myModal').open();
                });
            },
            err => {
                this.regErrorMessage = err.error.message;
                console.error(err);
            }
        );;
    }


}
