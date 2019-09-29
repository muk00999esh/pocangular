import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewCarrierService {

  constructor(private http:HttpClient) { 
  }

  getAllCarriers(){
    return this.http.get('http://localhost:4000/api/carriers');    
  }


  getCarrierDetails(id){
    return this.http.get('http://localhost:4000/api/carriers/'+id);
  }
}
