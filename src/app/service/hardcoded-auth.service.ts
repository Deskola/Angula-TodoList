import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authentication(username,password){
  	console.log('before '+ this.isUserLoggedIn());
  	if(username === 'drizla' && password === 'zxcvbnm'){
  		sessionStorage.setItem('authenticatedUser',username)
  		//console.log('after '+ this.isUserLoggedIn());
  		return true;
  	}
  	return false;
  }

  isUserLoggedIn(){
  	let user = sessionStorage.getItem('authenticatedUser');
  	return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
