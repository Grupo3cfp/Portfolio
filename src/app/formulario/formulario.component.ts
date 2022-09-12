import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
loginForm: FormGroup | any ;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email : ["alguien@example.com", [Validators.email, Validators.required]],
      mensaje :[
        "escribe aqui",
        [
          Validators.required
        ]
      ],
      edad : ["01234", [Validators.required]],
      nombre :[
        "",
        [
          Validators.required
        ]
      ],

    });
  }

  onLogin() {

    if (this.loginForm.valid == true) {
      alert( 'ingreso todo bien');
      alert(this.loginForm.value.mensaje);
      alert(this.loginForm.value.email);

      window.open('https://wa.me/' + 2213543668 + '?text=' +this.loginForm.value.email + this.loginForm.value.mensaje, '_blank');

    } else {

      alert( 'no ingreso todo bien');

    }
  }

}

