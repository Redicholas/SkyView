export interface IWeatherData {
  list: {
    main: {
      temp: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    dt_txt: string;
  }[];
}
