export class FileMetadataListing {
    id: number;
    name: string;
    subCategories: SubCategories[];
    constructor(subCategories: SubCategories[]) { this.subCategories = []; }
}
export class SubCategories {
    id: number;
    name: string;
    fileMetadata: FileMetadataModel[];
    constructor(fileMetadata: FileMetadataModel[]) { this.fileMetadata = []; }
}
export class FileMetadataModel {
    id: number;
    accessedOn: Date;
    categoryId: number;
    subCategoryId: number;
    expirationDate: Date;
    fileExtensionId: number;
    fileName: string;
    planName: string;
    statusDate: Date;
    sposId: number;
    statusId: number;
}
