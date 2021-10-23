import { Component, OnInit } from "@angular/core";
import { Empleado } from "@core/models/emplado";
import { AbmService } from "src/app/core/services/abm.service";

// Modals
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalConfirm } from "@shared/modals/modal.confirm/modal.confirm";

@Component({
  selector: "app-abm",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public empleados: Empleado[];
  public empleadosShown: Empleado[];

  constructor(private abmService: AbmService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.abmService.getCodigosDeArea().subscribe((res) => {
      this.empleados = res;
      this.collectionSize = this.empleados.length;
      this.refreshTable();
    });
  }

  page = 1;
  pageSize = 10;
  collectionSize = 0;

  refreshTable() {
    this.empleadosShown = this.empleados
      .map((codigo, i) => ({ id: i + 1, ...codigo }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  goToView(editEnabled: boolean) {
    console.log(`View, edit enabled = ${editEnabled}`);
  }

  openModalConfirm(elemento: Empleado) {
    let modal = this.modalService.open(NgbdModalConfirm);

    modal.result.then(
      (elemento: any) => {
        this.deleteElement(elemento);
      },
      (reason: any) => {
        // Aunque la acción Dismiss no realice acciones, debe capturarse el evento
      }
    );

    modal.componentInstance.elemento = elemento;
  }

  deleteElement(elemento: Empleado) {
    const index = this.empleados.findIndex((item) => {
      return item.legajo === elemento.legajo;
    });

    if (index > -1) {
      this.empleados.splice(index, 1);
      // TODO eliminar permanentemente
      this.refreshTable();
    }
  }
}
