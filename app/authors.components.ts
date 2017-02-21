import {Component} from 'angular2/core';
import {AuthorService} from './author.service';
@Component({
    selector: 'authors',
    template:  `
                <h1> Lista nekih kretena </h1>
    <ul>
        <li *ngFor="#author of authors">
        {{author}}
        </li>
            </ul>
                `,
                providers: [AuthorService]
})
    export class AuthorsComponents{
        authors;
            constructor(authorService:  AuthorService){
                this.authors = authorService.getAuthors();
            }
    }

