import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Configuracion } from './modelos/Configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})

export class App {

  name = new FormControl<string>('', Validators.required);
  numero = new FormControl<number | null>(null, [Validators.required, Validators.min(4)]);
  intento = new FormControl<number | null>(null, Validators.required);

  configuracion!: Configuracion;
  juego = false;

  intentosRestantes: number = 0;
  numeroUsuario: number | null = null;
  numeroGenerado: number = 0;
  mensaje: string = '';
  botonBloqueado: boolean = false;

  get botonDisabled(): boolean {
    return this.name.invalid || this.numero.invalid || this.intento.invalid;
  }

  recogerDatos() {
    this.configuracion = {
      name: this.name.value!,
      numero: this.numero.value!,
      intentos: this.intento.value!
    };

    this.juego = true;

    this.name.disable();
    this.numero.disable();
    this.intento.disable();

    this.intentosRestantes = this.configuracion.intentos;

    this.numeroGenerado = Math.floor(Math.random() * this.configuracion.numero);
  }

  comprobarNumero() {
  if (this.numeroUsuario === null) return;

  this.intentosRestantes--;

  const diferencia = this.numeroGenerado - this.numeroUsuario;

  if (diferencia === 0) {
    this.mensaje = '¡Has Ganado! 🎉';
    this.botonBloqueado = true;
    return;
  }

  if (diferencia < 0) {
    this.mensaje = 'Te pasaste';
  } else if (diferencia === 1) {
    this.mensaje = 'Caliente 🔥';
  } else if (diferencia === 2) {
    this.mensaje = 'Templado 🙂';
  } else {
    this.mensaje = 'Frío ❄️';
  }

  if (this.intentosRestantes <= 0) {
    this.mensaje = `❌ Te quedaste sin intentos. El número era: ${this.numeroGenerado}`;
    this.botonBloqueado = true;
  }
}
};
