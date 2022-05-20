///////////////////////////////////////////////////////////////////////
//                                                                   //
//                      MOBILE NAVEGATION                            //
//                                                                   //
//////////////////////////////////////////////////////////////////////

const btn_nav_el = document.querySelector(".btn-nav");
const header_el = document.querySelector(".header");

btn_nav_el.addEventListener("click", function () {
  header_el.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////////////////
//                                                                   //
//                        BLOG HOME PAGE                             //
//                                                                   //
//////////////////////////////////////////////////////////////////////

// Read me
const post1 = document.querySelector(".post1");
const post2 = document.querySelector(".post2");
const post3 = document.querySelector(".post3");

post1.addEventListener("click", function () {
  window.open("blog_post.html");
});

///////////////////////////////////////////////////////////////////////
//                                                                   //
//                         BLOG POST PAGE                            //
//                                                                   //
//////////////////////////////////////////////////////////////////////
