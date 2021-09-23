import { Component } from '@angular/core';
import { BooksService } from './books.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsonParser';
  public bookslist: any =[];

  constructor(private booksService:BooksService){}

  get bookRender(){

    return this.bookslist&&this.bookslist['ISBN:9780980200447'] && this.bookslist['ISBN:9780980200447']['cover']
  }

  ngOnInit(){
    this.booksService.getBooksData().subscribe((data:any)=>{
this.bookslist=data;
console.log("print",this.bookslist)

    });
  }
}
