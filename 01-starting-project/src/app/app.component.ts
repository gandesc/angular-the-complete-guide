import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = '';

  get selectedUser() {
    return this.users
      .find(({id}) => id === this.selectedUserId);
  }

  onSelectUser(idx:string) {
    console.log(idx);

    this.selectedUserId = idx;
  }
}
