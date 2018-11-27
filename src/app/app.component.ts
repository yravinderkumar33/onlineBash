import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BashService } from './bash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bash-online';
  @ViewChild('commandForm') commandForm: NgForm;

  constructor(private service : BashService){}
  

  onSubmit() {
    const command = this.commandForm.value.command
    this.service.downloadManFile(command);
  }
}
