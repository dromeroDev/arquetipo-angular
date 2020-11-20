import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CodigoArea } from "@core/models/codigoArea.model";

//import { environment as env } from "@environments/environment";

//const BASE: string = env.serverUrl;

@Injectable({
  providedIn: "root",
})
export class AbmService {
  constructor(private httpClient: HttpClient) {}

  public getCodigosDeArea() {
    return this.httpClient.get<CodigoArea[]>("assets/json/codigos_area.json");
  }
}
