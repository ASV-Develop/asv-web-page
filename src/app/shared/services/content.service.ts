import { Injectable, signal } from '@angular/core';
import { SiteContent, NavItem, Brand, Service, CompanyServices } from '../models/content.models';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private content = signal<SiteContent>(this.getSiteContent());

  readonly siteContent = this.content.asReadonly();

  private getSiteContent(): SiteContent {
    return {
      company: {
        name: 'ASV Telefónica',
        tagline: 'Telecomunicaciones & Redes',
        yearsExperience: 28,
        description:
          'ASV TELEFONICA es una empresa dedicada a brindarle Asesoría, Servicios, Venta, alquiler de Centrales Telefónicas, cableado estructurado en Categorías 6 y 6A, instalación y fusionado de fibra óptica, tensión estabilizada para Sistemas de cómputo, CCTV y Accesorios para Voz y Data.',
        mission:
          'Brindar servicios y soluciones de alta tecnología, que faciliten las operaciones productivas y administrativas de nuestros clientes, y generar su confianza con el otorgamiento de un servicio de calidad; garantizados por el profesionalismo y la permanente capacitación de nuestros colaboradores.',
        vision:
          'Ser considerados a nivel nacional, como una empresa que ofrece servicios y soluciones de alta tecnología con calidad y valor agregado.',
        commitment:
          'Nuestro compromiso es promover el éxito de nuestros clientes con soluciones adecuadas a sus necesidades, facilitando su desarrollo y el de nuestros colaboradores, basados en el mejoramiento continuo.',
      },
      contact: {
        address: 'Calle Ines Huaylas Yupanqui Nro. 235 - San Miguel, Lima - Perú',
        phone1: '(01) 244-2656',
        phone2: '(01) 264-7232',
        whatsapp: '983 453 408',
        email: 'asv@asvtelefonica.com',
      },
      services: this.getServices(),
      companyServices: this.getCompanyServices(),
      brands: this.getBrands(),
    };
  }

  private getServices(): Service[] {
    return [
      {
        title: 'VENTA DE EQUIPOS',
        description:
          'Venta de Aparatos telefónicos convencional, Centrales Telefónicas análogas, Digital o IP de las más prestigiosas marcas, sistemas de CCTV.',
        icon: 'monitor',
        link: '/equipos',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400',
      },
      {
        title: 'SOFTWARE & ACCESORIOS',
        description:
          'Call Center, Operadoras Automáticas, Tarificador de llamadas, teléfonos IP virtuales Softphone.',
        icon: 'settings',
        link: '/software-y-accesorios',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
      },
      {
        title: 'SERVICIOS',
        description:
          'Instalaciones, mantenimientos de sistemas de redes y equipos de monitoreo CCTV. Todas nuestras instalaciones certificadas.',
        icon: 'wrench',
        link: '/servicios',
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400',
      },
    ];
  }

  private getCompanyServices(): CompanyServices {
    return {
      image:
        'https://www.asvtelefonica.com/wp-content/uploads/2021/11/banner-cabecera-secciones-asv.jpg',
      title: 'INSTALACIÓN & MANTENIMIENTO',
      description:
        'Instalaciones, mantenimientos de sistemas de redes de computo, telefonía, eléctricos y afines. Alquiler y reparaciones de Centrales Telefónicas. Interconexión de redes y telefonía entre Oficinas Remotas. Cableado telefónico convencional, Cableado Estructurado en Categorías 5e, 6, 6ª, fibra Óptica, con materiales LSZH, instalaciones de CCTV. Todas nuestras instalaciones certificadas.',
      items: [
        {
          title: 'SISTEMAS DE REDES DE COMPUTO, TELEFONÍA, ELÉCTRICOS Y AFINES',
          svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="#233e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
        },
        {
          title: 'ALQUILER Y REPARACIONES DE CENTRALES TELEFÓNICAS',
          svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M8 21H16M12 17V21M14.5 3H17.7997C18.9198 3 19.4798 3 19.9076 3.21799C20.284 3.40973 20.5899 3.71569 20.7817 4.09202C20.9997 4.51984 20.9997 5.07989 20.9997 6.2V13.8C20.9997 14.9201 20.9997 15.4802 20.7817 15.908C20.5899 16.2843 20.284 16.5903 19.9076 16.782C19.4798 17 18.9198 17 17.7997 17H6C5.06812 17 4.60218 17 4.23463 16.8478C3.74458 16.6448 3.35523 16.2554 3.15224 15.7654C3 15.3978 3 14.9319 3 14M7 2V2.41667M7 11.5835V12.0002M11.9997 7H11.583M2.41667 7H2M10.5349 3.46453L10.2402 3.75916M3.75947 10.2408L3.46484 10.5354M3.46514 3.46477L3.75977 3.7594M10.2415 10.241L10.5361 10.5356M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7Z" stroke="#233e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
        },
        {
          title: 'INTERCONEXIÓN DE REDES Y TELEFONÍA ENTRE OFICINAS REMOTAS',
          svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 10H14.6C14.0399 10 13.7599 10 13.546 9.89101C13.3578 9.79513 13.2049 9.64215 13.109 9.45399C13 9.24008 13 8.96005 13 8.4V5M10 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.07989 21 8.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.49359 5.01338 5.01165 5.00082 6 5.00005M10 5V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3H7.6C7.03995 3 6.75992 3 6.54601 3.10899C6.35785 3.20487 6.20487 3.35785 6.10899 3.54601C6 3.75992 6 4.03995 6 4.6V5.00005M10 5V15.4C10 15.9601 10 16.2401 9.89101 16.454C9.79513 16.6422 9.64215 16.7951 9.45399 16.891C9.24008 17 8.96005 17 8.4 17H7.6C7.03995 17 6.75992 17 6.54601 16.891C6.35785 16.7951 6.20487 16.6422 6.10899 16.454C6 16.2401 6 15.9601 6 15.4V5.00005M14 14H14.01V13.99H14V14ZM14 17H14.01V17.01H14V17ZM17 17H17.01V17.01H17V17ZM17 14H17.01V14.01H17V14Z" stroke="#233e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
        },
        {
          title: 'CABLEADO TELEFÓNICO CONVENCIONAL Y CABLEADO ESTRUCTURADO',
          svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 10H14.6C14.0399 10 13.7599 10 13.546 9.89101C13.3578 9.79513 13.2049 9.64215 13.109 9.45399C13 9.24008 13 8.96005 13 8.4V5M10 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.07989 21 8.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.49359 5.01338 5.01165 5.00082 6 5.00005M10 5V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3H7.6C7.03995 3 6.75992 3 6.54601 3.10899C6.35785 3.20487 6.20487 3.35785 6.10899 3.54601C6 3.75992 6 4.03995 6 4.6V5.00005M10 5V15.4C10 15.9601 10 16.2401 9.89101 16.454C9.79513 16.6422 9.64215 16.7951 9.45399 16.891C9.24008 17 8.96005 17 8.4 17H7.6C7.03995 17 6.75992 17 6.54601 16.891C6.35785 16.7951 6.20487 16.6422 6.10899 16.454C6 16.2401 6 15.9601 6 15.4V5.00005M14 14H14.01V13.99H14V14ZM14 17H14.01V17.01H14V17ZM17 17H17.01V17.01H17V17ZM17 14H17.01V14.01H17V14Z" stroke="#233e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
        },
        {
          title: 'CONSOLIDACIÓN DE FIBRA ÓPTICA',
          svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M9.2255 5.33199C8.92208 5.86298 8.93352 6.58479 9.55278 6.89443C10.3201 7.27808 10.7664 6.59927 11.1323 6.04284C11.4473 5.56389 11.8013 5.11292 12.2071 4.70711C13.0981 3.8161 14.3588 3 16 3C17.6412 3 18.9019 3.8161 19.7929 4.70711C20.1967 5.11095 20.5495 5.5595 20.8632 6.03593C21.2289 6.59127 21.6809 7.27759 22.4472 6.89443C23.0634 6.58633 23.0765 5.86043 22.7745 5.33199C22.7019 5.20497 22.5962 5.02897 22.4571 4.8203C22.1799 4.40465 21.7643 3.8501 21.2071 3.29289C20.0981 2.1839 18.3588 1 16 1C13.6412 1 11.9019 2.1839 10.7929 3.29289C10.2357 3.8501 9.82005 4.40465 9.54295 4.8203C9.40383 5.02897 9.29809 5.20497 9.2255 5.33199Z" fill="#233e73"></path> <path d="M14.4762 6.71292C14.2768 6.90911 14.1223 7.10809 14.0182 7.2579C13.6696 7.75991 13.1966 8.23817 12.5294 7.88235C11.9766 7.58751 11.8923 6.8973 12.193 6.39806C12.2358 6.327 12.2967 6.23053 12.3755 6.1171C12.5319 5.89191 12.7649 5.59089 13.0738 5.28708C13.6809 4.68987 14.6689 4 15.9999 4C17.3309 4 18.3189 4.68986 18.9261 5.28706C19.235 5.59087 19.468 5.89188 19.6244 6.11707C19.7031 6.2305 19.764 6.32697 19.8069 6.39803C20.1082 6.8983 20.0212 7.58858 19.4705 7.88233C18.8032 8.23829 18.3304 7.76001 17.9817 7.25793C17.8776 7.10812 17.7231 6.90913 17.5236 6.71294C17.1141 6.31014 16.6021 6 15.9999 6C15.3977 6 14.8857 6.31013 14.4762 6.71292Z" fill="#233e73"></path> <path d="M5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18Z" fill="#233e73"></path> <path d="M7 19C7 18.4477 7.44771 18 8 18C8.55229 18 9 18.4477 9 19C9 19.5523 8.55229 20 8 20C7.44771 20 7 19.5523 7 19Z" fill="#233e73"></path> <path d="M10 19C10 18.4477 10.4477 18 11 18C11.5523 18 12 18.4477 12 19C12 19.5523 11.5523 20 11 20C10.4477 20 10 19.5523 10 19Z" fill="#233e73"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8C15 7.44771 15.4477 7 16 7C16.5523 7 17 7.44771 17 8V15H20C21.6569 15 23 16.3431 23 18V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V18C1 16.3431 2.34315 15 4 15H15V8ZM20 17C20.5523 17 21 17.4477 21 18V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V18C3 17.4477 3.44772 17 4 17H20Z" fill="#233e73"></path></svg>`,
        },
        {
          title: 'INSTALACIONES Y MANTENIMIENTOS DE CCTV',
          svg: `<svg fill="#233e73" viewBox="0 0 32 32"><path d="M31.119 14.845c-0.116-0.314-0.346-0.563-0.639-0.702l-0.008-0.003-1.765-0.823 0.39-0.836c0.074-0.155 0.117-0.336 0.117-0.528 0-0.499-0.292-0.93-0.715-1.13l-0.008-0.003-21.254-9.911c-0.155-0.074-0.337-0.117-0.529-0.117-0.499 0-0.929 0.292-1.129 0.714l-0.003 0.008-4.589 9.842c-0.074 0.155-0.117 0.337-0.117 0.529 0 0.499 0.292 0.929 0.714 1.129l0.008 0.003 7.773 3.624-2.19 5.11h-3.926v-3.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 10c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-3.75h4.75c0.512-0 0.953-0.309 1.146-0.75l0.003-0.008 2.484-5.795 11.215 5.229c0.154 0.074 0.334 0.117 0.525 0.117 0.001 0 0.002 0 0.003 0h-0c0.498-0 0.928-0.292 1.13-0.713l0.003-0.008 0.39-0.835 1.767 0.824c0.154 0.074 0.334 0.117 0.525 0.117 0.001 0 0.002 0 0.003 0h-0c0.499-0 0.929-0.293 1.13-0.715l0.003-0.008 2.754-5.904c0.074-0.155 0.117-0.336 0.117-0.527 0-0.154-0.028-0.301-0.079-0.437l0.003 0.009zM22.77 20.133l-11.174-5.211c-0.030-0.023-0.063-0.047-0.098-0.069l-0.005-0.003c-0.029-0.013-0.060-0.009-0.090-0.019l-7.62-3.554 3.532-7.576 18.988 8.854zM26.586 19.516l-0.631-0.295 1.697-3.639 0.631 0.295z"></path></svg>`,
        },
        {
          title: 'MANTENIMIENTO DE UPS',
          svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M21 5V9" stroke="#233e73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 19V9C5 7.89543 5.89543 7 7 7H16C17.1046 7 18 7.89543 18 9V19C18 20.1046 17.1046 21 16 21H7C5.89543 21 5 20.1046 5 19Z" stroke="#233e73" stroke-width="1.5"></path> <path d="M5 10V5C5 3.89543 5.89543 3 7 3H16C17.1046 3 18 3.89543 18 5V10" stroke="#233e73" stroke-width="1.5"></path> <path d="M11.1667 11L9.5 14H13.5L11.8333 17" stroke="#233e73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
        },
        {
          title: 'MANTENIMIENTO DE CARGADORES SOLARES',
          svg: `<svg viewBox="0 0 24 24" fill="#000000"><defs><style>.cls-1{fill:none;stroke:#233e73;stroke-miterlimit:10;stroke-width:1.9px;}</style></defs><polygon class="cls-1" points="21.5 11.95 2.5 11.95 6.3 1.5 17.7 1.5 21.5 11.95"></polygon><polyline class="cls-1" points="5.26 4.35 9.58 4.35 14.42 4.35 18.73 4.35"></polyline><polyline class="cls-1" points="3.88 8.15 8.89 8.15 15.11 8.15 20.12 8.15"></polyline><line class="cls-1" x1="10.1" y1="1.5" x2="8.2" y2="11.95"></line><line class="cls-1" x1="13.9" y1="1.5" x2="15.8" y2="11.95"></line><polygon class="cls-1" points="12 15.75 10.1 18.6 12 18.6 12 15.75"></polygon><polygon class="cls-1" points="12 20.5 13.9 17.65 12 17.65 12 20.5"></polygon></svg>`,
        },
        {
          title: 'INSTALACIÓN DE SALAS DE CONFERENCIAS',
          svg: `<svg fill="#233e73" viewBox="0 0 378.16 378.16"><path d="M94.08,20h8.355v92.505c0,5.523,4.477,10,10,10h153.29c5.523,0,10-4.477,10-10V20h8.355c5.523,0,10-4.477,10-10 s-4.477-10-10-10h-190c-5.523,0-10,4.477-10,10S88.557,20,94.08,20z M122.435,102.505V20h133.29v82.505H122.435z"></path> <path d="M339.829,186.509v-8.385c0-25.208-20.508-45.717-45.716-45.717h-5.941c-25.208,0-45.716,20.508-45.716,45.717v34.369 c-1.216-3.26-2.797-6.342-4.688-9.203v-25.166c0-25.208-20.508-45.717-45.716-45.717h-5.941c-25.208,0-45.716,20.508-45.716,45.717 v25.166c-1.891,2.861-3.472,5.943-4.688,9.203v-34.369c0-25.208-20.508-45.717-45.716-45.717h-5.941 c-25.208,0-45.716,20.508-45.716,45.717v8.385c-16.165,7.054-27.496,23.184-27.496,41.918v84.542c0,5.523,4.477,10,10,10H57.08 v35.191h-8.749c-5.523,0-10,4.477-10,10s4.477,10,10,10h37.498c5.523,0,10-4.477,10-10s-4.477-10-10-10H77.08v-35.191h36.245 c5.523,0,10-4.477,10-10v-59.956h2.38c2.793,0,5.316-1.148,7.13-2.994v62.95c0,5.523,4.477,10,10,10h36.245v35.191h-8.749 c-5.523,0-10,4.477-10,10s4.477,10,10,10h37.498c5.523,0,10-4.477,10-10s-4.477-10-10-10h-8.749v-35.191h36.245 c5.523,0,10-4.477,10-10v-62.95c1.814,1.846,4.337,2.994,7.13,2.994h2.38v59.956c0,5.523,4.477,10,10,10h36.245v35.191h-8.749 c-5.523,0-10,4.477-10,10s4.477,10,10,10h37.498c5.523,0,10-4.477,10-10s-4.477-10-10-10h-8.749v-35.191h36.245 c5.523,0,10-4.477,10-10v-84.542C367.325,209.693,355.994,193.563,339.829,186.509z M30.835,302.969v-74.542 c0-14.18,11.536-25.717,25.716-25.717h21.057c14.18,0,25.716,11.537,25.716,25.717v74.542H30.835z M77.608,182.71H58.331v-4.586 c0-14.18,11.536-25.717,25.716-25.717h5.941c14.18,0,25.716,11.537,25.716,25.717v25.069 C107.509,190.86,93.495,182.71,77.608,182.71z M186.109,152.407h5.941c14.18,0,25.716,11.537,25.716,25.717v8.357 c-5.57-2.421-11.708-3.771-18.159-3.771h-21.057c-6.45,0-12.589,1.35-18.159,3.771v-8.357 C160.393,163.944,171.929,152.407,186.109,152.407z M152.835,228.427c0-14.18,11.536-25.717,25.716-25.717h21.057 c14.18,0,25.716,11.537,25.716,25.717v74.542h-72.489V228.427z M347.325,302.969h-72.489v-74.542 c0-14.18,11.536-25.717,25.716-25.717h21.057c14.18,0,25.716,11.537,25.716,25.717V302.969z M288.171,152.407h5.941 c14.18,0,25.716,11.537,25.716,25.717v4.586h-19.277c-15.886,0-29.9,8.15-38.097,20.483v-25.069 C262.455,163.944,273.991,152.407,288.171,152.407z"></path></svg>`,
        },
        {
          title: 'INSTALACIÓN Y MANTENIMIENTO DE AP INDUSTRIALES',
          svg: `<svg fill="#233e73" viewBox="0 0 32 32"><path d="M31.119 14.845c-0.116-0.314-0.346-0.563-0.639-0.702l-0.008-0.003-1.765-0.823 0.39-0.836c0.074-0.155 0.117-0.336 0.117-0.528 0-0.499-0.292-0.93-0.715-1.13l-0.008-0.003-21.254-9.911c-0.155-0.074-0.337-0.117-0.529-0.117-0.499 0-0.929 0.292-1.129 0.714l-0.003 0.008-4.589 9.842c-0.074 0.155-0.117 0.337-0.117 0.529 0 0.499 0.292 0.929 0.714 1.129l0.008 0.003 7.773 3.624-2.19 5.11h-3.926v-3.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 10c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-3.75h4.75c0.512-0 0.953-0.309 1.146-0.75l0.003-0.008 2.484-5.795 11.215 5.229c0.154 0.074 0.334 0.117 0.525 0.117 0.001 0 0.002 0 0.003 0h-0c0.498-0 0.928-0.292 1.13-0.713l0.003-0.008 0.39-0.835 1.767 0.824c0.154 0.074 0.334 0.117 0.525 0.117 0.001 0 0.002 0 0.003 0h-0c0.499-0 0.929-0.293 1.13-0.715l0.003-0.008 2.754-5.904c0.074-0.155 0.117-0.336 0.117-0.527 0-0.154-0.028-0.301-0.079-0.437l0.003 0.009zM22.77 20.133l-11.174-5.211c-0.030-0.023-0.063-0.047-0.098-0.069l-0.005-0.003c-0.029-0.013-0.060-0.009-0.090-0.019l-7.62-3.554 3.532-7.576 18.988 8.854zM26.586 19.516l-0.631-0.295 1.697-3.639 0.631 0.295z"></path></svg>`,
        },
        {
          title: 'INSTALACIÓN Y MANTENIMIENTO DE SISTEMAS DE PERIFONEO',
          svg: `<svg viewBox="0 0 48 48" fill="#233e73"><rect width="48" height="48" fill="none"></rect><path d="M34,6h-.6l-30,8.8A2,2,0,0,0,2,16.8v9a2.2,2.2,0,0,0,1.4,2l4.7,1.3L9.7,39.4A2.9,2.9,0,0,0,12.6,42h4.5a3.2,3.2,0,0,0,2.2-1,3.3,3.3,0,0,0,.6-2.6l-1.1-6.1,14.6,4.3H34a2,2,0,0,0,2-2V8A2,2,0,0,0,34,6ZM15.8,38H13.5l-1.2-7.6,2.1.6ZM32,32,6,24.3v-6l26-7.6Z"></path> <path d="M40,15.3a1.5,1.5,0,0,0,.9-.2l4-2a2,2,0,0,0-1.8-3.6l-4,2a2,2,0,0,0-.9,2.7A2.1,2.1,0,0,0,40,15.3Z"></path> <path d="M44.9,29.6l-4-2a2.1,2.1,0,0,0-2.7.8,2,2,0,0,0,.9,2.7l4,2a1.5,1.5,0,0,0,.9.2,2.1,2.1,0,0,0,1.8-1.1A1.9,1.9,0,0,0,44.9,29.6Z"></path> <path d="M40,23.3h4a2,2,0,0,0,0-4H40a2,2,0,0,0,0,4Z"></path></svg>`,
        },
        {
          title: 'TODAS NUESTRAS INSTALACIONES SON CERTIFICADAS',
          svg: `<svg viewBox="0 0 24 24" stroke="233e73" fill="none"><circle cx="12" cy="16" r="3" stroke="#233e73" stroke-width="1.5"></circle> <path d="M12 19.2599L9.73713 21.4293C9.41306 21.74 9.25102 21.8953 9.1138 21.9491C8.80111 22.0716 8.45425 21.9667 8.28977 21.7C8.21758 21.583 8.19509 21.3719 8.1501 20.9496C8.1247 20.7113 8.112 20.5921 8.07345 20.4922C7.98715 20.2687 7.80579 20.0948 7.57266 20.0121C7.46853 19.9751 7.3442 19.963 7.09553 19.9386C6.65512 19.8955 6.43491 19.8739 6.31283 19.8047C6.03463 19.647 5.92529 19.3145 6.05306 19.0147C6.10913 18.8832 6.27116 18.7278 6.59523 18.4171L8.07345 16.9999L9.1138 15.9596" stroke="#233e73" stroke-width="1.5"></path> <path d="M12 19.2599L14.2629 21.4294C14.5869 21.7401 14.749 21.8954 14.8862 21.9492C15.1989 22.0717 15.5457 21.9668 15.7102 21.7001C15.7824 21.5831 15.8049 21.372 15.8499 20.9497C15.8753 20.7113 15.888 20.5921 15.9265 20.4923C16.0129 20.2688 16.1942 20.0949 16.4273 20.0122C16.5315 19.9752 16.6558 19.9631 16.9045 19.9387C17.3449 19.8956 17.5651 19.874 17.6872 19.8048C17.9654 19.6471 18.0747 19.3146 17.9469 19.0148C17.8909 18.8832 17.7288 18.7279 17.4048 18.4172L15.9265 17L15 16.0735" stroke="#233e73" stroke-width="1.5"></path> <path d="M17.3197 17.9957C19.2921 17.9748 20.3915 17.8512 21.1213 17.1213C22 16.2426 22 14.8284 22 12V9M7 17.9983C4.82497 17.9862 3.64706 17.8897 2.87868 17.1213C2 16.2426 2 14.8284 2 12L2 8C2 5.17157 2 3.75736 2.87868 2.87868C3.75736 2 5.17157 2 8 2L16 2C18.8284 2 20.2426 2 21.1213 2.87868C21.6112 3.36857 21.828 4.02491 21.9239 5" stroke="#233e73" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 6L15 6" stroke="#233e73" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 9.5H9M17 9.5H12.5" stroke="#233e73" stroke-width="1.5" stroke-linecap="round"></path></svg>`,
        },
      ],
      evidences: [
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/banner-nosotros-asv-telefonia.jpg',
          alt: 'banner nosotros asv telefonia',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/slider-centro-de-monitoreo-asv.jpg',
          alt: 'slider centro de monitoreo asv',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Implementacion-de-Sistemas-Electricos.jpg',
          alt: 'Implementacion de Sistemas Electricos',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Implementacion-de-sistemas-de-perifoneo-plantas-industriales.jpg',
          alt: 'Implementacion de sistemas de perifoneo - plantas industriales',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Consolacion-de-fibra-optica.jpg',
          alt: 'Consolacion de fibra optica',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Cableado-estructurado-externos.jpg',
          alt: 'Cableado estructurado externos',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Instalacion-de-AP-Industriales.jpg',
          alt: 'Instalacion de AP Industriales',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Instalaciones-y-mantenimiento-AP-y-sistemas-de-perifoneo.jpg',
          alt: 'Instalaciones y mantenimiento AP y sistemas de perifoneo',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Mantenimiento-de-Cargadores-Solares.jpg',
          alt: 'Mantenimiento de Cargadores Solares',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Mantenimiento-de-centrales-telefonicas.jpg',
          alt: 'Mantenimiento de centrales telefonicas',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Mantenimiento-de-UPS-1.jpg',
          alt: 'Mantenimiento de UPS 1',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Mantenimiento-de-UPS-2.jpg',
          alt: 'Mantenimiento de UPS 2',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Mantenimiento-de-UPS-3.jpg',
          alt: 'Mantenimiento de UPS 3',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2021/11/Salas-de-video-conferencia.jpg',
          alt: 'Salas de video conferencia',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-07-at-15.45.32-e1759872541284.jpeg',
          alt: 'WhatsApp Image 2025-10-07 at 15.45.32',
        },
        {
          imgUrl:
            'https://www.asvtelefonica.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-07-at-15.41.33.jpeg',
          alt: 'WhatsApp Image 2025-10-07 at 15.41.33',
        },
      ],
    };
  }

  private getBrands(): Brand[] {
    return [
      {
        name: 'ALCATEL-LUCENT',
        logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-alcatel-lucent.jpg',
      },
      {
        name: 'PANASONIC',
        logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-panasonic.jpg',
      },
      {
        name: 'TRENDNET',
        logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-trendnet.jpg',
      },
      { name: 'LOGITECH', logoUrl: null },
      {
        name: 'LEVITON',
        logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-leviton.jpg',
      },
      {
        name: 'PANDUIT',
        logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-panduit.jpg',
      },
      {
        name: 'COMMSCOPE',
        logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-coomscope.jpg',
      },
      { name: 'DIXON', logoUrl: null },
      {
        name: 'DAHUA',
        logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-alhua.jpg',
      },
      {
        name: 'HIKVISION',
        logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-hikvision.jpg',
      },
      {
        name: 'UNV',
        logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2025/10/UNV-e1759864939556.png',
      },
      {
        name: 'CISCO',
        logoUrl: 'https://www.asvtelefonica.com/wp-content/uploads/2021/12/logo-cisco.jpg',
      },
    ];
  }

  getNavItems(): NavItem[] {
    return [
      { label: 'INICIO', href: '/' },
      {
        label: 'NUESTRAS SOLUCIONES',
        href: '#soluciones',
        hasDropdown: true,
        children: [
          { label: 'Equipos', href: '/equipos' },
          { label: 'Software y Accesorios', href: '/software-y-accesorios' },
          { label: 'Servicios', href: '/servicios' },
        ],
      },
      { label: 'NOSOTROS', href: '/about-us' },
      { label: 'CONTÁCTENOS', href: '/contact-us' },
    ];
  }

  getLogoUrl(): string {
    return 'https://www.asvtelefonica.com/wp-content/uploads/2021/11/logo-asv.png';
  }

  getLocalLogoUrl(): string {
    return '/assets/images/logo.png';
  }
}
