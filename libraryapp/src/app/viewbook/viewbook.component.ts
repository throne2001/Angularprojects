import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent {
data:any
  constructor(private getapi:ApicallService,private route:Router){}

  ngOnInit(){
    this.getapi.getbooks().subscribe((res)=>{
      this.data=res;
      console.log(res);
      
    })
  }
 view(id:any)
 {
  console.log(id);
  this.route.navigate(['detail',id])


 }
 delete(id:any)
{
  console.log(id);
  if(confirm("Are you sure you want to delete"))
  {
    this.getapi.deletebookbyid(id).subscribe((res)=>
    {
      console.log(res);
      this.ngOnInit()
    })
  }
}
edit(id:any)
{
  this.route.navigate(['edit',id])
}
}
