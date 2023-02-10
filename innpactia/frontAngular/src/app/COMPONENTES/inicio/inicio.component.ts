
import { Component, OnInit } from '@angular/core';
import {ClienteService, Client} from "../../SERVICES/clientes.service"
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  ListarCliente: Client[] | undefined;
  constructor(private ClienteService: ClienteService){ }
  ngOnInit() : void{
    this.listarCliente();
  }

  listarCliente()
  {
    this.ClienteService.getClients().subscribe(
      res=>{
        console.log(res);
        this.ListarCliente=<any>res;
      },
      err => console.log(err)
    );
  }
}
