---
layout: pagelayout
title: Others
permalink: /others/
---



<p>In my spare time, I enjoy reading texts. These are some books I recommend.</p>
<div class="bookshelf">
  {% assign books = site.data.books %}

  {% assign books_per_row = 3 %}
  {% assign total = books.size %}
  {% for i in (0..total) offset: 0 %}
    {% assign offset = forloop.index0 | times: books_per_row %}
    {% assign row_books = books | slice: offset, books_per_row %}
    {% if row_books.size > 0 %}
      <div class="book-row">
        {% for book in row_books %}
        {% assign book_image_base = "/assets/books/" %}
          <div class="book">
            <div class="book-meta">
                <div class="book-title">{{ book.title }}</div>
                <div class="book-author">{{ book.author }}</div>
            </div>
            <img src="{{ book_image_base | append: book.image | relative_url }}" alt="{{ book.title }}">
          </div>
        {% endfor %}
      </div>
    {% endif %}
  {% endfor %}
</div>
<div class="mobile-bookshelf">
  {% assign books = site.data.books %}

  {% assign books_per_row = 2 %}
  {% assign total = books.size %}
  {% for i in (0..total) offset: 0 %}
    {% assign offset = forloop.index0 | times: books_per_row %}
    {% assign row_books = books | slice: offset, books_per_row %}
    {% if row_books.size > 0 %}
      <div class="book-row">
        {% for book in row_books %}
        {% assign book_image_base = "/assets/books/" %}
          <div class="book">
            <div class="book-meta">
                <div class="book-title">{{ book.title }}</div>
                <div class="book-author">{{ book.author }}</div>
            </div>
            <img src="{{ book_image_base | append: book.image | relative_url }}" alt="{{ book.title }}">
          </div>
        {% endfor %}
      </div>
    {% endif %}
  {% endfor %}
</div>

<p>I am huge fan of messing around with LaTeX. See <a ref="https://flrnczyk.github.io/assets/pdf/cv.pdf">this pdf</a>.</p>

<script src="{{ '/assets/js/canvas.js' | relative_url }}"></script>