import { Component, Input, OnInit } from '@angular/core';
import { ScoutService } from '../scout.service';

@Component({
  selector: 'app-edit-scout',
  templateUrl: './edit-scout.component.html',
  styleUrls: ['./edit-scout.component.css'],
  providers: [ScoutService]
})


export class EditScoutComponent implements OnInit {
  @Input() selectedScout;

  constructor(private scoutService: ScoutService) { }

  ngOnInit() {
  }

  beginUpdatingScout(scoutToUpdate) {
    this.scoutService.updateScout(scoutToUpdate);
  }

  beginDeletingScout(scoutToDelete){
    if(confirm("Are you sure you want to delete this scout?")){
      this.scoutService.deleteScout(scoutToDelete);
    }
  }

}
