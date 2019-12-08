import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  
  transform(items: any[], titleSearch: string, contractSearch: string){
    if (items && items.length){
      console.log(contractSearch)
       return items.filter(item =>{
          if (titleSearch && item.title.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1){
               return false;
           }
          if (contractSearch && item.contract_type != contractSearch){
              return false;
          }
          
               return true;
      })
    }
       else{
           return items;
       }
   }

}
