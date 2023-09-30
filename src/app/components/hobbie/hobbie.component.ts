import { Component, Input } from '@angular/core';
import { ProgressbarType } from 'ngx-bootstrap/progressbar';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hobbie',
  templateUrl: './hobbie.component.html',
  styleUrls: ['./hobbie.component.css']
})
export class HobbieComponent {
  typePro: ProgressbarType = 'danger'
  @Input() isLoadHobbie!: boolean

  objHobbie = [
    { title: "Listen to music", value: 88, type: this.typePro },
    { title: "Play game", value: 70, type: this.typePro },
    { title: "Reading book", value: 15, type: this.typePro },
    { title: "Program", value: 90, type: this.typePro },
    { title: "Travel", value: 99, type: this.typePro },
    { title: "Cook", value: 66, type: this.typePro },
    { title: "Do sports", value: 51, type: this.typePro },
    { title: "Go camping", value: 74, type: this.typePro },
    { title: "Go shopping", value: 45, type: this.typePro },
    { title: "Play chess", value: 10, type: this.typePro },
    { title: "Sing", value: 90, type: this.typePro },
    { title: "Sleep", value: 50, type: this.typePro },
    { title: "Take photo", value: 40, type: this.typePro },
    { title: "Billiards", value: 30, type: this.typePro },
    { title: "Fishing", value: 50, type: this.typePro },
    { title: "Running", value: 78, type: this.typePro },
    { title: "Dance", value: 1, type: this.typePro },
    { title: "Football", value: 65, type: this.typePro },
    { title: "Seafood", value: 95, type: this.typePro },
    { title: "Monney", value: 99, type: this.typePro },
    { title: "Watch TV", value: 66, type: this.typePro },
  ]

  ngOnInit() {
    this.getHobbie()
  }

  getHobbie() {
    this.objHobbie.forEach(element => {
      if (element.value <= 30) {
        const a: ProgressbarType = 'danger'
        element.type = a
      } else if (element.value <= 80) {
        const a: ProgressbarType = 'warning'
        element.type = a
      } else {
        const a: ProgressbarType = 'success'
        element.type = a
      }
    });
  }

  ngOnChanges() {
    this.setIntevalProgressBar()
  }

  setIntevalProgressBar(){
    if (this.isLoadHobbie) {
      this.objHobbie.forEach(element => {
        const valueE = element.value
        let start = 0;
        element.value = start
        const interval = setInterval(() => {
          if (start < valueE) {
            start += 1;
            element.value = start
          } else {
            clearInterval(interval);
          }
        },20)
      });
    }
  }
}


