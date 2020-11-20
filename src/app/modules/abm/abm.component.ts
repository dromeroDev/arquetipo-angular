import { Component, OnInit } from "@angular/core";
import { CodigoArea } from "src/app/core/models/codigoArea.model";
import { AbmService } from "src/app/core/services/abm.service";

@Component({
  selector: "app-abm",
  templateUrl: "./abm.component.html",
  styleUrls: ["./abm.component.scss"],
})
export class AbmComponent implements OnInit {
  public codigosArea: CodigoArea[];

  constructor(private abmService: AbmService) {}

  ngOnInit(): void {
    this.abmService.getCodigosDeArea().subscribe((res) => {
      this.codigosArea = res;
    });
  }
}
