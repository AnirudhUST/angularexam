import { Player } from '../players/player.model';

import { EventEmitter } from '@angular/core';




export class TeamService {

  teamChanged = new EventEmitter<Player[]>();

  playerId: number;




  private team: Player[] = [];




  getTeam() {

    return this.team.slice();

  }




  /*

    Should edit a player of given id to nwPlayer

  */

  editPlayer(id: number, nwPlayer: Player) {

    const i=this.team.findIndex(p=>p.id===id);

    this.team[i]=nwPlayer;




  }




  /*

    Should add a player to team, if the player

    already exist alert "This Player already exist in your team !!"

  */

  addPlayer(player: Player) {

    let f=0;

    this.team.forEach(p=>{

      if(p===player){

        f=1;

        alert("This Player already exist in your team !!");

      }

     

    });

    if(f==0){

      this.team.push(player);

    }

  }




  /*

    Should delete a player from team

  */

  deletePlayer(id: number) {

    const i=this.team.findIndex(p=>p.id===id);

    this.team.splice(i,1);

  }




  /*

    Returns error messages if a team does not have exactly 2 batsmen

    2 bowlers and 1 wicket-keeper

  */

  getStatus() {

     var status: string[] = [];

     let c1=0,c2=0,c3=0;

     this.team.forEach(t=>{

      if(t.description==="Batsmen") c1++;

      if(t.description==="Bowlers") c2++;

      if(t.description==="Wicket Keeper") c3++;




     });

     if(c1<2)

     status.push('You do not have required number of batsmen in your team');

     if(c2<2)

     status.push('You do not have required number of bowler in your team');

     if(c3<1)

     status.push('You do not have required number of wicket-keeper in your team');






     return status;

  }

}
