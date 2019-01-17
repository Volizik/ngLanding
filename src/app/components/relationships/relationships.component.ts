import { Component, OnInit } from '@angular/core';
import {IRelationshipItem} from '../../interfaces';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.sass']
})
export class RelationshipsComponent implements OnInit {

  relationshipItems: IRelationshipItem[] = [
    {
      imgPath: './assets/images/html.svg',
      imgName: 'html',
      title: 'I\'m in love with HTML',
      text: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.'
    },
    {
      imgPath: './assets/images/css.svg',
      imgName: 'css',
      title: 'CSS is my best friend',
      text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.'
    },
    {
      imgPath: './assets/images/javascript.svg',
      imgName: 'javascript',
      title: 'JavaScript is my passion',
      text: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
