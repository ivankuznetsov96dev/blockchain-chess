import { Component, ViewChild } from '@angular/core';
import { NgxChessBoardService, NgxChessBoardView } from 'ngx-chess-board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('board', { static: false }) board!: NgxChessBoardView;

  constructor(private ngxChessBoardService: NgxChessBoardService) {}

  reset() {
    this.board.reset();
  }
}
