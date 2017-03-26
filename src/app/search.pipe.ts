import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform{

  transform(value: any, term): any {
    if (term === '') {
      return value
    }
    return value.filter((user) => {
      return user.display_name.toLowerCase().startsWith(term.toLowerCase())
    });
  }

}
