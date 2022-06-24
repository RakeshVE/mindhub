import { Component, OnInit } from '@angular/core';
import { MenuInfo } from '../../interface/ec-template.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  // menuList: MenuInfo[] = [];
  menuList: any;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.getMenuList();
  }

  getMenuList() {
    this.dataService.getMenuList().subscribe((data: MenuInfo) => {
      this.menuList = data;
    });
  }

}
