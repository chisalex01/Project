import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Angajat } from './angajat.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-angajat-update',
  templateUrl: './angajat-update.component.html'
})
export class AngajatUpdateComponent {

  public angajat: Angajat = <Angajat>{};

  public id: string;
  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadAngajati();
    });
  }

  public updateAngajat() {
    this.http.put<Angajat>(this.baseUrl + 'api/angajati/' + this.id, this.angajat).subscribe(result => {
      this.router.navigateByUrl("/angajati");
    }, error => console.error(error))
  }

  public loadAngajati() {
    this.http.get<Angajat>(this.baseUrl + 'api/angajati/' + this.id).subscribe(result => {
      this.angajat = result;
    }, error => console.error(error))
  }
}
