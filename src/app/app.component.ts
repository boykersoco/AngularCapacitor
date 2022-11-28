import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCapacitor';
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient)
  {
    this.form = this.fb.group
    ({
      email: ['', [Validators.required, Validators.email]],

    });
  }

  submit()
  {
    console.log('SUBMIT THIS: ' + JSON.stringify(this.form.value))
    const baseUrl = window.location.origin;
    this.http.post(`${baseUrl}/.netlify/functions/signup`, this.form.value).subscribe(
      {
        next: (res: any) => 
        {
          console.log(res)
          alert(res.message);
        },

        error: (err: any) =>
        {
          alert('ERROR: ' + err.error);
        }
      }
    )
  }

  // image = '';

  // async captureImage()
  // {
  //   const image = await Camera.getPhoto
  //   ({
  //     quality: 90,
  //     allowEditing: true,
  //     source: CameraSource.Prompt,
  //     resultType: CameraResultType.Base64
  //   });

  //   if(image)
  //   {
  //     this.image = 'data:image/jpeg;base64, ${image.base64String}'!;
  //   }
  // }
}
