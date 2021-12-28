import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchData'
})
export class SearchDataPipe implements PipeTransform {

  transform(arr: any, args: any): any {
    console.log(arr, args);
    
    if((!args || args == '')){
      return arr
    }
    if(args){
      let colArr = Object.keys(arr[0]);
      colArr.forEach((colName: string)=>{
        // console.log("check",colName);
        let base =  arr.filter((val: any) => {
          if(val[colName] == args){
            return val
          }
        })
        return base
        
      });
   
      // return arr.filter((val: any) => val.toLowerCase().indexOf(args.toLowerCase()) >= 0);


      // let colArr = Object.keys(args[0]);
      // colArr.forEach((colName: string)=>{
      //   let base = arr.filter((val: any) =>{
      //     if(val.colName)val.colName.toLowerCase()
      //     if(val.indexOf(args.toLowerCase()) >= 0){
      //       return val
      //     }
      //     return base
      //     });
      // })
    }
  }

}
