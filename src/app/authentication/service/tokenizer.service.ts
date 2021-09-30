import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenizerService {
  url_string: string
  token: string

  constructor() { }

  getToken()
  {
    this.url_string = window.location.hash
    this.token = this.url_string.slice(this.url_string.indexOf('=')+1, this.url_string.indexOf('&'))
    console.log(this.token) 
  }
}
