import { Component, computed, effect, EffectRef, untracked } from '@angular/core';
import { signal } from '@angular/core';

@Component({
    selector: 'app-lesson3',
    imports: [],
    templateUrl: './lesson3.component.html',
    styleUrl: './lesson3.component.less'
})
export class Lesson3Component {
    // Signalの作成
    count = signal(0);
    name = signal('山田一二');
    isActive = signal(true);
    obj = signal({
        name: '山田さん',
        age: 20
    });

    effectRef: EffectRef = null as any;

    constructor() {
        // 副作用
        this.effectRef = effect(() => {
            console.log('Count changed:', this.name());
            console.log('Count changed:', this.count());
            const currentB = untracked(() => this.count());
        });
    }


    // signal の値を変更する
    changeSignals() {
        //1. 値を直接変更する
        this.count.set(2);
        this.isActive.set(false);
        // 2. 元の値を元に更新する
        this.name.update(value => value + '三');
        this.obj.update(value => ({
            ...value,
            age: value.age + 1
        }));
    }

    // 計算
    total = computed(() => {
        return this.obj().name + ',' + this.obj().age;
    });




}
