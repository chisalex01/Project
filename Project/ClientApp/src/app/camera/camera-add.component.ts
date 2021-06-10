import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera } from './camera.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera-add',
  templateUrl: './camera-add.component.html'
})
export class CameraAddComponent {

  public camera: Camera = <Camera>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveCamera() {
    this.http.post(this.baseUrl + 'api/camere', this.camera).subscribe(result => {
      this.router.navigateByUrl("/camere");
    }, error => console.error(error))
  }
}
