import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
	constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
  	private http:HttpClient
  ) { }

  HelloWorldDataService(){
  	return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
  	//console.log('Hello World Data Service');
  }

  //hello-world-bean/path-var/Dennis
  HelloWorldDataServiceWithPathVariable(name){
  	return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-var/${name}`)
  	//console.log('Hello World Data Service');
  }
}
