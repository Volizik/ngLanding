import {Component, OnInit} from '@angular/core';

interface IMenuLink {
    name: string;
    link: string;
}

interface ISocialLink {
    iconName: string;
    link: string;
    iconHeight: number;
    iconWidth: number;
}

interface IContactInfo {
    iconName: string;
    text: string;
}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

    menuLinks: IMenuLink[] = [
        {name: 'News', link: '#'},
        {name: 'Blog', link: '#'},
        {name: 'Partners', link: '#'},
        {name: 'Shop', link: '#'},
        {name: 'Overview', link: '#'},
        {name: 'Design', link: '#'},
        {name: 'Code', link: '#'},
        {name: 'Collaborate', link: '#'},
        {name: 'Tutorials', link: '#'},
        {name: 'Resources', link: '#'},
        {name: 'Guides', link: '#'},
        {name: 'Examples', link: '#'},
        {name: 'FAQ', link: '#'},
        {name: 'Terms', link: '#'},
        {name: 'Conditions', link: '#'},
        {name: 'Help', link: '#'}
    ];

    socialLinks: ISocialLink[] = [
        {iconName: 'facebook', link: '#', iconHeight: 26, iconWidth: 26},
        {iconName: 'linkedin', link: '#', iconHeight: 26, iconWidth: 26},
        {iconName: 'instagram', link: '#', iconHeight: 26, iconWidth: 26},
        {iconName: 'twitter', link: '#', iconHeight: 26, iconWidth: 26},
        {iconName: 'pinterest', link: '#', iconHeight: 26, iconWidth: 26}
    ];

    contactInfo: IContactInfo[] = [
        {iconName: 'mail', text: 'work.of.future@gmail.com'},
        {iconName: 'phone', text: '+38 (050) 789 24 98'},
        {iconName: 'cellphone', text: '+38 (095) 556 08 45'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
