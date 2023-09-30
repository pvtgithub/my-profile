import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Renderer2 } from '@angular/core';
import { ProfileUtil } from 'src/app/utils/profile-util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeaderComponent {

  animationState = false;

  toggleAnimationState() {
    this.animationState = !this.animationState;
  }

  constructor(private render: Renderer2){}

  clickDownloadCv(){
    const link = this.render.createElement('a');
      link.setAttribute('href', 'assets/images/');
      link.setAttribute('download', `avatar1.png`);
      link.click();
      link.remove();
  }

  goPageProfile(url : string){
    ProfileUtil.goPageProfile(url)
  }
}
