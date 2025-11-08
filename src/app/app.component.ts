import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfile2Component } from './user-profile2/user-profile2.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, UserProfileComponent, UserProfile2Component],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent {
    title = 'AngularGuide';
}
