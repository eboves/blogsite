///////////////////////////////////////////////////////////////////////
//                                                                   //
//                      MOBILE NAVEGATION                            //
//                                                                   //
//////////////////////////////////////////////////////////////////////

const btn_nav_el = document.querySelector(".btn-nav");
const header_el = document.querySelector(".header");

// open and close the nav bar on smaller divices
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

// open the first blog in a new page
post1.addEventListener("click", function () {
  window.open("blog_post.html");
});

///////////////////////////////////////////////////////////////////////
//                                                                   //
//                         BLOG POST PAGE                            //
//                                                                   //
//////////////////////////////////////////////////////////////////////
