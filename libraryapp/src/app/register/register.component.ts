import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  data={
    'username':'',
    'password':''
  }
constructor(private postapi:ApicallService,private route:Router){}
  onSubmit()
  {
    this.postapi.register(this.data).subscribe((res)=>
    {
      console.log(res);
      this.route.navigate(['login'])});
    }
  }


