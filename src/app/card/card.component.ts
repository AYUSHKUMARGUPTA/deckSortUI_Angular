import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() firstChar:string='';  
  @Input() lastChar:string='';  
  @Input() wholeChar:string='';  
  @Input() type:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
