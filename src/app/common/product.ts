export class Product {
    
   

    constructor(public sku:string,public name:string,public description:string,public unitPrice:number,public imageUrl:string,
        public active:boolean,public unitStock:number,public dateCreated:Date,public dateUpdated:Date,public categoryId:number){

    }



}
