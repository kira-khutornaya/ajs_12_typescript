import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly originalName: string,
    readonly isIMAX: boolean,
    readonly image: string,
    readonly datePublished: number,
    readonly countryOfOrigin: string[],
    readonly slogan: string,
    readonly genre: string[],
    readonly durationInMinutes: number,
    readonly price: number,
  ) { }
}
