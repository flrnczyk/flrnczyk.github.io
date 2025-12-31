---
layout: pagelayout
title: Others
permalink: /others/
---



<p>These are some books I recommend.</p>
<div class="bookshelf">
    {% assign books = site.static_files
        | where_exp: "file", "file.path contains '/assets/books/'"
        | where_exp: "file", "file.extname == '.svg'"
    %}
    {% for book in books %}
        <div class="book">
            <img src="{{ book.path | relative_url }}" alt="Book cover">
        </div>
    {% endfor %}
</div>

<script src="{{ '/assets/js/canvas.js' | relative_url }}"></script>