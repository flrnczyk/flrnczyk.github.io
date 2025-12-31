---
layout: pagelayout
title: Others
permalink: /others/
---



<p>These are some books I recommend.</p>
<div class="bookshelf">
  {% assign books = site.static_files
    | where_exp: "file", "file.path contains '/assets/books/'"
    | where_exp: "file", "file.extname == '.svg'" %}

  {% assign books_per_row = 3 %}
  {% assign total = books.size %}
  {% for i in (0..total) offset: 0 %}
    {% assign offset = forloop.index0 | times: books_per_row %}
    {% assign row_books = books | slice: offset, books_per_row %}
    {% if row_books.size > 0 %}
      <div class="book-row">
        {% for book in row_books %}
          <div class="book">
            <img src="{{ book.path | relative_url }}" alt="Book cover">
          </div>
        {% endfor %}
      </div>
    {% endif %}
  {% endfor %}
</div>

<script src="{{ '/assets/js/canvas.js' | relative_url }}"></script>