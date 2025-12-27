---
layout: pagelayout
title: Home
---


<h1>Florence Zhang-yukun</h1>
<p>張宇琨 /ʧaŋ˥ y˨˩ kʰwən˥/, 장우곤.</p>
<p>It/Its. 它/他</p>
<div class="home-container">
  <div class="home-content">
    <p align="justify">
      Hallo 👋🏻.
    </p>
    <p align="justify">
      I am currently a PhD student at <a href="https://ling.yale.edu">Yale Linguistics</a>, with a focus on syntax and an occasional interest in syntax's interfaces with semantics and phonology. Languagewise, I am interested in Chinese langauges and Koreanic languages.
    </p>
  </div>

  <div class="home-photo">
    <img src="{{ '/assets/img/profile.svg' | relative_url }}" alt="profile" class="profile-img">
  </div>
</div>



<h2>News</h2>
<ul class = "news-list">
  <!--一個loop-->
  {% assign sorted_news = site.news | sort: 'date' | reverse %}
    {% for post in sorted_news limit:5 %}
      <li>
        <time>{{ post.date | date: "%Y%m%d" }}</time><span class="news-content">{{ post.content }}</span>
      </li>
    {% endfor %}
</ul>