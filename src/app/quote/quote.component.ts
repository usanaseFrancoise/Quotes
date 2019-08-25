import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 
    quotes:Quote[] = [
      new Quote(1,'Love Quotes','Mireille','A friend is someone who knows all about you and still loves you.',new Date(2019,1,14),0,0),
      new Quote(2,'Life Quotes','Mireille','Life is really simple, but we insist on making it complicated.',new Date(2019,2,14),0,0),
      new Quote(3,'Inspiration Quotes','Mireille','Integrity Is The Most Valuable And Respected Quality Of Leadership. Always Keep Your Word.',new Date(2019,3,14),0,0),
      new Quote(4,'Success Quotes','Mireille','Success is not final; failure is not fatal: It is the courage to continue that counts.',new Date(2019,4,14),0,0)
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
