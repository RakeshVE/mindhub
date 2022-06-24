import { Component, OnInit } from '@angular/core';
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
user:Users[]=[];

  constructor(private productdetailService:ProductdetailService,private userservic:UserService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getBookdetails() {

    const result = this.productdetailService.GetBookdetail({
    });
    result.subscribe((res: any) => {
      this.bookdetail = res;
     
    });
  }

  getUser() {

    const result = this.userservic.GetUser({
    });
    result.subscribe((res: any) => {
      this.user = res;
     
    });
  }
}
