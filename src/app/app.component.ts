import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'sharingdata';

  currentName="Gayathri"


  user={
    name:'Bhavani',
    age:23,
    country:'India'

  }

  users=['bhavani','gayathri']
  addUser(user:any){
    this.users.push(user)
  }



}
