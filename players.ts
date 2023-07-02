import { Player } from './player.model';

import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';




@Injectable()

export class PlayerService {

  playersChanged = new Subject<Player[]>();

  count: number = 7;

  private players: Player[] = [

    new Player(1, 'M S Dhoni', 'Wicket Keeper'),

    new Player(2, 'Virat Kohli', 'Batsman'),

    new Player(3, 'Jasprit Bumrah', 'Bowler'),

    new Player(4, 'Rohit Sharma', 'Batsman'),

    new Player(5, 'Rishabh Pant', 'Wicket Keeper'),

    new Player(6, 'T. Natarajan', 'Bowler'),

    new Player(7, 'R Ashwin', 'Bowler'),

  ];




  getPlayers() {

    return this.players.slice();

  }




  generateID() {

    this.count = this.count + 1;

    return this.count;

  }





  /*

    Returns the player for a given player id

  */

  getPlayer(id: number) {

    const i=this.players.findIndex(t=>t.id===id);

    return this.players[i];

  }




  /*

    Adds the player to player list

  */

  addPlayer(player: Player) {

    this.players.push(player);

  }




  /*

    Updates the player given the index and new changed values

  */

  updatePlayer(index: number, newPlayer: Player) {

    const i=this.players.findIndex(p=>p.id===index);

    this.players[i]=newPlayer;

    this.playersChanged.next(this.players.slice());

  }




  /*

    Deletes a player from player list

  */

  deletePlayer(index: number) {

  const i=this.players.findIndex(p=>p.id===index);

  this.players.splice(i,1);

  }

}

has context menu
Compose
