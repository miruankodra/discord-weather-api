export interface WeatherDto {
    latitude: number;
    longitude: number;
    elevation: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    hourly: {
        time: string[]; // Array of strings representing date-time values
        temperature_2m: number[]; // Array of numbers representing temperatures
    };
    hourly_units: {
        temperature_2m: string; // Unit for temperature, e.g., "°C"
    };
}