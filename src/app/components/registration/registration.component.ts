import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../services/shared.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

    regForm: FormGroup;
    get formControls() { return this.regForm.controls; }

    constructor(private fb: FormBuilder, private sharedService: SharedService) {}

    ngOnInit() {
        this.regForm = this.fb.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(60)])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            phone: ['', Validators.compose([Validators.required, Validators.pattern('^\\+38\\\s\?\\(\?\\d{3}\\)\?\\\s\?\\d{3}\\\s\?\\d{2}\\\s\?\\d{2}$')])],
            positions: ['', Validators.required],
            photo: ['', Validators.required]
        });
    }

    submit() {
        const data = new FormData();
        data.append('name', this.formControls.name.value);
        data.append('email', this.formControls.email.value);
        data.append('phone', this.formControls.phone.value);
        data.append('position_id', this.formControls.positions.value);
        data.append('photo', this.formControls.photo.value);
        this.sharedService.registerUser(data).subscribe(res => {
            console.log(res);
        });
    }


}
