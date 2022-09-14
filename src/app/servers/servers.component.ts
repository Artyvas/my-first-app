import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = "No server was created!";
  serverName = "Test Server";
  serverCreated = false
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    },2000);
   }
  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    console.log(this.serverCreationStatus);
  }

  onUpdateServerName(event: Event) {
    this.serverName =(<HTMLInputElement>event.target).value;
  }

}
