import { Component, OnInit } from '@angular/core';
import pdfMake from "../../../../node_modules/pdfmake/build/pdfmake";
import pdfFonts from "../../../../node_modules/pdfmake/build/vfs_fonts";
import { ActivatedRoute } from '@angular/router';
import { StoreInvoiceService } from 'src/app/service/store-invoice.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})


export class InvoiceComponent implements OnInit {
  private itemDoc: AngularFirestoreDocument<Item>;
  
  imgURL;
text = "";
key;
id;
singleRequest : any;
multipleRequest : any;
multipleRequest1 : any;
service : any = "";
desc :any = "";
flag;
pic : any;
downloadU : any;
uploadPercent: any;
mainImage : any;
userObj : any;
costSingle=0;
costM : [] = [];
listArr;
  constructor(private afs: AngularFirestore, private storage: AngularFireStorage,private addr: ActivatedRoute,  private _invoiceService: StoreInvoiceService) { }

  uploadFile(files) {
    if (files.length === 0){
      console.log("Only pdf are supported.")
    return;
    }
  var mimeType = files[0].type;
  if (mimeType.match(/pdf\/*/) == null) {
    // this.message = "Only images are supported.";
    console.log("Only pdf are supported.")
    return;
  }

  const file = files[0];
  console.log(file)
  const fileName = files[0].name;
  var reader = new FileReader();
  // this.imagePath = files;
  reader.readAsDataURL(files[0]);
  console.log(reader)
  reader.onload = (_event) => {
    this.imgURL = reader.result;
    console.log(this.imgURL)
    console.log(reader.result)
  }
  console.log(this.imgURL)
    // const file = event.target.files[0];
    const filePath = 'pics/PIC' + Math.random().toString(36).substring(2);
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadU = fileRef.getDownloadURL().subscribe(url => {
          console.log(url);
          // this.service.photoURL = url;
          this.mainImage = url
          this.uploadPercent = null;
        });
      })
    ).subscribe();
  }

  generatePdf(){
    let i =0;
    // console.log(i)
    if(this.flag == 'false'){
    var invoiceDoc = {
      content: [
    

      { text: 'SEKHASIMBE CONSIETIOUS COMPANY', style: 'header' },
      { text: 'Reference number: ' , style: 'sub_header' },
      { text: 'Request Issued date : ', style: 'sub_header' },
      { text: 'Electrical Technology Supplier & Services Provider', style: 'sub_header' },
      { text: 'WEBSITE: under-construction', style: 'url' },
    'Service' + 'Cost ',
    this.service +' R'+this.costSingle,this.desc,
  ],
  styles: {
      header: {
      // bold: true,
      fontSize: 20,
      alignment: 'center',
      margin : 20 
      },
      sub_header: {
      fontSize: 12,
      alignment: 'left'
      
      },
      url: {
      fontSize: 16,
      alignment: 'left',
      margin :[ 0,0,0,45] 
      }
      },
    pageSize: 'A4',
    pageOrientation: 'portrait'};
    // console.log(this.request[i])
    console.log("*** print pdf")
    const pdfDocGenerator  = pdfMake.createPdf(invoiceDoc).open();
    console.log(pdfDocGenerator)
    } else {
      var rows = [];
      var row = [];
rows.push(this.multipleRequest);
console.log(this.costM)
row.push(this.costM);
// for(let a=0; a < 2;a++) {
//     rows.push(this.multipleRequest);
// }

      var dd = {
        content: [
          { ol: [
                  { text: rows +''+row, style: 'header' },
                  ]},
        
    
      ]
    }
    //     content: [
        
    //     { text: 'SEKHASIMBE CONSIETIOUS COMPANY', style: 'header' },
    //     { text: 'Reference number: ' , style: 'sub_header' },
    //     { text: 'Request Issued date : ', style: 'sub_header' },
    //     { text: 'Electrical Technology Supplier & Services Provider', style: 'sub_header' },
    //     { text: 'WEBSITE: under-construction', style: 'url' },
    //     { ol: [
    //       this.multipleRequest[i]
    //       ]},
    //   this.multipleRequest[i]
    // ],
    // styles: {
    //     header: {
    //     // bold: true,
    //     fontSize: 20,
    //     alignment: 'center',
    //     margin : 20 
    //     },
    //     sub_header: {
    //     fontSize: 12,
    //     alignment: 'left'
        
    //     },
    //     url: {
    //     fontSize: 16,
    //     alignment: 'left',
    //     margin :[ 0,0,0,45] 
    //     }
    //     },
      // pageSize: 'A4',
      // pageOrientation: 'portrait'};
      // console.log(this.request[i])
      console.log("*** print pdf")
      const pdfDocGenerator  = pdfMake.createPdf(dd).open();
      // console.log(pdfDocGenerator)
    }
  
  }

  test(){
    console.log(this._invoiceService.getKey())
  }
  ngOnInit() {

    this.addr.queryParams.subscribe(data => {
      // this.docKey = data.key;
      this.flag = data.flag;
      console.log(this.flag);
    });

    if (this.flag == "true") {
      this.multipleRequest = this._invoiceService.getInvoiceM().ele;
      this.multipleRequest1 = this._invoiceService.getInvoiceM().ict;
      this._invoiceService.storeInvoice('');
      console.log("true");
    } else {
      this.singleRequest = this._invoiceService.getInvoice();
      this.service = this._invoiceService.getInvoice().service;
      console.log("false");
      this.desc = this._invoiceService.getInvoice().serviceDesc;
      this._invoiceService.storeInvoiceM('','');
    }
  
    this.userObj= this._invoiceService.getUserObj();
    
    // if (this._invoiceService.getInvoice().service) {
      this.afs.collection('user/').doc(this.userObj.uid).collection('request' , ref => ref.where('refNo', '==' ,this.userObj.refNo))   
      .snapshotChanges().subscribe((ee) => {
        
         ee.map(e => {
          const data = e.payload.doc.data() as any;
          const  id =  e.payload.doc.id;
          this.id = id;
          this._invoiceService.storeKey(this.id)
        
        })
        // this.afs.collection('user/').doc(this.userObj.uid).collection('request').doc(this.id).snapshotChanges().subscribe((ee) =>{
        //   console.log(ee)
        // })

        // this.itemDoc.update(item).then(() =>{
        //   alert(item.name +' is updated successful')
        // });
        // console.log("service updated succesful");


      })
     
      console.log(this.userObj.uid)
    console.log(this._invoiceService.getInvoice().service);
    console.log(this._invoiceService.getInvoice().serviceDesc );
    console.log(this.multipleRequest );
    console.log(this.multipleRequest1 );
  }

}
