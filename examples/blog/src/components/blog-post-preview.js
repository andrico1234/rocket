import { html, css, LitElement } from 'lit';

export class BlogPostPreview extends LitElement {
  static get properties() {
    return {
      post: { type: Object },
    };
  }

  render() {
    return html`
      <article class="post-preview">
        <header>
          <p class="publish-date">${this.post.publishDate}</p>
          <a href="${this.post.url}"><h1 class="title">${this.post.title}</h1></a>
        </header>
        <p>${this.post.description}</p>
        <a href=${this.post.url}>Read more</a>
      </article>
    `;
  }

  static get styles() {
    return css`
      .content :global(main > * + *) {
        margin-top: 1rem;
      }

      .post-preview {
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 4px solid var(--theme-divider);
      }

      header {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 2rem;
        text-align: left;
      }

      .title,
      .author,
      .publish-date {
        margin: 0;
      }

      .publish-date,
      .author {
        font-size: 1.25rem;
        color: var(--theme-text-lighter);
      }

      .title {
        font-size: 2.25rem;
        font-weight: 700;
        color: var(--theme-text);
      }
    `;
  }
}

customElements.define('blog-post-preview', BlogPostPreview);
