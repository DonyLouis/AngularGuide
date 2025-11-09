import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-lesson2',
    imports: [],
    templateUrl: './lesson2.component.html',
    styleUrl: './lesson2.component.less'
})
export class Lesson2Component {

    public num = 100;
    public num1 = signal(100);

    plusNum() {
        // this.num++;
        console.log(this.num1());
        this.num1.update(value => value + 1);
    }

}
