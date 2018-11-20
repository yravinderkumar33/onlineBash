import { Component, OnInit } from '@angular/core';
import { BashService } from '../bash.service';
import { pluck } from 'rxjs/operators';
import { merge, of } from 'rxjs'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(private service: BashService) { }
  response;
  information;
  ngOnInit() {
    this.response = merge(this.service.getResult().pipe(pluck('result')),
      this.service.getManPage());

    this.service.getSystemInformation().subscribe((data) => {
      console.log(data);
      this.information = data;
    })
  }
}

