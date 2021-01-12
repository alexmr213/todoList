import { Component, OnInit } from '@angular/core';
import { ServiceLoginService } from '../../services/service-login.service';
import { AuthGuard } from '../../guards/auth.guard';
import { Router } from '@angular/router';
import { UsuarioModel } from '../models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  nombre: string;
  usuario: UsuarioModel;
  registrarse: boolean = false;

  constructor(private loginService: ServiceLoginService,
    private auth: AuthGuard,
    private router: Router) {
    this.usuario = new UsuarioModel();
  }


  ngOnInit(): void {
    this.usuario.email = '';
    this.usuario.password = '';
  }


  onSubmit(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      console.log('no ha entrado'); return;
    }
    if (!this.registrarse) {

      this.loginService.login(this.usuario).subscribe(user => {

        // this.auth.canActivate(user.ok);´
        window.localStorage.setItem('status', user.ok)
        window.localStorage.setItem('idUser', user.usuario)
        if (user.ok) {
          this.router.navigateByUrl('/home');
        }
      }, error => window.localStorage.setItem('status', error.ok)
      );
    } else {
      this.loginService.registro(this.usuario).subscribe(user => {
        console.log(user);
        window.localStorage.setItem('status', user.ok)
        window.localStorage.setItem('idUser', user.usuarioDB._id)
        if (user.ok) {
          this.router.navigateByUrl('/home');
        }
      }, error => window.localStorage.setItem('status', error.ok));
    }

  }


}
