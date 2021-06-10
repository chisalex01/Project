import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera } from './camera.models';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html'
})
export class CamereComponent {
  public camere: Camera[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadCamerai();
  }

  public deleteCamera(camera: Camera) {
    this.http.delete(this.baseUrl + 'api/camere/' + camera.id).subscribe(result => {
      this.loadCamerai();
    }, error => console.error(error))
  }

  loadCamerai() {
    this.http.get<Camera[]>(this.baseUrl + 'api/camere').subscribe(result => {
      this.camere = result;
    }, error => console.error(error));
  }
}
