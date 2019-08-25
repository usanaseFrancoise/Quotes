// import { timingSafeEqual } from '@angular/core';

export class Quote {
  showDescription: boolean;
  showAuthor: boolean;
  showupvote:boolean;
  showdownvote:boolean;
  constructor(public id: number,public name: string, public author:string, public description: string, public completeDate: Date ,public   upvote:number,public downvote:number){
      this.showDescription=false;
      this.showAuthor=false;
      this.showdownvote=false;
      this.showupvote=false;
    }
  }
