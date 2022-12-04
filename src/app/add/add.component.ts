import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name=""
  DescribeYourFriend=""
  friendName=""
  friendNickName=""

  addFriend =()=>
  {
    let data:any={"name":this.name,"describe friend":this.DescribeYourFriend,"fname":this.friendName,"fnickname":this.friendNickName}
    console.log(data)
  }


}
