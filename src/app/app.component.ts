import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recommendations';
  constructor(private idle:Idle, private router:Router){
    idle.setIdle(120);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    idle.onIdleStart.subscribe(() => this.router.navigate(['IdleLogOut']));
  }
  ngOnInit(){
    this.router.navigate([''])
    this.idle.watch();
  }
  
  }
