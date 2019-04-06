import { Component, OnInit,Input } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder,ControlContainer,FormGroupDirective} from '@angular/forms'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  viewProviders:[{ provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class ChildComponent implements OnInit {

  @Input() control 
  @Input() ParentformGroup;

  cities2 = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

  constructor() { }

  ngOnInit() {


    this.ParentformGroup.addControl(this.control,new FormControl('',Validators.required));

    
    this.ParentformGroup.get(this.control).valueChanges.subscribe(val => {
      console.log(val);
    });
  

    
  }

}
