import { Component, OnInit } from '@angular/core';
import pdfMake from "../../../../node_modules/pdfmake/build/pdfmake";
import pdfFonts from "../../../../node_modules/pdfmake/build/vfs_fonts";
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
text = "";
  constructor() { }

  generatePdf(){
    console.log(this.text);
        var docDefinition = {
          content :  [
            'This is a header',
            'header'+
             'No styling here, this is a standard paragraph'+ this.text +'Another text'+'anotherStyle'+ 'Multiple styles applied'+'header'+'anotherStyle'
          ]
        }
        // pdfMake.createPdf(docDefinition).open()
        // .subscribe((data) => {
        //   console.log(data)
        //   alert(data);
        // });
      }

  ngOnInit() {
  }

}
