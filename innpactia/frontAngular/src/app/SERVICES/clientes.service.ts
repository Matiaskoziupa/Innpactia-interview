import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url="http://localhost:3000/api/clients/allClients"
  url2="http://localhost:3000/api/clients"
  url3="http://localhost:3000/api/clients/addClient"
  constructor(private http: HttpClient) { }

  //getClients
  getClients(){
    return this.http.get(this.url)
  }

  //un cliente
  getOneClient(id:string){
    return this.http.get(this.url2+"/"+id)
  }
  //agregar cliente

  addClient(client:Client){
    return this.http.post(this.url3, client)
  }
}
export interface Client{
  id?:number;
  user?:string;
  phone?:string;
  description?:string
}
