import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data={
    'username':'',
    'password':''
  }
constructor(private postapi:ApicallService,private route:Router){}
  onSubmit()
  {
    console.log(this.data);
    this.postapi.login(this.data).subscribe((res)=>
    {
      console.log(res);
      localStorage.setItem('token',"token "+res.token);
      console.log(localStorage.getItem('token'));
      this.route.navigate(['']);
    });
    }
  }

