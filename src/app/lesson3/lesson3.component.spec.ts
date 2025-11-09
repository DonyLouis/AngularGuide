import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson3Component } from './lesson3.component';

describe('Lesson3Component', () => {
    let component: Lesson3Component;
    let fixture: ComponentFixture<Lesson3Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Lesson3Component]
        })
            .compileComponents();

        fixture = TestBed.createComponent(Lesson3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('changeSignals', () => {
        it('should update count and isActive signals directly', () => {
            component.changeSignals();
            expect(component.count()).toBe(2);
            expect(component.isActive()).toBe(false);
        });

        it('should update name signal based on previous value', () => {
            component.name.set('李');
            component.changeSignals();
            expect(component.name()).toBe('李三');
        });

        it('should update obj signal based on previous value', () => {
            component.obj.set({ name: 'John', age: 25 });
            component.changeSignals();
            expect(component.obj()).toEqual({ name: 'John', age: 26 });
        });
    });
});
