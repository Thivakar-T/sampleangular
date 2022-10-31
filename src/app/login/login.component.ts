import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  // public Submitted!=false;
  public Submitted = false;
  paramId:any;
  obj:any

  constructor(
    private fb:FormBuilder,
    private loginService:LoginService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      id:[''],
      name: ['', Validators.required],
      age: ['', Validators.required],
    })
    this.loginService.getLogin().subscribe(
      res => {
        console.log(res)
      })
      this.paramId = this.route.snapshot.params['data'];
      console.log(this.paramId)
      this.getId();
  }
  get f() {
    return this.loginForm.controls;
  }
  submit(){
    this.Submitted = true;
    if(this.loginForm.invalid){
      return ;
    }
    console.log(this.loginForm.value.id)

    if(this.paramId){
      this.loginForm.value.id=this.paramId
      this.loginService.updateLogin(this.loginForm.value,this.paramId).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/head']);
        })
    }else{
    this.loginService.login(this.loginForm.value).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/head']);
      })}
  }

  getId(){
    this.loginService.getidData(this.paramId).subscribe(
      res => {
        console.log(res)
        this.obj=res
      })
  }
}
