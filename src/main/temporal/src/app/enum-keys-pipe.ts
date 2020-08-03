import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumKeysPipe'
})
export class EnumKeysPipe implements PipeTransform {

  transform(data: Object): Array<String> {
    return Object.keys(data);
  }

}
