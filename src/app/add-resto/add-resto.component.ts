import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl} from '@angular/forms'
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert:boolean=false

  addResto=new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    add:new FormControl(''),
    email:new FormControl('')
  })

  constructor(private resto:RestoService) {
    console.warn("AddResto Component Loaded")
   }

  ngOnInit(): void {
  }

  collectResto()
  {
    //console.warn(this.addResto.value)
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{console.warn("result is here",result)})
    this.alert=true
    this.addResto.reset({})
  }
  closeAlert()
  {
    this.alert=false
  }
}
