import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
constructor(private postapi:ApicallService,private route:Router,private router:ActivatedRoute){}
  data={
    "title":"",
    "author":"",
    "price":""
  }

id:any;
ngOnInit()
{
  this.id=this.router.snapshot.paramMap.get('id')
  if(this.id){
  this.postapi.getbooksbyid(this.id).subscribe((res)=>
  {
    console.log(res)
    this.data=res;
  })}
}



onsubmit(){

  if(this.id)//edit
  {
    this.postapi.editbookbyid(this.id,this.data).subscribe((res)=>
    {
      console.log(res);
      this.route.navigate(['view'])
    })

  }

  else{//add

  // console.log(this.data);

this.postapi.postbooks(this.data).subscribe((res)=>
{
  console.log(res);
  this.route.navigate(['view'])
})
}}
}
