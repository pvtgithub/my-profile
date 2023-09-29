import { Component } from '@angular/core';
import { ProfileUtil } from 'src/app/utils/profile-util';

@Component({
  selector: 'app-introduc',
  templateUrl: './introduc.component.html',
  styleUrls: ['./introduc.component.css']
})
export class IntroducComponent {
  goPageProfile(url : string){
    ProfileUtil.goPageProfile(url)
  }
}
