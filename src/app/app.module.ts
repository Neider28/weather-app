import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetailWeatherComponent } from './components/detail-weather/detail-weather.component';
import { DailyItemComponent } from './components/daily-item/daily-item.component';
import { DecimalPipe } from './pipes/decimal.pipe';
import { DirectionPipe } from './pipes/direction.pipe';
import { SearchLocationComponent } from './components/search-location/search-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DetailWeatherComponent,
    DailyItemComponent,
    DecimalPipe,
    DirectionPipe,
    SearchLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    GeoapifyGeocoderAutocompleteModule.withConfig('5fdadc5fc06341e9a908e61c37ce3d21')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
