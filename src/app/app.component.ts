import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Angular Bindings';
  serverId: Number = 10;
  serverStatus: String = 'Offline';

  anotherServerId: Number = 11;
  anotherServerStatus: String = 'Online';

  getServerStatus() {
    return this.anotherServerStatus;
  }


}
