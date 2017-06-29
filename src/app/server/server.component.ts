import { Component } from '@angular/core'; //core functionalities of Angular

@Component({
 selector: 'app-server', 
 templateUrl: './server.component.html'
})

export class ServerComponent {
    severId: number = 10; 
    serverStatus: string = 'offline'

    getServerStatus () {
        return this.serverStatus;
    }
}