import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  parentFormGrp : FormGroup;

  ngOnInit() {

    this.parentFormGrp = this.fb.group({
      Name:new FormControl(''),
      Age:new FormControl(''),
    })

    
  }

  test()
  {
    console.log(this.parentFormGrp)
    console.log(this.parentFormGrp.value)
  }

}
