import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpRequest} from '@angular/common/http';
import {DataService} from './data.service'
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})

export class AppComponent {
  // Inject HttpClient into your component or service.
 constructor(private http: HttpClient) {}
 ngOnInit(): void {
   // Make the HTTP request:
   this.http.get('http://localhost:8888/api/v1/products').subscribe(data => {
   // console.log(data);
   });
 }
}
