import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DocpubComponent } from './index';
import { UploadComponent } from './upload.component';
import { FileListingComponent } from './filelisting.component';
import { FileMetadataService } from './filemetadata.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        DocpubComponent,
        UploadComponent,
        FileListingComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [FileMetadataService],
    exports: [
        DocpubComponent,
        UploadComponent,
        FileListingComponent
    ]
})
export class DocpubModule {
}
