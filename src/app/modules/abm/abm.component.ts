import { Component, OnInit } from "@angular/core";
import { CodigoArea } from "src/app/core/models/codigoArea.model";
import { AbmService } from "src/app/core/services/abm.service";

// Modals
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalConfirm } from '@shared/modals/modal.confirm/modal.confirm';

@Component({
  selector: "app-abm",
  templateUrl: "./abm.component.html",
  styleUrls: ["./abm.component.scss"],
})
export class AbmComponent implements OnInit {
  public codigosArea: CodigoArea[];
  public codigosAreaShown: CodigoArea[];

  constructor(
    private abmService: AbmService,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.abmService.getCodigosDeArea().subscribe((res) => {
      this.codigosArea = res;
      this.collectionSize = this.codigosArea.length;
      this.refreshTable();
    });
  }

  page = 1;
  pageSize = 10;
  collectionSize = 0;

  refreshTable() {
    this.codigosAreaShown = this.codigosArea
      .map((codigo, i) => ({id: i + 1, ...codigo}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  goToView(editEnabled){
    console.log(`View, edit enabled = ${editEnabled}`);
  }

  openModalConfirm(elemento){
    let modal = this.modalService.open(NgbdModalConfirm);
    modal.componentInstance.elemento = elemento;
  }
}
