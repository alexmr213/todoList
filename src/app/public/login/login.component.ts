import { Component, OnInit } from '@angular/core';
import { ServiceLoginService } from '../../services/service-login.service';
import { AuthGuard } from '../../guards/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  nombre:string;
  registrarse:boolean=false;

  constructor(private loginService:ServiceLoginService,
    private auth: AuthGuard,
    private router:Router) { }

  ngOnInit(): void {
  
  }
  login(){
    if(!this.registrarse){
    let user = {email:this.email, password:this.password}
    this.loginService.login(user).subscribe(user=>{

      // this.auth.canActivate(user.ok);´
      window.localStorage.setItem('status', user.ok)
      window.localStorage.setItem('idUser', user.usuario)
      if(user.ok){
        this.router.navigateByUrl('/home');
      }
    }, error => window.localStorage.setItem('status', error.ok)
    );
  } else {
    let user = {email:this.email, password:this.password, nombre:this.nombre}
    this.loginService.registro(user).subscribe(user=>{
      console.log(user);
    window.localStorage.setItem('status', user.ok)
    window.localStorage.setItem('idUser', user.usuarioDB._id)
    if(user.ok){
      this.router.navigateByUrl('/home');
    }
  }, error => window.localStorage.setItem('status', error.ok));
  }
  }

 
}
