import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Angajat } from './angajat.models';

@Component({
  selector: 'app-angajat',
  templateUrl: './angajat.component.html'
})
export class AngajatiComponent {
  public angajati: Angajat[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadAngajati();
  }

  public deleteAngajat(angajat: Angajat) {
    this.http.delete(this.baseUrl + 'api/angajati/' + angajat.id).subscribe(result => {
      this.loadAngajati();
    }, error => console.error(error))
  }

  loadAngajati() {
    this.http.get<Angajat[]>(this.baseUrl + 'api/angajati').subscribe(result => {
      this.angajati = result;
    }, error => console.error(error));
  }
}
