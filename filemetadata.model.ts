export class FileMetadata {
    public accessedOn: Date;
    public categoryId: number;
    public subCategoryId: number;
    public expirationDate: any;
    public file: any;
    public fileExtensionId: number;
    public fileName: string;
    public displayName: string;
    public planName: string;
    public statusDate: Date;
    public sposId: number;
    public statusId: number;

    static clone(filemetadata: FileMetadata): FileMetadata {
        return new FileMetadata(filemetadata.accessedOn,
            filemetadata.categoryId,
            filemetadata.subCategoryId,
            filemetadata.expirationDate,
            filemetadata.fileExtensionId,
            filemetadata.file,
            filemetadata.fileName,
            filemetadata.displayName,
            filemetadata.planName,
            filemetadata.statusDate,
            filemetadata.sposId,
            filemetadata.statusId);
    }

    constructor(accessedOn: Date,
        categoryId: number,
        subCategoryId: number,
        expirationDate: any,
        fileExtensionId: number,
        file: any,
        fileName: string,
        displayName: string,
        planName: string,
        statusDate: Date,
        sposId: number,
        statusId: number) {
        this.accessedOn = accessedOn;
        this.categoryId = categoryId;
        this.subCategoryId = subCategoryId;
        this.expirationDate = expirationDate;
        this.fileExtensionId = fileExtensionId;
        this.file = file;
        this.fileName = fileName;
        this.displayName = displayName;
        this.planName = planName;
        this.statusDate = statusDate;
        this.sposId = sposId;
        this.statusId = statusId;
    }

    clear() {
        this.accessedOn = new Date();
        this.categoryId = 0;
        this.subCategoryId = 0;
        this.fileExtensionId = 1;
        this.file = '';
        this.fileName = '';
        this.displayName = '';
        this.planName = '';
        this.statusDate = new Date();
        this.sposId = 2;
        this.statusId = 0;
    }
}
