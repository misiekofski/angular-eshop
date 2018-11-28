import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    template : `
    <div class="jumbotron">
    <h1> {{title}} </h1>
    </div>
    `,
    styles: [`
    
    `]
})

export class HeaderComponent implements OnInit {
    title = 'MyStore';
    constructor() { }
    ngOnInit () { }
}
