import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  public accessToken = 'YOUR_ACCESS_TOKEN';
  public message: Subject<any> = new Subject();
  constructor() { }

  ngOnInit(): void {
  }

}
