import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileUtil } from 'src/app/utils/profile-util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private render: Renderer2){}

  clickDownloadCv(){
    const link = this.render.createElement('a');
      link.setAttribute('href', '../../../assets/images/');
      link.setAttribute('download', `avatar.png`);
      link.click();
      link.remove();
  }

  goPageProfile(url : string){
    ProfileUtil.goPageProfile(url)
  }
}
