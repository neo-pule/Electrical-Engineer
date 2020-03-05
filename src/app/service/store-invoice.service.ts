import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreInvoiceService {

  invoiceObj: any;
  invoiceObjIct: any;
  invoiceObjEle: any;
  userObj : any;
  key;
  constructor() { }

  storeInvoiceM(ictObj: any,eleObj : any){
    this.invoiceObjIct = ictObj;
    this.invoiceObjEle = eleObj;
  }
  storeInvoice(obj: any){
    this.invoiceObj = "";
    this.invoiceObj = obj;
    console.log(this.invoiceObj);
  }
  getInvoiceM(){
    return {ele :this.invoiceObjEle,ict :this.invoiceObjIct};
  }
  storeKey(id : any){
    this.key = id;
  }
  getKey(){
    return this.key ;
  }
  storeUserObj(obj : any){
    this.userObj = obj;
  }
  getUserObj(){
    return this.userObj ;
  }
  getInvoice(){
    return this.invoiceObj;
  }
}
