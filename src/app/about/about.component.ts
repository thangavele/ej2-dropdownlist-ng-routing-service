import { Component, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareRouting } from '../app.service';


@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor(private route: ActivatedRoute, private router: Router, public shareData: ShareRouting) {
  }
  public selectedID: number;
  public data: Object[];
  public fields: Object = { text: 'Game', value: 'Id' };
  ngOnInit(): void {
    this.data = [];
    this.getData();
    this.selectedID = this.shareData.selectedID;
  }
  getData() {
    this.data = [
      { Id: 1, Game: 'Cricket' },
      { Id: 2, Game: 'Football' },
      { Id: 3, Game: 'Golf' },
      { Id: 4, Game: 'Hockey' },
      { Id: 5, Game: 'Snooker' },
      { Id: 6, Game: 'Tennis' }
    ];
  }
  onClick() {
    this.selectedID = 3;
  }
}
