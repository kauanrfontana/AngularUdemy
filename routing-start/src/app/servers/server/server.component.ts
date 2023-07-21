import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';
import { Server } from '../modal/server.modal';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.server = this.serversService.getServer(Number(this.route.snapshot.params['id']));
  }

}
