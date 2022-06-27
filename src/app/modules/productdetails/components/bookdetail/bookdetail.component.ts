import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bookdetail } from 'src/app/shared/model/bookdetail';
import { Users } from 'src/app/shared/model/users';
import { ProductdetailService } from 'src/app/shared/services/productdetail.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
bookdetail:Bookdetail[]=[];
bookdetails:any;
user:Users[]=[];
token:any;
bookImages:any;
selectImg:any="images_mimdhub.png";
  constructor(private productdetailService:ProductdetailService,private userservic:UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   // this.getUser(); 
   this.route.params.subscribe(event => {
    debugger////
    var x = event;
    let numberValue = Number(event['id']);
      this.token =numberValue ;
     });
    // var a=this.route.snapshot.params;
    this.getBookdetails();
    this. getBookImage();
  }
  getBookdetails() {
//let id= 7;
let id= this.token!=null? this.token:7;
this.productdetailService.GetBookdetail(id).subscribe(
 
  data => {
    debugger
    this.bookdetails=data;
    this.selectImg=this.bookdetails.image;
  },
  error => {
  }
)

    // const result = this.productdetailService.GetBookdetail(id);
    // debugger
    // result.subscribe((res: any) => {
    //   debugger
    //   this.bookdetail = res;
     
    // });
    
  }

  getBookImage() {
    //let id= 7;
    let id= 3;
    this.productdetailService.GetBookImage(id).subscribe(
     
      data => {
        debugger
        this.bookImages=data;
      },
      error => {
      }
    )
  }

  getUser() {

    const result = this.userservic.GetUser({
    });
    result.subscribe((res: any) => {
      this.user = res;
     
    });
  }

  displayImg(img:string){
    debugger
this.selectImg=img;

  }
  // displayId(event: Event){
  //   this.image = event.target;
  // }
}
