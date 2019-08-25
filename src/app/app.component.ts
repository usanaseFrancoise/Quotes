import { Component } from '@angular/core';
import { Quote} from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1,'Inspiration Quotes','Fanny','The good you do today will be forgotten tomorrow.Do good anyway',new Date(2019,9,24),0,0),
    new Quote(2,'Happiness Quotes','Fanny','Love is that condition in which the happiness of another person is essential to your own',new Date(2019,8,9),0,0),
    new Quote(3,'Punctuation Quotes','Fanny','Arriving late was a way of saying that your own time was more valuable than the time of the person who waited for you',new Date(2019,1,9),0,0),
    new Quote(4,'Loneliness Quotes','Fanny','Let me tell you this: if you meet a loner, no matter what they tell you, it is not because they enjoy solitude. It is because they have tried to blend into the world before, and people continue to disappoint them.',new Date(2019,12,4),0,0)
  ];
  private content: string;
    public query: string;
    
    public highlight() {
      if(!this.query) {
          return this.content;
      }
      return this.content.replace(new RegExp(this.query, "gi"), match => {
          return '<span class="highlightText">' + match + '</span>';
      });
  }

}
