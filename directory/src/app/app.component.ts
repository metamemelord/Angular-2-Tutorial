import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directory';
  passToChild = {
    name: "Wew",
    who: "From parent"
  }
  public getTitle(): string {
    return this.title + "via a function!";
  }

  testEventFunction(event) {
    alert(event.target.value);
  }
}
