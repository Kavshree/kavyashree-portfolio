import { Component, Input, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent {
  sanitizedBodyContent!: SafeHtml;
  @Input() codeSnippet: string = '';
  get sanitizedCode(): string | null {
    return this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(this.codeSnippet));
  }
  constructor(private sanitizer: DomSanitizer) { }
}
