import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
    quotes:Quote[] = [
      new Quote(1,'Inspiration Quotes','Fanny','The good you do today will be forgotten tomorrow.Do good anyway',new Date(2019,2,24),0,0),
      new Quote(2,'Happiness Quotes','Fanny','Love is that condition in which the happiness of another person is essential to your own',new Date(2019,8,4),0,0),
      new Quote(3,'Punctuation Quotes','Fanny','Arriving late was a way of saying that your own time was more valuable than the time of the person who waited for you',new Date(2019,1,6),0,0),
      new Quote(4,'Loneliness Quotes','Fanny','Let me tell you this: if you meet a loner, no matter what they tell you, it is not because they enjoy solitude. It is because they have tried to blend into the world before, and people continue to disappoint them.',new Date(2019,4,4),0,0)
    ];
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }

    toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
      this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    }
    completeQuote(isComplete, index){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
    }
    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
    UpvoteQuote(isComplete, index){
      
    }
    DownvoteQuote(isComplete, index){
    }
  constructor() { }

  ngOnInit() {
  }

}
