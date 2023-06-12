import { Component, OnInit} from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit{
  
  selectFile!: File;
  userProfile!: any;
  editValue: boolean = false;

  editProfile() {
    this.editValue = true;
  }

  constructor(private UserService: UserservicesService) {}

  ngOnInit():void {
    this.getUser();
  }

  getUser() {
    this.UserService.getUser().subscribe(
      (response: any) => {
        console.log('response: ', response);
        this.userProfile = response;
      },
      (error) => {
        console.log('Error: ', error);
      }
    );
  }
cancelUpdate(){
  this.editValue=false;
}
  onFileSelected(event: any) {
    this.selectFile = event.target.files[0];
  }

  updateProfile(){
   this.UserService.updateUser(this.userProfile)
  }
}
