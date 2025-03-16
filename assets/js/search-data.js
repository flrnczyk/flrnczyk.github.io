// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "📄",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-about-me",
          title: "about me",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/aboutme/";
          },
        },{id: "books-모래는-뭐래",
          title: '모래는 뭐래',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/book1/";
            },},{id: "news-i-collaborated-with-graphic-designer-makoto-zhang-on-his-zine-reverse-waterfall",
          title: 'I collaborated with graphic designer Makoto Zhang on his zine Reverse Waterfall.',
          description: "",
          section: "News",},{id: "news-i-graduated",
          title: 'I graduated!',
          description: "",
          section: "News",},{id: "news-linmin-zhang-s-and-my-manuscript-comparative-morphemes-are-additive-particles-english-er-more-vs-chinese-gèng-is-now-on-lingbuzz",
          title: 'Linmin Zhang’s and my manuscript Comparative Morphemes are Additive Particles: English -er/more vs....',
          description: "",
          section: "News",},{id: "news-dingfan-lin-and-i-will-be-presenting-a-poster-on-degree-reduplication-at-glow47",
          title: 'Dingfan Lin and I will be presenting a poster on Degree Reduplication at...',
          description: "",
          section: "News",},{id: "projects-degree-reduplication-in-mandarin-and-its-implication",
          title: 'Degree Reduplication in Mandarin and its Implication',
          description: "XXXXXXXXX",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%6C%6F%72%65%6E%63%65.%7A%68%61%6E%67@%79%61%6C%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/flo.yukun.z", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
