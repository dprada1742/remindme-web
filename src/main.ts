import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


bootstrapApplication(AppComponent, {
  providers: [ provideAnimations(), provideProtractorTestingSupport(), provideRouter(routeConfig), provideCharts(withDefaultRegisterables())],
}).catch((err) => console.error(err));
