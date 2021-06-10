import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Angajat } from './angajat.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angajat-add',
  templateUrl: './angajat-add.component.html'
})
export class AngajatAddComponent {

  public angajat: Angajat = <Angajat>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveAngajat() {
    this.http.post(this.baseUrl + 'api/', this.angajat).subscribe(result => {
      this.router.navigateByUrl("/angajati");
    }, error => console.error(error))
  }
}
