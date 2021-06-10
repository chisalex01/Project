import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera } from './camera.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-camera-update',
  templateUrl: './camera-update.component.html'
})
export class CameraUpdateComponent {

  public camera: Camera = <Camera>{};

  public id: string;
  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadCamere();
    });
  }

  public updateCamera() {
    this.http.put<Camera>(this.baseUrl + 'api/camere/' + this.id, this.camera).subscribe(result => {
      this.router.navigateByUrl("/camere");
    }, error => console.error(error))
  }

  public loadCamere() {
    this.http.get<Camera>(this.baseUrl + 'api/camere/' + this.id).subscribe(result => {
      this.camera = result;
    }, error => console.error(error))
  }
}
