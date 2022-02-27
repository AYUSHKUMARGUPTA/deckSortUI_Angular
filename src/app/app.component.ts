import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cardSet: string = '';
  public specialCards = ["4T", "2T", "ST", "PT", "RT"];
  public suit = ["K", "Q", "J", "A"];
  unsortedDeck: any;
  sortedDeck: any;
  constructor(public http: HttpClient){}
  public sortDeck() {
    //Obj to be send for the request
    let setObj = { "deck": this.cardSet.split(',') };
    let headers = { 'Access-Control-Allow-Origin':'*'};
    //Show UI
    this.unsortedDeck = this.displayDeck([...this.cardSet.split(',')]);
    this.http.post('https://cardsortingapi.azurewebsites.net/sortDeck',setObj).subscribe((resp)=>{
      this.sortedDeck = this.displayDeck(resp);
    })
    
  }
  public displayDeck(deck: any) {

    // [firstChar]="'10'" [lastChar]="'H'" [wholeChar]="'10H'"  [type]="'number'"

    let deckObj: any = []

    deck.forEach((e: string) => {
      if (this.specialCards.includes(e)) {
        deckObj.push({
          firstChar: e.slice(0, -1),
          lastChar: e.slice(-1),
          wholeChar: e,
          type: 'special'
        })
      } else {
        deckObj.push({
          firstChar: e.slice(0, -1),
          lastChar: e.slice(-1),
          wholeChar: e,
          type: this.suit.includes(e.split('')[0]) ? 'suit' : 'number'
        })
      }
    })

    return deckObj;

  }



}
