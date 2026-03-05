import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-brand-white">
      <!-- Premium Hero -->
      <section class="relative min-h-screen flex items-center">
        <div class="absolute inset-0 bg-brand-navy">
          <div
            class="absolute inset-0 bg-cover bg-center"
            style="background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920')"
          ></div>
          <div class="absolute inset-0 bg-brand-navy/80"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 lg:px-8 py-32">
          <div class="max-w-3xl">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-16 h-px bg-brand-light-blue"></div>
              <span class="text-brand-light-blue text-sm tracking-[0.3em] uppercase"
                >Excelencia en Telecomunicaciones</span
              >
            </div>
            <h1
              class="text-5xl lg:text-7xl font-light text-brand-white mb-8 leading-tight tracking-tight"
            >
              Sistemas<br />
              <span class="font-medium">Eléctricos</span><br />
              y Redes
            </h1>
            <p class="text-lg text-brand-light-gray/80 mb-12 max-w-xl leading-relaxed">
              Más de un cuarto de siglo transformando la infraestructura de comunicaciones de las
              empresas más exigentes del Perú.
            </p>
            <div class="flex flex-wrap gap-6">
              <a
                href="#soluciones"
                class="group inline-flex items-center gap-4 bg-brand-light-blue text-brand-navy font-medium px-8 py-4 tracking-wide transition-all hover:pr-10"
              >
                DESCUBRIR MÁS
                <svg
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                routerLink="/contactenos"
                class="inline-flex items-center gap-4 border border-brand-white/30 text-brand-white font-medium px-8 py-4 tracking-wide hover:border-brand-light-blue hover:text-brand-light-blue transition-all"
              >
                CONTACTAR
              </a>
            </div>
          </div>
        </div>

        <div class="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div class="flex flex-col items-center gap-2 text-brand-white/40">
            <span class="text-xs tracking-[0.3em] uppercase">Scroll</span>
            <div class="w-px h-12 bg-brand-white/20"></div>
          </div>
        </div>
      </section>

      <!-- Premium About -->
      <section class="py-32 bg-brand-white">
        <div class="max-w-7xl mx-auto px-4 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-px bg-brand-navy"></div>
                <span class="text-brand-medium-gray text-xs tracking-[0.3em] uppercase"
                  >Nuestra Historia</span
                >
              </div>
              <h2 class="text-4xl lg:text-5xl font-light text-brand-navy mb-8 leading-tight">
                {{ content().company.yearsExperience }} Años de<br />
                <span class="font-medium">Distinción</span>
              </h2>
              <p class="text-brand-medium-gray mb-6 leading-relaxed">
                <strong class="text-brand-navy font-medium">{{ content().company.name }}</strong>
                representa la excelencia en servicios de telecomunicaciones empresariales. Desde
                1996, hemos establecido estándares de calidad que definen la industria.
              </p>
              <p class="text-brand-medium-gray mb-12 leading-relaxed">
                Nuestro equipo de especialistas certificados ofrece soluciones que combinan
                tecnología de vanguardia con un servicio personalizado de clase mundial.
              </p>
              <a
                routerLink="/nosotros"
                class="group inline-flex items-center gap-3 text-brand-navy font-medium tracking-wide hover:text-brand-light-blue transition-colors"
              >
                CONOCER NUESTRA HISTORIA
                <svg
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
            <div class="relative">
              <div class="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800"
                  alt="Telecomunicaciones"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute -bottom-8 -left-8 bg-brand-navy p-8">
                <div class="text-5xl font-light text-brand-light-blue mb-2">
                  {{ content().company.yearsExperience }}
                </div>
                <div class="text-brand-white text-sm tracking-[0.2em] uppercase">
                  Años de Excelencia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Premium Solutions -->
      <section id="soluciones" class="py-32 bg-brand-light-gray/10">
        <div class="max-w-7xl mx-auto px-4 lg:px-8">
          <div class="text-center mb-20">
            <div class="flex items-center justify-center gap-4 mb-8">
              <div class="w-12 h-px bg-brand-navy"></div>
              <span class="text-brand-medium-gray text-xs tracking-[0.3em] uppercase"
                >Servicios Exclusivos</span
              >
              <div class="w-12 h-px bg-brand-navy"></div>
            </div>
            <h2 class="text-4xl lg:text-5xl font-light text-brand-navy">
              Soluciones <span class="font-medium">Premium</span>
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            @for (service of content().services; track service.title; let i = $index) {
              <div class="group relative bg-brand-white overflow-hidden">
                <div class="aspect-[3/2] overflow-hidden">
                  <img
                    [src]="service.image"
                    [alt]="service.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div class="p-8">
                  <div class="text-brand-light-blue text-xs tracking-[0.2em] mb-4">
                    0{{ i + 1 }}
                  </div>
                  <h3 class="text-xl font-medium text-brand-navy mb-4 tracking-wide">
                    {{ service.title }}
                  </h3>
                  <p class="text-brand-medium-gray mb-6 leading-relaxed text-sm">
                    {{ service.description }}
                  </p>
                  <a
                    [routerLink]="service.link"
                    class="group/link inline-flex items-center gap-2 text-brand-navy text-sm tracking-wide hover:text-brand-light-blue transition-colors"
                  >
                    EXPLORAR
                    <svg
                      class="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
                <div
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-light-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                ></div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Premium Brands -->
      <section class="py-32 bg-brand-navy">
        <div class="max-w-7xl mx-auto px-4 lg:px-8">
          <div class="text-center mb-16">
            <div class="flex items-center justify-center gap-4 mb-8">
              <div class="w-12 h-px bg-brand-light-blue"></div>
              <span class="text-brand-light-gray text-xs tracking-[0.3em] uppercase"
                >Alianzas Estratégicas</span
              >
              <div class="w-12 h-px bg-brand-light-blue"></div>
            </div>
            <h2 class="text-3xl lg:text-4xl font-light text-brand-white">
              Marcas de <span class="font-medium">Distinción</span>
            </h2>
          </div>

          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
            @for (brand of content().brands; track brand.name) {
              <div
                class="flex flex-col items-center justify-center py-4 opacity-60 hover:opacity-100 transition-opacity"
              >
                @if (brand.logoUrl) {
                  <img
                    [src]="brand.logoUrl"
                    [alt]="brand.name"
                    class="h-8 object-contain brightness-0 invert"
                  />
                } @else {
                  <div class="h-8 flex items-center justify-center">
                    <span class="text-xl font-light text-brand-white">{{
                      brand.name.charAt(0)
                    }}</span>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Premium Contact -->
      <section class="py-32 bg-brand-white">
        <div class="max-w-7xl mx-auto px-4 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16">
            <div>
              <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-px bg-brand-navy"></div>
                <span class="text-brand-medium-gray text-xs tracking-[0.3em] uppercase"
                  >Contacto</span
                >
              </div>
              <h2 class="text-4xl lg:text-5xl font-light text-brand-navy mb-8">
                Iniciemos una<br />
                <span class="font-medium">Conversación</span>
              </h2>
              <p class="text-brand-medium-gray mb-12 leading-relaxed">
                Nuestro equipo de consultores está listo para entender sus necesidades y diseñar
                soluciones a la medida de su organización.
              </p>
              <a
                routerLink="/contactenos"
                class="group inline-flex items-center gap-4 bg-brand-navy text-brand-white font-medium px-8 py-4 tracking-wide transition-all hover:pr-10"
              >
                SOLICITAR CONSULTA
                <svg
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8">
              @for (contact of contactData; track contact.label) {
                <div class="border-t border-brand-light-gray pt-6">
                  <div class="text-brand-light-blue text-xs tracking-[0.2em] uppercase mb-3">
                    {{ contact.label }}
                  </div>
                  <div class="text-brand-navy font-medium">{{ contact.value }}</div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <!-- WhatsApp Button -->
      <a
        href="https://wa.me/51983453408"
        target="_blank"
        class="fixed bottom-6 right-6 bg-brand-light-blue text-brand-navy p-4 shadow-lg hover:shadow-xl transition-all z-50 group"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      </a>
    </div>
  `,
})
export class HomePage {
  private contentService = inject(ContentService);

  content = this.contentService.siteContent;
  navItems = signal(this.contentService.getNavItems());
  localLogo = signal(this.contentService.getLocalLogoUrl());

  contactData = [
    {
      label: 'OFICINA',
      value: 'San Miguel, Lima',
    },
    {
      label: 'TELÉFONO',
      value: '(01) 244-2656',
    },
    {
      label: 'EMAIL',
      value: 'asv@asvtelefonica.com',
    },
    {
      label: 'WHATSAPP',
      value: '983 453 408',
    },
  ];
}
