import { debounceTime, sampleTime, take, repeat, map, mapTo, scan, buffer } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable, of, range, interval, timer, Scheduler, from } from 'rxjs';
@Component({
    templateUrl: './operators.component.html',
    styleUrls: ['operators.component.less']
})
export class OperatorsComponent {
    demi1FromResult = '';
    demi1OfResult = '';
    demo1() {
        this.demi1FromResult = '';
        this.demi1OfResult = '';
        from([1, 2, 3]).subscribe(value => {
            this.demi1FromResult += value + ' ';
        });
        of(1, 2, 3).subscribe(value => {
            this.demi1OfResult += value + ' ';
        });
    }
    code1 = `
    demi1FromResult = '';
    demi1OfResult = '';
    demo1() {
        this.demi1FromResult = '';
        this.demi1OfResult = '';
        from([1, 2, 3]).subscribe(value => {
            this.demi1FromResult += value + ' ';
        });
        of(1, 2, 3).subscribe(value => {
            this.demi1OfResult += value + ' ';
        });
    }
    `;
    demo2Result = '';
    demo2() {
        interval(1000).pipe(take(5)).subscribe(value => {
            this.demo2Result += value + ' ';
        });
    }
    code2 = `
    demo2Result = '';
    demo2() {
        interval(1000).pipe(take(5)).subscribe(value => {
            this.demo2Result += value + ' ';
        });
    }
    `;
    demo3Result = '';
    demo3() {
        this.demo3Result = '';
        of(1, 2, 3).pipe(repeat(2)).subscribe(value => {
            this.demo3Result += value + ' ';
        });
    }
    code3 = `
    demo3Result = '';
    demo3() {
        this.demo3Result = '';
        of(1, 2, 3).pipe(repeat(2)).subscribe(value => {
            this.demo3Result += value + ' ';
        });
    }
    `;
    demo4Result = '';
    demo4() {
        this.demo4Result = '';
        range(3, 5).subscribe(value => {
            this.demo4Result += value + ' ';
        });
    }
    code4 = `
    demo4Result = '';
    demo4() {
        this.demo4Result = '';
        range(3, 5).subscribe(value => {
            this.demo4Result += value + ' ';
        });
    }
    `;
    demo5Result = '';
    demo5() {
        this.demo5Result = '';
        //延时0.5秒执行,之后每次间隔1秒发送值
        timer(500, 1000).pipe(take(5)).subscribe(value => {
            this.demo5Result += value + ' ';
        });
    }
    code5 = `
    demo5Result = '';
    demo5() {
        this.demo5Result = '';
        //延时0.5秒执行,之后每次间隔1秒发送值
        timer(500, 1000).pipe(take(5)).subscribe(value => {
            this.demo5Result += value + ' ';
        });
    }
    `;
    demo6Result = '';
    demo6() {
        this.demo6Result = '';
        of(1, 2, 3).pipe(map(x => x * 10)).subscribe(value => {
            this.demo6Result += value + ' ';
        });
    }
    code6 = `
    demo6Result = '';
    demo6() {
        this.demo6Result = '';
        of(1, 2, 3).pipe(map(x => x * 10)).subscribe(value => {
            this.demo6Result += value + ' ';
        });
    }
    `;
    demo7Result = '';
    demo7() {
        this.demo7Result = '';
        of(1, 2, 3).pipe(mapTo('Eve')).subscribe(value => {
            this.demo7Result += value + ' ';
        });
    }
    code7 = `
    demo7Result = '';
    demo7() {
        this.demo7Result = '';
        of(1, 2, 3).pipe(mapTo('Eve')).subscribe(value => {
            this.demo7Result += value + ' ';
        });
    }
    `;
    demo8Result = '';
    demo8() {
        this.demo8Result = '';
        of(1, 2, 3).pipe(scan((accumulator, current) => accumulator + current, 10)).subscribe(value => {
            this.demo8Result += value + ' ';
        });
    }
    code8 = `
    demo8Result = '';
    demo8() {
        this.demo8Result = '';
        of(1, 2, 3).pipe(scan((accumulator, current) => accumulator + current, 10)).subscribe(value => {
            this.demo8Result += value + ' ';
        });
    }
    `;
    demo9Result = '';
    demo9() {
        this.demo9Result = '';
        const observable$1 = timer(0,1000).pipe(take(5));//    0 1 2 3 4
        const observable$2 = timer(2000,2000).pipe(take(2));//     0   1
        observable$1.pipe(buffer(observable$2)).subscribe(value => {
            this.demo9Result += value + ' ';
        });
    }
    code9 = `
    demo9Result = '';
    demo9() {
        this.demo9Result = '';
        const observable$1 = timer(0,1000).pipe(take(5));//    0 1 2 3 4
        const observable$2 = timer(2000,2000).pipe(take(2));//     0   1
        observable$1.pipe(buffer(observable$2)).subscribe(value => {
            this.demo9Result += value + ' ';
        });
    }
    `;
}
