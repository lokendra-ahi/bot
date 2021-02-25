import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';
import { DialogflowService } from '../../services/dialogflow.service';


@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    // this.messages.push(new Message("hello"));
    // this.response();
    // this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
    //   this.messages.push(
    //     new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp)
    //   );
    // });

    this.message = new Message('', 'assets/images/user.png');
  }

  // public response():void
  // {

  //   for(let i=0;i<100000;i++)
  //   {

  //     for(let j=0;j<100000;j++)
  //     {
        
  //     }
  //   }
  //   this.messages.push(new Message('hello','assets/images/bot.png'));
  // }
}
