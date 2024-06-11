import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Asegúrate de que la ruta sea correcta

import { Router } from '@angular/router';  // Importa el Router
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user$: Observable<any> = EMPTY;  // Inicializar con un observable vacío

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user$ = this.authService.getUser();
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);  // Navegar a la página Login después del cierre de sesión exitoso
      })
      .catch(error => console.error('Logout failed', error));
  }

}
