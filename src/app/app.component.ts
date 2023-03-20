import { Component } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http-app';

  blob: any;

  constructor() {}

  async onBtnClick() {
    /**
     * please replace the following url to a real picture url,
     * and the url configured accept cross domain
     */
    const url = 'http://127.0.0.1:4200/assets/logo_yk.png';
    const options = {
      url,
      responseType: 'blob',
      connectTimeout: 60000,
      readTimeout: 60000
    } as HttpOptions;
    console.log('-----------before get picture,,,,,,,,');
    const res = await CapacitorHttp.get(options);
    console.log('-----------after get picture,,,,,,,,' + res.data);
    const base64 = 'data:image/jpeg;base64,' + res.data;
    this.blob = base64;
  }

}
