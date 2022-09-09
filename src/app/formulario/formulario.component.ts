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
      email : ["", [Validators.email, Validators.required]],
      password :[
        "",
        [
          Validators.required
        ]
      ]
    });
  }

}
