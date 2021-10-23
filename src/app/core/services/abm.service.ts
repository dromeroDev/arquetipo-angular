import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "@core/models/emplado";

//import { environment as env } from "@environments/environment";

//const BASE: string = env.serverUrl;

@Injectable({
  providedIn: "root",
})
export class AbmService {
  constructor(private httpClient: HttpClient) {}

  public getCodigosDeArea() {
    return this.httpClient.get<Empleado[]>("assets/json/MOCK_DATA.json");
  }
}
