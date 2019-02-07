import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {IUser} from '../../interfaces';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

    @ViewChild('showMoreButton') showMoreButton: ElementRef;
    public usersList: IUser[];
    public counter = 1;

    constructor(private sharedService: SharedService) {
    }

    ngOnInit() {
        this.sharedService.getUsers().subscribe(data => {
            this.usersList = data.users;
        });
    }

    getUsers(event) {
        this.counter++;
        this.sharedService.getUsers(this.counter).subscribe(
            data => {
                console.log(data)
                this.usersList.push(...data.users);
                if (data.total_pages === data.page) { // Если запрашиваемая страница последняя - блокируем кнопку
                    event.target.setAttribute('disabled', 'disabled');
                }
            },
            error => {
                console.log('err', error);
                // Если пользователей больше нет - блокируем кнопку
                event.target.setAttribute('disabled', 'disabled');
            }
        );
    }

}
