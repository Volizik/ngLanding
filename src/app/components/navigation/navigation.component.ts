import {Component, OnInit} from '@angular/core';

interface INavigationLink {
    name: string;
    link: string;
    className: string;
}

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

    navigationLinks: INavigationLink[] = [
        {name: 'About me', link: 'about', className: ''},
        {name: 'Relationships', link: 'relationships', className: ''},
        {name: 'Requirements', link: 'requirements', className: ''},
        {name: 'Users', link: 'users', className: ''},
        {name: 'Sign Up', link: 'signup', className: ''},
        {name: 'Sign Out', link: '', className: 'hidden-l'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    scrollTo(name: string, event: Event): void {
        if (name) {
            event.preventDefault();
            document.getElementById(name).scrollIntoView({block: 'start', behavior: 'smooth'});
        }
    }

}
