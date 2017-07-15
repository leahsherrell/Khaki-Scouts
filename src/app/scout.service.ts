import { Injectable } from '@angular/core';
import { Scout } from './scout.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ScoutService {
  scouts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.scouts = database.list('scouts');
  }

  getScouts() {
    return this.scouts;
  }

  addScout(newScout: Scout) {
    this.scouts.push(newScout);
  }

  getScoutById(scoutId: string){
    return this.database.object('scouts/' + scoutId);
  }

  updateScout(localUpdatedScout){
    var scoutEntryInFirebase = this.getScoutById(localUpdatedScout.$key);
    scoutEntryInFirebase.update({name: localUpdatedScout.name,
                                rank: localUpdatedScout.rank,
                                age: localUpdatedScout.age,
                                description: localUpdatedScout.description,
                                url: localUpdatedScout.url});
  }

  deleteScout(localScoutToDelete){
    var scoutEntryInFirebase = this.getScoutById(localScoutToDelete.$key);
    scoutEntryInFirebase.remove();
  }
}
