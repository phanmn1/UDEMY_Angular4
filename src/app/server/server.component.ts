import { Component } from '@angular/core'; //core functionalities of Angular

@Component({
 selector: 'app-server', 
 templateUrl: './server.component.html',
 styles: [`
    .online {
        color: white;
    }
 `]
})

export class ServerComponent {
    severId: number = 10; 
    serverStatus: string = 'offline'

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus () {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'; 
    }
}