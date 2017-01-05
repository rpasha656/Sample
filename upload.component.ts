import { Component } from '@angular/core';
import { FileMetadataService } from './filemetadata.service';
import { SubCategories } from './filemetadatalisting.model';
import { FileMetadata } from './filemetadata.model';
import { FileMetadataListing } from './filemetadatalisting.model';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'as-upload',
    template: require('./upload.component.html'),
    styles: [`
    input.ng-dirty.ng-invalid { border: solid red 2px; }
    input.ng-dirty.ng-valid { border: solid green 2px; }
    select.ng-dirty.ng-invalid { border: solid red 2px; }
    select.ng-dirty.ng-valid { border: solid green 2px; }
  `]

})

export class UploadComponent {
    public showErrorMsg: boolean;
    public fileMetadata: FileMetadata;
    public subcategory: SubCategories[];
    public subJsonData: Object[];
    public category: FileMetadataListing[];
    public fileUploadSuccess: number;
    constructor(private filemetadataService: FileMetadataService) {
        this.fileMetadata = new FileMetadata(new Date(), 0, 0, new Date(), 1, ' ', ' ', ' ', 'HUM', new Date(), 2, 1);
        this.subcategory = [];
        this.category = [new FileMetadataListing(this.subcategory)];
        this.filemetadataService.getCategories().subscribe(res => this.category = res);
        this.fileUploadSuccess = 0;
        this.fileMetadata.displayName = '';
        this.fileMetadata.file = '';
    }
    changeSubCate(selectedCategory) {
        for (let x = 0; x < this.category.length; x++) {
            console.log(selectedCategory.target.value);
            if (this.category[x].id === Number(selectedCategory.target.value)) {
                console.log(this.category[x].subCategories);
                this.subJsonData = this.category[x].subCategories;
            }
        }
        console.log(this.subJsonData);
    }
    fileChanged(event: any) {
        console.log(event.srcElement.files[0].name);
        this.fileMetadata.fileName = event.srcElement.files[0].name;
        this.fileMetadata.file = event.srcElement.files;
    }
    checkLength(name) {
        if (name.target.value && (name.target.value.toString().length >= 40)) {
            console.log(this);
            this.showErrorMsg = true;
            name.target.value = name.target.value.substring(0, 40);
        } else {
            this.showErrorMsg = false;
        }
    }
    onSubmit(form: NgForm) {
        let fileMetadata = FileMetadata.clone(this.fileMetadata);
        form.reset();
        this.filemetadataService.addFileMetaData(fileMetadata).subscribe(res => this.addSuccessfull(res));
    };
    addSuccessfull(createdFileMetadataId: number) {
        if (createdFileMetadataId > 0) {
            this.fileMetadata.clear(); this.fileUploadSuccess = createdFileMetadataId;
        }
        if (createdFileMetadataId < 0) { this.fileUploadSuccess = -1; }
    }
}
