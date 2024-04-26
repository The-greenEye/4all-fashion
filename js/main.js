// Jquery Section
(function ($) {
  "use strict";

  /*[ Load page ]
    ===========================================================*/
  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    loading: true,
    loadingParentElement: "html",
    loadingClass: "animsition-loading-1",
    loadingInner: '<div class="loader05"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "html",
    transition: function (url) {
      window.location.href = url;
    },
  });

  /*[ Back to top ]
    ===========================================================*/
  var windowH = $(window).height() / 2;

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > windowH) {
      $("#myBtn").css("display", "flex");
    } else {
      $("#myBtn").css("display", "none");
    }
  });

  $("#myBtn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  /*==================================================================
    [ Fixed Header ]*/
  var headerDesktop = $(".container-menu-desktop");
  var wrapMenu = $(".wrap-menu-desktop");

  if ($(".top-bar").length > 0) {
    var posWrapHeader = $(".top-bar").height();
  } else {
    var posWrapHeader = 0;
  }

  if ($(window).scrollTop() > posWrapHeader) {
    $(headerDesktop).addClass("fix-menu-desktop");
    $(wrapMenu).css("top", 0);
  } else {
    $(headerDesktop).removeClass("fix-menu-desktop");
    $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
  }

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > posWrapHeader) {
      $(headerDesktop).addClass("fix-menu-desktop");
      $(wrapMenu).css("top", 0);
    } else {
      $(headerDesktop).removeClass("fix-menu-desktop");
      $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
    }
  });

  /*==================================================================
    [ Menu mobile ]*/
  $(".btn-show-menu-mobile").on("click", function () {
    $(this).toggleClass("is-active");
    $(".menu-mobile").slideToggle();
  });

  var arrowMainMenu = $(".arrow-main-menu-m");

  for (var i = 0; i < arrowMainMenu.length; i++) {
    $(arrowMainMenu[i]).on("click", function () {
      $(this).parent().find(".sub-menu-m").slideToggle();
      $(this).toggleClass("turn-arrow-main-menu-m");
    });
  }

  $(window).resize(function () {
    if ($(window).width() >= 992) {
      if ($(".menu-mobile").css("display") == "block") {
        $(".menu-mobile").css("display", "none");
        $(".btn-show-menu-mobile").toggleClass("is-active");
      }

      $(".sub-menu-m").each(function () {
        if ($(this).css("display") == "block") {
          console.log("hello");
          $(this).css("display", "none");
          $(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
        }
      });
    }
  });

  /*==================================================================
    [ Show / hide modal search ]*/
  $(".js-show-modal-search").on("click", function () {
    $(".modal-search-header").addClass("show-modal-search");
    $(this).css("opacity", "0");
  });

  $(".js-hide-modal-search").on("click", function () {
    $(".modal-search-header").removeClass("show-modal-search");
    $(".js-show-modal-search").css("opacity", "1");
  });

  $(".container-search-header").on("click", function (e) {
    e.stopPropagation();
  });

  /*==================================================================
    [ Isotope ]*/
  var $topeContainer = $(".isotope-grid");
  var $filter = $(".filter-tope-group");

  // filter items on button click
  $filter.each(function () {
    $filter.on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $topeContainer.isotope({ filter: filterValue });
    });
  });

  // init Isotope
  $(window).on("load", function () {
    var $grid = $topeContainer.each(function () {
      $(this).isotope({
        itemSelector: ".isotope-item",
        layoutMode: "fitRows",
        percentPosition: true,
        animationEngine: "best-available",
        masonry: {
          columnWidth: ".isotope-item",
        },
      });
    });
  });

  var isotopeButton = $(".filter-tope-group button");

  $(isotopeButton).each(function () {
    $(this).on("click", function () {
      for (var i = 0; i < isotopeButton.length; i++) {
        $(isotopeButton[i]).removeClass("how-active1");
      }

      $(this).addClass("how-active1");
    });
  });

  /*==================================================================
    [ Filter / Search product ]*/
  $(".js-show-filter").on("click", function () {
    $(this).toggleClass("show-filter");
    $(".panel-filter").slideToggle(400);

    if ($(".js-show-search").hasClass("show-search")) {
      $(".js-show-search").removeClass("show-search");
      $(".panel-search").slideUp(400);
    }
  });

  $(".js-show-search").on("click", function () {
    $(this).toggleClass("show-search");
    $(".panel-search").slideToggle(400);

    if ($(".js-show-filter").hasClass("show-filter")) {
      $(".js-show-filter").removeClass("show-filter");
      $(".panel-filter").slideUp(400);
    }
  });

  /*==================================================================
    [ cart ]*/
  $(".js-show-cart").on("click", function () {
    $(".js-panel-cart").addClass("show-header-cart");
  });

  $(".js-hide-cart").on("click", function () {
    $(".js-panel-cart").removeClass("show-header-cart");
  });

  /*==================================================================
    [ cart ]*/
  $(".js-show-sidebar").on("click", function () {
    $(".js-sidebar").addClass("show-sidebar");
  });

  $(".js-hide-sidebar").on("click", function () {
    $(".js-sidebar").removeClass("show-sidebar");
  });

  /*==================================================================
    [ +/- num product ]*/
  $(".btn-num-product-down").on("click", function () {
    var numProduct = Number($(this).next().val());
    if (numProduct > 0)
      $(this)
        .next()
        .val(numProduct - 1);
  });

  $(".btn-num-product-up").on("click", function () {
    var numProduct = Number($(this).prev().val());
    $(this)
      .prev()
      .val(numProduct + 1);
  });

  /*==================================================================
    [ Rating ]*/
  $(".wrap-rating").each(function () {
    var item = $(this).find(".item-rating");
    var rated = -1;
    var input = $(this).find("input");
    $(input).val(0);

    $(item).on("mouseenter", function () {
      var index = item.index(this);
      var i = 0;
      for (i = 0; i <= index; i++) {
        $(item[i]).removeClass("zmdi-star-outline");
        $(item[i]).addClass("zmdi-star");
      }

      for (var j = i; j < item.length; j++) {
        $(item[j]).addClass("zmdi-star-outline");
        $(item[j]).removeClass("zmdi-star");
      }
    });

    $(item).on("click", function () {
      var index = item.index(this);
      rated = index;
      $(input).val(index + 1);
    });

    $(this).on("mouseleave", function () {
      var i = 0;
      for (i = 0; i <= rated; i++) {
        $(item[i]).removeClass("zmdi-star-outline");
        $(item[i]).addClass("zmdi-star");
      }

      for (var j = i; j < item.length; j++) {
        $(item[j]).addClass("zmdi-star-outline");
        $(item[j]).removeClass("zmdi-star");
      }
    });
  });

  /*==================================================================
    [ Show modal1 ]*/
  $(".js-show-modal1").on("click", function (e) {
    e.preventDefault();
    $(".js-modal1").addClass("show-modal1");
  });

  $(".js-hide-modal1").on("click", function () {
    $(".js-modal1").removeClass("show-modal1");
  });
})(jQuery);

// Javascript Section

// Get Api Products
async function getApi() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    loopApi(data);
  } catch (error) {
    console.log("Error Get data: your internet it's slow please check your internet an try agine " + error);
  }
}
getApi();
function loopApi(p) {
  let productAryy = "";

  for (let i = 0; i < p.length; i++) {
    productAryy += `
      <div class="col-sm-6 col-md-4 col-lg-3 m-0 p-b-35 isotope-item women">
        <div class="block2">
          <div class="block2-pic hov-img0 p-5" style="height: 400px; width: 100%">
            <img src="${p[i].image}" style="object-fit: cover;" alt="IMG-PRODUCT" />
            <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1" onclick="getApiLinknum(${i + 1})"> Quick View </a>
          </div>
          <div class="block2-txt flex-w flex-t p-t-14">
            <div class="block2-txt-child1 flex-col-l">
              <a href="product-detail.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"> ${p[i].title.slice(0, 40)} </a>
              <span class="stext-105 cl3">E.L ${p[i].price} </span>
            </div>
            <div class="block2-txt-child2 flex-r p-t-3">
              <img class="icon-heart1 dis-block trans-04" onclick="getwish(${i + 1},this)" style="cursor:pointer;" src="images/icons/icon-heart-01.png" alt="ICON" />
            </div>
          </div>
        </div>
      </div>`;
  }
  document.getElementById("cartona-Products").innerHTML = productAryy;
}

function onShowModal() {
  document.querySelector(".wrap-modal1").style.width = "100%";
  document.querySelector(".wrap-modal1").style.visibility = "visible";
  document.querySelector(".wrap-modal1").style.height = "100vh";
}

function onCloseModal() {
  document.querySelector(".wrap-modal1").style.width = "0";
  document.querySelector(".wrap-modal1").style.overflow = "hidden";
  document.querySelector(".wrap-modal1").style.visibility = "hidden";
  document.querySelector(".wrap-modal1").style.height = "0";
}

function getApiLinknum(numb) {
  async function getApiLink() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${numb}`);
      const data = await response.json();
      loopApiLink(data);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  }
  getApiLink();
  onShowModal();
}

//Loop On Api Link

function loopApiLink(pl) {
  let productAryy = "";

  productAryy += `
              <div class="overlay-modal1 js-hide-modal1"></div>

      <div class="container">
        <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
          <button class="how-pos3 hov3 trans-04 js-hide-modal1 m-5" onclick="onCloseModal()">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg>
          </button>

          <div class="row">
            <div class="col-md-6 col-lg-7 p-b-30">
              <div class="p-l-25 p-r-30 p-lr-0-lg">
                <div class="wrap-slick3 flex-sb flex-w">
                  <div class="wrap-slick3-dots"></div>
                  <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

                  <div class="slick3 gallery-lb">
                    <div class="item-slick3" data-thumb="${pl.image}">
                      <div class="wrap-pic-w pos-relative">
                        <img src="${pl.image}" alt="IMG-PRODUCT" />

                        <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" target="_blank" href="${pl.image}">
                          <i class="fa fa-expand"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-5 p-b-30">
              <div class="p-r-50 p-t-5 p-lr-0-lg">
                <h4 class="mtext-105 cl2 js-name-detail p-b-14">${pl.title}</h4>
                   <br />
                <span class="mtext-106 cl2">E.L ${pl.price} </span>
                 <br />

                <p class="stext-102 cl3 p-t-23" id="collapseWidthExample">${pl.description}</p>

                <!--  -->
                <div class="p-t-33">
                  <div class="flex-w flex-r-m p-b-10">
                    <div class="size-203 flex-c-m respon6">Size</div>

                    <div class="size-204 respon6-next">
                      <div class="rs1-select2 bor8 bg0">
                        <select class="js-select2" name="time">
                          <option>Choose an option</option>
                          <option>Size S</option>
                          <option>Size M</option>
                          <option>Size L</option>
                          <option>Size XL</option>
                        </select>
                        <div class="dropDownSelect2"></div>
                      </div>
                    </div>
                  </div>

                  <div class="flex-w flex-r-m p-b-10">
                    <div class="size-203 flex-c-m respon6">Color</div>

                    <div class="size-204 respon6-next">
                      <div class="rs1-select2 bor8 bg0">
                        <select class="js-select2" name="time">
                          <option>Choose an option</option>
                          <option>Red</option>
                          <option>Blue</option>
                          <option>White</option>
                          <option>Grey</option>
                        </select>
                        <div class="dropDownSelect2"></div>
                      </div>
                    </div>
                  </div>

                  <div class="flex-w flex-r-m p-b-10">
                    <div class="size-204 flex-w flex-m respon6-next">
                      <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                        <input class="mtext-104 cl3 txt-center num-product w-100" type="number" name="num-product" onchange="localnumber(this.value)" value="0" />
                      </div>

                      <button class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onclick="addloopcart(${pl.id})">Add to cart</button>
                    </div>
                  </div>
                </div>

                <!--  -->
                <div class="flex-w flex-m p-l-100 p-t-40 respon7">
                  <div class="flex-m bor9 p-r-10 m-r-11">
                    <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                      <i class="zmdi zmdi-favorite"></i>
                    </a>
                  </div>

                  <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                    <i class="fa fa-facebook"></i>
                  </a>

                  <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                    <i class="fa fa-twitter"></i>
                  </a>

                  <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
  document.getElementById("shoping-modal").innerHTML = productAryy;
}

// Add To cart
let datacart = [];

if (localStorage.getItem("datacart") !== null) {
  datacart = JSON.parse(localStorage.getItem("datacart"));
} else {
  datacart = [];
}

async function addloopcart(uu) {
  try {
    const apiResponse = await fetch(`https://fakestoreapi.com/products/${uu}`);
    const product = await apiResponse.json();
    addTocart(product);
  } catch (error) {
    console.error("حدث خطأ أثناء استرداد المنتج:", error);
  }
}

function addTocart(product) {
  const quantity = localStorage.getItem("quantity");
  const total = product.price * quantity;

  const productObj = {
    idom: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    quantity: quantity,
    total: total,
  };

  datacart.push(productObj);
  localStorage.setItem("datacart", JSON.stringify(datacart));
  let items = "";
  for (let i = 0; i < datacart.length; i++) {
    items += `      
    <li class="header-cart-item flex-w flex-t m-b-12" id="${datacart[i].idom}">
        <div class="header-cart-item-img">
          <img src="${datacart[i].image}" alt="IMG"/>
        </div>
        <div class="header-cart-item-txt p-t-8">
          <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04" id="${datacart[i].idom}">${datacart[i].title}</a>
          <span class="header-cart-item-info">${datacart[i].quantity} x E.L ${datacart[i].price}</span>
        </div>
      </li>
      `;
  }
  document.getElementById("cart-list").innerHTML = items;
  location.reload();
  lenCart();
  changeTotal();
  localnumber();
  setChackout();
}
window.onload = function () {
  let conyyt = JSON.parse(localStorage.getItem("datacart"));
  let itemo = "";
  for (let i = 0; i < conyyt.length; i++) {
    itemo += `      
    <li class="header-cart-item flex-w flex-t m-b-12" id="BcR75Hg7d${conyyt[i].idom}">
        <div class="header-cart-item-img">
          <img src="${conyyt[i].image}" alt="IMG" />
        </div>
        <div class="header-cart-item-txt p-t-8">
          <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">${conyyt[i].title}</a>
          <span class="header-cart-item-info">${conyyt[i].quantity} x E.L ${conyyt[i].price}</span>
        </div>
      </li>
      `;
  }
  document.getElementById("cart-list").innerHTML = itemo;
  addTocart();
};
function localnumber(e) {
  if (e <= 0) {
      datacart = [];
      alert("Your value is null please set your value and try agin");
  } else {
    
    }
  localStorage.setItem("quantity", e);
  addTocart();
}
  document.getElementById("Del-All").onclick = function () {
    datacart = [];
    document.getElementById("cart-list").innerHTML = "";
    localStorage.setItem("datacart", JSON.stringify(datacart));
    changeTotal();
    lenCart();
    localnumber();
    setChackout();
  };
function lenCart() {
  document.getElementById("icon-cart-length").innerHTML = datacart.length;
  document.getElementById("icon-cart-length-mobail").innerHTML = datacart.length;
}
lenCart();

// Change Total

function changeTotal() {
  let total = 0;
  let imojy = "&#129297;";
  for (let i = 0; i < datacart.length; i++) {
    total += datacart[i].total;
  }
  if (total == 0) {
    imojy = "&#129298;";
  }
  document.getElementById("total").innerHTML = "Total : E.L  " + total + "  " + imojy;
}
changeTotal();

// End Add To cart
document.body.oncontextmenu = function () {
  alert("Sorry, we are not available for this function");
  return false;
};

//Search Bar
// تعريف قائمة لتخزين البيانات
let searchAryy = [];

// استدعاء دالة البحث عن المنتجات
async function searchApi() {
  try {
    let api = await fetch("https://fakestoreapi.com/products");
    let data = await api.json();
    pushAryySearch(data);
  } catch (error) {
    console.error("حدث خطأ أثناء جلب البيانات:", error);
  }
}
searchApi();

// دالة لإضافة المنتجات إلى القائمة
function pushAryySearch(ser) {
  searchAryy.push(...ser);
}

// دالة البحث والتصفية استنادًا إلى قيمة البحث
function searchBar(val) {
  // قائمة لتخزين العناصر المطابقة
  let filteredData = "";

  // البحث في البيانات ومقارنتها بقيمة البحث
  for (let i = 0; i < searchAryy.length; i++) {
    const product = searchAryy[i];
    if (product.title.toLowerCase().includes(val.toLowerCase())) {
      filteredData += `
        <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
          <div class="block2">
            <div class="block2-pic hov-img0" style="height: 350px; width: 100%">
              <img src="${product.image}" style="object-fit: cover;" alt="IMG-PRODUCT" />
              <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1" onclick="getApiLinknum(${i + 1})"> Quick View </a>
            </div>
            <div class="block2-txt flex-w flex-t p-t-14">
              <div class="block2-txt-child1 flex-col-l">
                <a href="product.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"> ${product.title.slice(0, 40)} </a>
                <span class="stext-105 cl3">E.L ${product.price} </span>
              </div>
              <div class="block2-txt-child2 flex-r p-t-3">
                <img class="icon-heart1 dis-block trans-04" onclick="onChangeColor(this)" style="cursor:pointer;" src="images/icons/icon-heart-01.png" alt="ICON" />
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
    }
  }

  // عرض النتائج المطابقة
  console.log("النتائج المطابقة:");
  document.getElementById("cartona-Products").innerHTML = filteredData;
}
// End Search Bar
// Add Wish List
let wishAryy = [];
if (localStorage.wishList != null) {
  wishAryy = JSON.parse(localStorage.getItem("wishList"));
} else {
  wishAryy = [];
}
function getwish(wi,ty) {
  async function wishApi() {
    let wish1 = await fetch(`https://fakestoreapi.com/products/${wi}`);
    let wish2 = await wish1.json();
    addwishList(wish2);
  }
  wishApi();
}
function addwishList(wipro) {
  let wishOpject = {
    img: wipro.image,
    title: wipro.title,
    price: wipro.price,
  };
  wishAryy.push(wishOpject);

  localStorage.setItem("wishList", JSON.stringify(wishAryy));

  location.reload();
}

// Blur Website
let titleDoc = document.title;
window.onblur = function () {
  document.title = "نتمنى عودتك قريبا....";
};
window.onfocus = function () {
  document.title = titleDoc;
};
//End Blur Website
