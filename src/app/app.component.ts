import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lesson2Component } from './lesson2/lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
//import { UserProfileComponent } from './lesson1/user-profile/user-profile.component';
//import { UserProfile2Component } from './lesson1/user-profile2/user-profile2.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Lesson3Component],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent {
    title = 'AngularGuide';
}
