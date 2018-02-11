import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Bindings";
  serverId: Number = 10;
  serverStatus: String = "Offline";
  allowNewServer: Boolean = false;
  serverCreationStatus: String = "No Server was Created";
  anotherServerId: Number = 11;
  anotherServerStatus: String = "Online";
  serverName: String = '';

  getServerStatus() {
    return this.anotherServerStatus;
  }

  // Property Binding

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was Created';
  }


  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
