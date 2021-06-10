import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html'
})
export class ClientAddComponent {

  public client: Client = <Client>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveClient() {
    this.http.post(this.baseUrl + 'api/clienti', this.client).subscribe(result => {
      this.router.navigateByUrl("/clienti");
    }, error => console.error(error))
  }
}
