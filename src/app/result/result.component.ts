import { Component, OnInit } from '@angular/core';
import { BashService } from '../bash.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private service: BashService) { }
  response 
  ngOnInit() {
    this.response= this.service.getResult().pipe(pluck('result'))
  }
}