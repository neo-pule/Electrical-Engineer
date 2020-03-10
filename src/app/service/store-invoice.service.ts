import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreInvoiceService {

  invoiceObj: any;
  invoiceObjIct: any;
  invoiceObjEle: any;
  userObj : any;
  user : any;
  user1 : any;
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
  storeuser(user : any) {
  this.user = user;
  }
  getUser(){
    return this.user ;
  }

  storeuser1(user : any) {
    this.user1 = user;
    }
    getUser1(){
      return this.user1 ;
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
