import {Component} from 'angular2/core';
import {CoursesComponents} from './courses.component';
import {AuthorsComponents} from './authors.components';

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular</h1><courses></courses><authors></authors>',
    directives: [CoursesComponents, AuthorsComponents]
})
export class AppComponent { }