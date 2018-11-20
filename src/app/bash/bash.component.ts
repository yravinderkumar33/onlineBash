import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BashService } from '../bash.service';


@Component({
  selector: 'app-bash',
  templateUrl: './bash.component.html',
  styleUrls: ['./bash.component.css']
})
export class BashComponent implements OnInit {

  commandsHistory :string[];

  constructor(private service:BashService) { }

  ngOnInit() {
    this.commandsHistory= this.service.commands
  }

  onSubmit(commands:NgForm){
    this.service.executeCommand(commands.value.commandFile);
  }

}
