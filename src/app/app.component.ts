import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InfinitiResearch';

  constructor(private router : Router){}

  goBack(){
    this.router.navigate([`/category`])
  }
}
