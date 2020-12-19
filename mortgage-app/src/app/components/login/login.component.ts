import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { UserLoginDTO } from 'src/app/models/user-login';
import {UserService} from '../../services/user-service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public userLoginDTO: UserLoginDTO;
  public invalidLogin: boolean=false;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { 
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]});
  }

  ngOnInit() {
  }

  loginUser(){
    if(this.loginForm.valid){
      var username= this.loginForm.get("username").value;
      var password= this.loginForm.get("password").value;
      this.userLoginDTO  =new UserLoginDTO(username, password);
      this.userService.loginUser(this.userLoginDTO).subscribe(result=>{
        if(result.email==username){
          this.router.navigate(['/welcome-page']);
          this.invalidLogin=false;
        } 
      }, error=>{
        this.loginForm.get("username").setValue('');
        this.loginForm.get("password").setValue('');
        this.invalidLogin=true;
      }) ;
    } else {
      console.log("Input error!");
    }
  }
}
