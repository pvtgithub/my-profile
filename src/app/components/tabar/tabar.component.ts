import { Component } from '@angular/core';
import {  TabDirective } from 'ngx-bootstrap/tabs';
import { ProfileUtil } from 'src/app/utils/profile-util';

@Component({
  selector: 'app-tabar',
  templateUrl: './tabar.component.html',
  styleUrls: ['./tabar.component.css']
})
export class TabarComponent {
  isLoadSkill : boolean = false;

  onSelect(event: TabDirective): void {
   this.isLoadSkill = event.heading == "Skills";
  }

}
