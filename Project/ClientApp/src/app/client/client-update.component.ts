import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html'
})
export class ClientUpdateComponent {

  public client: Client = <Client>{};

  public id: string;
  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadClienti();
    });
  }

  public updateClient() {
    this.http.put<Client>(this.baseUrl + 'api/clienti/' + this.id, this.client).subscribe(result => {
      this.router.navigateByUrl("/clienti");
    }, error => console.error(error))
  }

  public loadClienti() {
    this.http.get<Client>(this.baseUrl + 'api/clienti/' + this.id).subscribe(result => {
      this.client = result;
    }, error => console.error(error))
  }
}
