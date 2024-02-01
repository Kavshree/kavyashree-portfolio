import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-wcag',
  templateUrl: './wcag.component.html',
  styleUrls: ['./wcag.component.css']
})
export class WCAGComponent {
  constructor(private sanitizer: DomSanitizer) { }
  get safeHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.htmlSnippetAfter);
  }
  htmlSnippetBefore = `
  <div>
      <img height="150" width="1000" src="https://i.pinimg.com/originals/a1/95/5a/a1955ada3d81ddd97eb403cd0523a5f2.png" />
    </div>
    <div>
      News Today
    </div>
    <div>
      <div>
        <p>
          Today's temp is 30
        </p>
        <button>
          Load more
        </button>
      </div>
    
      <div>
        <h2>
          Subscribe for newsletter
        </h2>
        <form name="newsletter-subscribe-form">
          <label>Email</label>
          <input type="text" name="email" />
          <button>
            Submit
          </button>
        </form>
      </div>
    </div>`

  htmlSnippetAfter = `<header>
  <img height="150" width="1000" src="https://i.pinimg.com/originals/a1/95/5a/a1955ada3d81ddd97eb403cd0523a5f2.png" alt="Header image containing clouds" />
</header>
<h1>
  News Today
</h1>
<section>
  <article>
    <p>
      Today's temp is 30
    </p>
    <button aria-label="load more weather information" title="load more weather information">
      Load more
    </button>
  </article>

  <article>
    <h2 aria-label="subscribe for the newsletter">
      Subscribe for newsletter
    </h2>
    <form name="newsletter-subscribe-form">
      <label for="email" aria-label="Enter your email">Email</label>
      <input type="text" name="email" id="email" title=""/>
      <button type="submit" aria-label="submit form" title="Submit form">
        Submit
      </button>
    </form>
  </article>
</section>`
}
