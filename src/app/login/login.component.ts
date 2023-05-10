import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule,FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { from, fromEvent, interval, of, Subscription } from 'rxjs';
import { Condition, promise } from 'selenium-webdriver';
import * as shajs from 'sha.js';
import { map, retry, toArray } from 'rxjs/operators';
import { error } from 'console';
import { HttpClient } from '@angular/common/http';


//import * as CryptoJS from 'crypto-js'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {
  public frmgroup:FormGroup;
  public submitted=false;
  strhashValue:string;
  
  constructor(private frmBuilder:FormBuilder,private router:Router,private httpClient :HttpClient) {

    this.frmgroup = this.frmBuilder.group({ 
      txtLogin:['',Validators.required],
      txtPassword : ['',Validators.required]
   });

   }
   /* Addition Course For Learning for Creating Observable Stream */
  ngAfterViewInit(): void {
    fromEvent(this.btnFromEvent.nativeElement,'click').subscribe(res=>{console.log(res)});
  }
  videoSubscription:Subscription
  /* Addition Course For Learning */
  loginform :FormGroup;
  
 
  
  ngOnInit(): void {

     /* Addition Course For Learning */
     var empArray:Array<any> =['123','123123123'];
     const ArrayFrom = from(empArray);

    //  const ArrayTo = of(1,'23','11')
     
    // // ArrayFrom.subscribe((res)=>{ console.log(res); })
    //  ArrayTo.subscribe((res)=>{ console.log(res); })


     const broadcastvideo = interval(1000);
      /* Addition Course For Learning */
      // this.videoSubscription =  broadcastvideo.pipe( 

      //   map((data) => {data=data*2; return data; })

      //  ).subscribe((res)=>{console.log(res);
      
      //   // if(res>10)
      //   // {
      //   //   this.videoSubscription.unsubscribe();

      //   // }
      
      // });

      var vResult=[]
      this.httpClient.get<Result[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe(response1 => {
        vResult=response1;
        from(vResult).pipe(map(data1=>data1.userId)).subscribe(data=>console.log(data));
      }
      
      
      );
     
      
     
      

    //  const ArrData = from (fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>data.json()))
    // // console.log(ArrData);
    // ArrData.pipe(toArray()).subscribe(DATA1=>console.log(DATA1));
    //  //from(ArrData).pipe(map(data1=>data1.userId)).subscribe(data=>{ console.log(data); })


     const ArrData1 = [ {body:'111',userId:'1'},{body:'xxx',userId:'2'}]
     console.log(from(ArrData1));
    //  from(ArrData1).subscribe(data=>console.log(data));
     //from(ArrData1).pipe(map(data1=>data1.userId)).subscribe(data=>{ console.log(data); })
      
  }

  public LoginCheck()
  {
    
    this.submitted=true;

    if(this.frmgroup.invalid)
    {
      return;
    }
    this.submitted=false;
    //this.strhashValue =shajs('sha256').update(this.formDetail.txtPassword.value).digest('hex');
    //this.strhashValue =CryptoJS.AES (this.formDetail.txtPassword.value);
    console.log(this.formDetail) ;
    localStorage.setItem('isLoggedIn', "true");  
    localStorage.setItem('empno', "111844");  
    localStorage.setItem('name', "bhoomin patel");  
    this.router.navigate(["Home"]);

  }
  get formDetail()
  {
    return this.frmgroup.controls;
  }

  
  
  
  /* Addition Course For Learning */

  @ViewChild('btnFromEvent') btnFromEvent:ElementRef


  condition1()
  {
    return false;
  }

  condition2()
  {
    return false;
  }

  blResult = new Promise((resolve,rejects)=>
  { 

    if(this.condition1())
    {
      return  setTimeout(() => {
        resolve("Condition 1 Executed");
      }, 3000);
     
    }
    else if(this.condition2())
    {
      return  setTimeout(() => {
        resolve("Condition 2 Executed");
      }, 3000);
    }
    else
    {
      return  setTimeout(() => {
        resolve("Both Failed");
      }, 3000);
    }
    
   });


  async GetLoginDetail()
  {
    //Call Promise
    this.blResult.then(console.log).catch(console.log);
   // await this.blResult.then(console.log).catch(console.log);
    console.log('123123');
    //Async Await
  }

  /* Addition Course For Learning */
}

export class Result
{
  body:string;
  id:string;
  title:string;
  userId:string
}