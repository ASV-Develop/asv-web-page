import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/models/content.service';

@Component({
    selector: 'app-sistemas-electricos',
    templateUrl: './sistemas-electricos.component.html',
    styleUrls: ['./sistemas-electricos.component.scss']
})
export class SistemasElectricosComponent {
    private contentService = inject(ContentService);

    services = [
        { title: 'Cableado estructurado (Cat6 / Cat6A)', bullets: ['Par trenzado FTP/UTP', 'Certificación de enlaces'] },
        { title: 'Instalación y terminación de fibra', bullets: ['Fusión y empalme', 'Test OTDR'] },
        { title: 'Racks y gabinetes', bullets: ['Montaje', 'Etiquetado y administración'] },
        { title: 'UPS y protección', bullets: ['Dimensionado', 'Estabilización de tensión'] },
        { title: 'Mantenimiento y certificación', bullets: ['Reportes de pruebas', 'Soporte SLA'] },
    ];

    brands = this.contentService.siteContent().brands;
}