import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus = "No server was created!";
  serverName = '';
  serversList = ["testServer", "testServer2"];
  serverCreated = false;

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = `${this.serverName} was created`;
    this.serversList.push(this.serverName);
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target)
     .value;
  }
}
