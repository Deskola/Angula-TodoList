import { HardcodedAuthService} from './../service/hardcoded-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'drizla';
  password = '';
  errorMsg = 'Invalid Cridentials';
  invalidLogin = false
  constructor( private route:Router, private hardcodedAuthService:HardcodedAuthService) { }

  ngOnInit() {
  }

  handleLogin(){
    
    //if(this.username === 'drizla' && this.password === 'zxcvbnm'){
    if(this.hardcodedAuthService.authentication(this.username, this.password)){
      this.invalidLogin = false;
      this.route.navigate(['welcome',this.username])
    }else{
      this.invalidLogin = true;
    }
  }

}
