import { WelcomeDataService } from './../service/data/welcome-data.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from	'@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  title = 'Todo';
  message = 'Hello Friend!';
  welcomeMessage:string;
  name = ''
  constructor( 
    private route:ActivatedRoute,
    private service:WelcomeDataService
     ) { }

  ngOnInit() {
  	this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){   
    console.log(this.service.HelloWorldDataService());
    this.service.HelloWorldDataService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    //console.log('get getWelcomeMessage');
  }

  getWelcomeMessageWithParam(){   
    console.log(this.service.HelloWorldDataService());
    this.service.HelloWorldDataServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    //console.log('get getWelcomeMessage');
  }

  handleSuccessfulResponse(response){
    //console.log(response);
    //console.log(response.message);
    this.welcomeMessage = response.message;
  }

  handleErrorResponse(error){
    this.welcomeMessage = error.error.message;
  }

}
