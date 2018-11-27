import { Component, OnInit ,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BashService } from '../bash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private service : BashService){

  }
  

  ngOnInit(){
    
  }

}
