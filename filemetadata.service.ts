import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FileMetadataService {
    // Resolve HTTP using the constructor
    constructor(private http: Http) { }
    // private instance variable to hold base url   
    // Fetch all existing comments
    addFileMetaData(filemetadata: Object) {
        let filemetadataString = JSON.stringify(filemetadata); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON        
        let options = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post('https://localhost:44344/api/files', filemetadataString, options) // ...using post request
            .map((res: Response) => res.json()); // ...and calling .json() on the response to return data            
    }
    getCategories() {
        // let filemetadataString = JSON.stringify(filemetadata); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.get('https://localhost:44344/api/categories', options) // ...using post request
            .map((res: Response) => res.json()); // ...and calling .json() on the response to return data
    }
    getFileMetadatalisting(id: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.get('https://localhost:44344/api/plans/' + id, options) // ...using post request
            .map((res: Response) => res.json());
    }
}
