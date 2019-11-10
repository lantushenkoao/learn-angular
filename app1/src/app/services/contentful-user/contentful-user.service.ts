import {Injectable} from '@angular/core';
import {CONFIG} from '../../config';
import {createClient, Entry} from "contentful";

@Injectable({
  providedIn: 'root'
})
export class ContentfulUserService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });
  constructor() {
  }

  getUsers(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.user
    }, query))
      .then(res => res.items);
  }
}
