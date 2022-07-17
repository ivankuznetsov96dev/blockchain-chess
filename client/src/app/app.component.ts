import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService, NgxChessBoardView } from 'ngx-chess-board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('board', { static: false }) board!: NgxChessBoardView;

  constructor(private ngxChessBoardService: NgxChessBoardService) {}

  ngOnInit(): void {}

  moveChange(): void {
    console.log('chess moved!');
    console.log('test: ', this.board.getMoveHistory());
  }

  reset() {
    this.board.reset();
  }
}
