import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {

  transform(value: string, strToReplace: string, replacementStr: string): string {

    if (!value || !strToReplace || !replacementStr) {
      return value;
    }
    if (typeof value != 'string') return value;
    if (value == '') return value;
    // console.log("/" + strToReplace + "/g", replacementStr);
    
    // return value.replace("/" + strToReplace + "/g", replacementStr);
    return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
  }

}
