import { Component } from '@angular/core';
import { DemoService } from "./demo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DemoService]
})
export class AppComponent {
  constructor(private demoService: DemoService){}
  title = 'app works!';
  msg: string;
  hello() {
    this.msg = this.demoService.sayHello("Peti");
  }
}
