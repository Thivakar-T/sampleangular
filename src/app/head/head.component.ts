import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute,Route} from '@angular/router'; 
import { LoginService } from '../login.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  product:any
  array!:[];
  constructor(
    private router:Router,
    private activatedroute:ActivatedRoute,
    private service:LoginService
  ) { }

  ngOnInit(): void {
    this.get()
  }
  get(){
    this.service.getLogin().subscribe(
      res => {
        console.log(res)
        this.product=res
      })
  }
  reject(id:any){
    this.service.deleteData(id).subscribe(
      res => {
        this.get()
      })
  }
}
