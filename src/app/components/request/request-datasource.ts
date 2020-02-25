import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

// TODO: Replace this with your own data model type
export interface ListServiceItem {
  key: string;
  stamp :string;
  refNo : string;
  
}

const dataSource: ListServiceItem[] = [
    {key : "1",refNo: "1", stamp: '2020-01-19'},
    {key : "2",refNo: "2", stamp: '2020-01-19'},
    {key : "1",refNo: "1", stamp: '2020-01-19'},
    {key : "2",refNo: "2", stamp: '2020-01-19'}
  ];
  


export class ListServiceDataSource extends DataSource<ListServiceItem> {

    data: ListServiceItem[] = dataSource;
    paginator: MatPaginator;
    sort: MatSort;
    array;
    constructor(private afs: AngularFirestore) {
      
      super();
      this.afs.collection('request/').snapshotChanges().subscribe((data: any) => {
        this.array = data.map(e => {
          return {
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          };
        });
  
        console.log(this.array);
      });
    }
    // connect(collectionViewer: import("@angular/cdk/collections").CollectionViewer): Observable<ListServiceItem[] | readonly ListServiceItem[]> {
    //     throw new Error("Method not implemented.");
    // }
    // disconnect(collectionViewer: import("@angular/cdk/collections").CollectionViewer): void {
    //     throw new Error("Method not implemented.");
    // }
    connect(): Observable<ListServiceItem[]> {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
          observableOf(this.data),
          this.paginator.page,
          this.sort.sortChange
        ];
    
        return merge(...dataMutations).pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        }));
      }

      
  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ListServiceItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ListServiceItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.stamp, b.stamp, isAsc);
        case 'key': return compare(+a.key, +b.key, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

