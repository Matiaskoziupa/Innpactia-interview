// import { ClienteService, } from './../../SERVICES/cliente.service';
import { Component, OnInit } from '@angular/core';
import {ClienteService, Client} from "../../SERVICES/clientes.service"
import {Router} from "@angular/router"

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{

  cliente:Client={
    user:"",
    phone:"",
    description:""
  }
  constructor(private ClienteService:ClienteService, private router:Router){}
  ngOnInit() : void {

  }

  agregar(){
    this.ClienteService.addClient(this.cliente).subscribe()

  }
}
