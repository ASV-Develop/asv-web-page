import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-company-services',
  imports: [],
  templateUrl: './company-services.html',
})
export class CompanyServices {
  private contentService = inject(ContentService);
  private sanitizer = inject(DomSanitizer);

  content = this.contentService.siteContent;

  sanitizeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
