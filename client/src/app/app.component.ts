import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgxChessBoardService, NgxChessBoardView } from 'ngx-chess-board';
import io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  public showChessBoard: boolean = false;

  private socket: any;

  @ViewChild('board', { static: false }) board!: NgxChessBoardView;

  private gamePosition!: string;

  constructor(private ngxChessBoardService: NgxChessBoardService) {}

  ngOnInit(): void {
    this.socket = io('http://localhost:3000');
    this.socket.on('position', (gamePosition: string) => {
      console.log('position changed!!');
      this.showChessBoard = true;
      if (gamePosition) {
        this.gamePosition = gamePosition;
        this.board.setFEN(this.gamePosition);
      } else {
        this.chnagePosition(this.board.getFEN());
      }
    });
  }

  ngAfterViewInit(): void {
    // this.board.setFEN(this.gamePosition);
  }

  moveChange(): void {
    const positionCount = this.board.getFEN();
    console.log('move');
    this.chnagePosition(positionCount);
  }

  reset() {
    this.board.reset();
  }

  private chnagePosition(positionCount: string): void {
    this.gamePosition = positionCount;
    this.socket.emit('changePosition', positionCount);
  }
}
