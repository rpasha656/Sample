import { Component } from '@angular/core';
import { FileMetadataService } from './filemetadata.service';
import { FileMetadataListing } from './filemetadatalisting.model';
import { SubCategories } from './filemetadatalisting.model';
import { FileMetadata } from './filemetadata.model';
@Component({
    selector: 'as-filelisting',
    template: require('./filelisting.component.html')
})

export class FileListingComponent {
    public filemetadatalisting: FileMetadataListing[];
    public subcategory: SubCategories[];
    public fileMetadata: FileMetadata;
    public showNoRowsMessage: boolean;
    public showfilelisting: Boolean;
    constructor(private filemetadataService: FileMetadataService) {
        this.showNoRowsMessage = false;
        this.filemetadatalisting = [new FileMetadataListing(this.subcategory)];                                                                                                                                                 
        this.fileMetadata = new FileMetadata(new Date(), 0, 0, new Date(), 1, ' ', ' ', ' ', 'HUM', new Date(), 2, 1);
        this.getFileMetadatalisting('HUM');
    }
    getFileMetadatalisting(planname: string) {
        console.log(this.showNoRowsMessage);
        this.showNoRowsMessage = false;
        this.filemetadataService.getFileMetadatalisting(planname).subscribe(res => this.populateFileListing(res.categories, true),
            err => this.populateFileListing(err, false));
    };
    populateFileListing(fileListingData: any, isSuccess: boolean) {
        this.filemetadatalisting = fileListingData;
        this.showfilelisting = isSuccess ? true : false;
        this.showNoRowsMessage = !this.showfilelisting;
        console.log(this.showNoRowsMessage);
    };
    generateId(uniqueId: string, controlname: string, toggle: boolean) {
        return (toggle ? '#' : '') + controlname + uniqueId;
    };
}
