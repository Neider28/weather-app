import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'direction'
})
export class DirectionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    value = value % 360;

    if (11.25 <= value && value < 33.75) {
      return "NNE";
    } else if (33.75 <= value && value < 56.25) {
      return "NE";
    } else if (56.25 <= value && value < 78.75) {
      return "ENE";
    } else if (78.75 <= value && value < 101.25) {
      return "E";
    } else if (101.25 <= value && value < 123.75) {
      return "ESE";
    } else if (123.75 <= value && value < 146.25) {
      return "SE";
    } else if (146.25 <= value && value < 168.75) {
      return "SSE";
    } else if (168.75 <= value && value < 191.25) {
      return "S";
    } else if (191.25 <= value && value < 213.75) {
      return "SSW";
    } else if (213.75 <= value && value < 236.25) {
      return "SW";
    } else if (236.25 <= value && value < 258.75) {
      return "WSW";
    } else if (258.75 <= value && value < 281.25) {
      return "W";
    } else if (281.25 <= value && value < 303.75) {
      return "WNW";
    } else if (303.75 <= value && value < 326.25) {
      return "NW";
    } else if (326.25 <= value && value < 348.75) {
      return "NNW";
    } else {
      return "N";
    }
  }

}
