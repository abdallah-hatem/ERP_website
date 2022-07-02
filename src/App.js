import './App.scss'

import $ from 'jquery';
import jQuery from 'jquery';

function App() {


  $.noConflict();

  jQuery(document).ready(function ($) {

    "use strict";

    // [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
    //   new SelectFx(el);
    // });

    // jQuery('.selectpicker').selectpicker;




    $('.search-trigger').on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      $('.search-trigger').parent('.header-left').addClass('open');
    });

    $('.search-close').on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      $('.search-trigger').parent('.header-left').removeClass('open');
    });

    // $('.equal-height').matchHeight({
    //   property: 'max-height'
    // });

    // var chartsheight = $('.flotRealtime2').height();
    // $('.traffic-chart').css('height', chartsheight-122);







    // Menu Trigger
    $('#menuToggle').on('click', function (event) {
      var windowWidth = $(window).width();
      if (windowWidth < 1010) {
        $('body').removeClass('open');
        if (windowWidth < 760) {
          $('#left-panel').slideToggle();
        } else {
          $('#left-panel').toggleClass('open-menu');
        }
      } else {
        $('body').toggleClass('open');
        $('#left-panel').removeClass('open-menu');
      }

    });


    $(".menu-item-has-children.dropdown").each(function () {
      $(this).on('click', function () {
        var $temp_text = $(this).children('.dropdown-toggle').html();
        $(this).children('.sub-menu').prepend('<li class="subtitle">' + $temp_text + '</li>');
      });
    });


    // Load Resize 
    $(window).on("load resize", function (event) {
      var windowWidth = $(window).width();
      if (windowWidth < 1010) {
        $('body').addClass('small-device');
      } else {
        $('body').removeClass('small-device');
      }

    });


  });



  /* Scripts for css grid dashboard */

  $(document).ready(() => {
    addResizeListeners();
    setSidenavListeners();
    setUserDropdownListener();
    // renderChart();
    setMenuClickListener();
    setSidenavCloseListener();
  });

  // Set constants and grab needed elements
  const sidenavEl = $('.sidenav');
  const gridEl = $('.grid');
  const SIDENAV_ACTIVE_CLASS = 'sidenav--active';
  const GRID_NO_SCROLL_CLASS = 'grid--noscroll';

  function toggleClass(el, className) {
    if (el.hasClass(className)) {
      el.removeClass(className);
    } else {
      el.addClass(className);
    }
  }

  // User avatar dropdown functionality
  function setUserDropdownListener() {
    const userAvatar = $('.header__avatar');

    userAvatar.on('click', function (e) {
      const dropdown = $(this).children('.dropdown');
      toggleClass(dropdown, 'dropdown--active');
    });
  }

  // Sidenav list sliding functionality
  function setSidenavListeners() {
    const subHeadings = $('.navList__subheading'); console.log('subHeadings: ', subHeadings);
    const SUBHEADING_OPEN_CLASS = 'navList__subheading--open';
    const SUBLIST_HIDDEN_CLASS = 'subList--hidden';

    subHeadings.each((i, subHeadingEl) => {
      $(subHeadingEl).on('click', (e) => {
        const subListEl = $(subHeadingEl).siblings();

        // Add/remove selected styles to list category heading
        if (subHeadingEl) {
          toggleClass($(subHeadingEl), SUBHEADING_OPEN_CLASS);
        }

        // Reveal/hide the sublist
        if (subListEl && subListEl.length === 1) {
          toggleClass($(subListEl), SUBLIST_HIDDEN_CLASS);
        }
      });
    });
  }



  function toggleClass(el, className) {
    if (el.hasClass(className)) {
      el.removeClass(className);
    } else {
      el.addClass(className);
    }
  }

  // If user opens the menu and then expands the viewport from mobile size without closing the menu,
  // make sure scrolling is enabled again and that sidenav active class is removed
  function addResizeListeners() {
    $(window).resize(function (e) {
      const width = window.innerWidth; console.log('width: ', width);

      if (width > 750) {
        sidenavEl.removeClass(SIDENAV_ACTIVE_CLASS);
        gridEl.removeClass(GRID_NO_SCROLL_CLASS);
      }
    });
  }

  // Menu open sidenav icon, shown only on mobile
  function setMenuClickListener() {
    $('.header__menu').on('click', function (e) {
      console.log('clicked menu icon');
      toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
      toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
    });
  }

  // Sidenav close icon
  function setSidenavCloseListener() {
    $('.sidenav__brand-close').on('click', function (e) {
      toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
      toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
    });
  }

  
  

  return (
    <>


      {/* <div class="grid">
        <header class="header">
          <i class="fas fa-bars header__menu"></i>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginLeft:20 }} class="top-fixed-link">
            <a style={{ marginRight: 10 }} href="" class="btn btn-success btn-outline"><i class="fa fa-balance-scale"></i> Sale</a>


            <a style={{ marginRight: 10 }} href="" class="btn btn-success btn-outline"><i class="fa fa-money"></i> Customer Receive</a>

            <a style={{ marginRight: 10 }} href="" class="btn btn-success btn-outline"><i class="fa fa-money" aria-hidden="true"></i> Supplier Payment</a>

            <a href="" class="btn btn-success btn-outline"><i class="ti-shopping-cart"></i> Purchase</a>
          </div>
          <div class="header__avatar">
            <div class="dropdown">
              <ul class="dropdown__list">
                <li class="dropdown__list-item">
                  <span class="dropdown__icon"><i class="far fa-user"></i></span>
                  <span class="dropdown__title">my profile</span>
                </li>
                <li class="dropdown__list-item">
                  <span class="dropdown__icon"><i class="fas fa-clipboard-list"></i></span>
                  <span class="dropdown__title">my account</span>
                </li>
                <li class="dropdown__list-item">
                  <span class="dropdown__icon"><i class="fas fa-sign-out-alt"></i></span>
                  <span class="dropdown__title">log out</span>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <aside class="sidenav">
          <div class="sidenav__brand">
            <i class="fas fa-feather-alt sidenav__brand-icon"></i>
            <a class="sidenav__brand-link" href="#">Ux<span class="text-light">Pro</span></a>
            <i class="fas fa-times sidenav__brand-close"></i>
          </div>
          <div class="sidenav__profile">
            <div class="sidenav__profile-avatar"></div>
            <div class="sidenav__profile-title text-light">Matthew H</div>
          </div>
          <div class="row row--align-v-center row--align-h-center">
            <ul class="navList">
              <li class="navList__heading">documents<i class="far fa-file-alt"></i></li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-briefcase-medical"></i></span>
                  <span class="navList__subheading-title">insurance</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">medical</li>
                  <li class="subList__item">vision</li>
                  <li class="subList__item">dental</li>
                </ul>
              </li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-plane-departure"></i></span>
                  <span class="navList__subheading-title">travel</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">domestic</li>
                  <li class="subList__item">foreign</li>
                  <li class="subList__item">misc</li>
                </ul>
              </li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="far fa-angry"></i></span>
                  <span class="navList__subheading-title">taxes</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">current</li>
                  <li class="subList__item">archives</li>
                </ul>
              </li>

              <li class="navList__heading">messages<i class="far fa-envelope"></i></li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-envelope"></i></span>
                  <span class="navList__subheading-title">inbox</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">primary</li>
                  <li class="subList__item">social</li>
                  <li class="subList__item">promotional</li>
                </ul>
              </li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-eye"></i></span>
                  <span class="navList__subheading-title">unread</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">primary</li>
                  <li class="subList__item">social</li>
                  <li class="subList__item">promotional</li>
                </ul>
              </li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-book-open"></i></span>
                  <span class="navList__subheading-title">archives</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">primary</li>
                  <li class="subList__item">social</li>
                  <li class="subList__item">promotional</li>
                </ul>
              </li>

              <li class="navList__heading">photo album<i class="far fa-image"></i></li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-mountain"></i></span>
                  <span class="navList__subheading-title">vacation</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">cambodia</li>
                  <li class="subList__item">new york</li>
                </ul>
              </li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-wine-glass-alt"></i></span>
                  <span class="navList__subheading-title">anniversary</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">dive trip</li>
                  <li class="subList__item">hikathon</li>
                  <li class="subList__item">buffalo river</li>
                </ul>
              </li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-graduation-cap"></i></span>
                  <span class="navList__subheading-title">university</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">wild horse saloon</li>
                  <li class="subList__item">service corps</li>
                  <li class="subList__item">graduation</li>
                  <li class="subList__item">internships</li>
                </ul>
              </li>

              <li class="navList__heading">statistics<i class="fas fa-chart-bar"></i></li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-credit-card"></i></span>
                  <span class="navList__subheading-title">finances</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">mortgage</li>
                  <li class="subList__item">investments</li>
                  <li class="subList__item">spend log</li>
                  <li class="subList__item">owed</li>
                </ul>
              </li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-phone"></i></span>
                  <span class="navList__subheading-title">call stats</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">last month</li>
                  <li class="subList__item">bi-weekly</li>
                  <li class="subList__item">yesterday</li>
                  <li class="subList__item">today</li>
                </ul>
              </li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-plane"></i></span>
                  <span class="navList__subheading-title">trip logs</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">amsterdam</li>
                  <li class="subList__item">buenos aires</li>
                  <li class="subList__item">cambodia</li>
                  <li class="subList__item">greenland</li>
                </ul>
              </li>

              <li class="navList__heading">Events<i class="fas fa-calendar-alt"></i></li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-wine-glass-alt"></i></span>
                  <span class="navList__subheading-title">weddings</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">past</li>
                  <li class="subList__item">present</li>
                  <li class="subList__item">future</li>
                </ul>
              </li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-school"></i></span>
                  <span class="navList__subheading-title">playdates</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">weirdos</li>
                  <li class="subList__item">smarties</li>
                  <li class="subList__item">nerds</li>
                </ul>
              </li>
              <li>
                <div class="navList__subheading row row--align-v-center">
                  <span class="navList__subheading-icon"><i class="fas fa-users"></i></span>
                  <span class="navList__subheading-title">networking</span>
                </div>
                <ul class="subList subList--hidden">
                  <li class="subList__item">tech</li>
                  <li class="subList__item">automotive</li>
                  <li class="subList__item">UX research</li>
                  <li class="subList__item">development</li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>

        <main class="main">
          <div class="main-header">
            <div class="main-header__intro-wrapper">
              <div class="main-header__welcome">
                <div class="main-header__welcome-title text-light">Welcome, <strong>Matthew</strong></div>
                <div class="main-header__welcome-subtitle text-light">How are you today?</div>
              </div>
              <div class="quickview">
                <div class="quickview__item">
                  <div class="quickview__item-total">41</div>
                  <div class="quickview__item-description">
                    <i class="far fa-calendar-alt"></i>
                    <span class="text-light">Events</span>
                  </div>
                </div>
                <div class="quickview__item">
                  <div class="quickview__item-total">64</div>
                  <div class="quickview__item-description">
                    <i class="far fa-comment"></i>
                    <span class="text-light">Messages</span>
                  </div>
                </div>
                <div class="quickview__item">
                  <div class="quickview__item-total">27&deg;</div>
                  <div class="quickview__item-description">
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="text-light">Austin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main-overview">
            <div class="overviewCard">
              <div class="overviewCard-icon overviewCard-icon--document">
                <i class="far fa-file-alt"></i>
              </div>
              <div class="overviewCard-description">
                <h3 class="overviewCard-title text-light">New <strong>Document</strong></h3>
                <p class="overviewCard-subtitle">Europe Trip</p>
              </div>
            </div>
            <div class="overviewCard">
              <div class="overviewCard-icon overviewCard-icon--calendar">
                <i class="far fa-calendar-check"></i>
              </div>
              <div class="overviewCard-description">
                <h3 class="overviewCard-title text-light">Upcoming <strong>Event</strong></h3>
                <p class="overviewCard-subtitle">Chili Cookoff</p>
              </div>
            </div>
            <div class="overviewCard">
              <div class="overviewCard-icon overviewCard-icon--mail">
                <i class="far fa-envelope"></i>
              </div>
              <div class="overviewCard-description">
                <h3 class="overviewCard-title text-light">Recent <strong>Emails</strong></h3>
                <p class="overviewCard-subtitle">+10</p>
              </div>
            </div>
            <div class="overviewCard">
              <div class="overviewCard-icon overviewCard-icon--photo">
                <i class="far fa-file-image"></i>
              </div>
              <div class="overviewCard-description">
                <h3 class="overviewCard-title text-light">New <strong>Album</strong></h3>
                <p class="overviewCard-subtitle">House Concert</p>
              </div>
            </div>
          </div>
          <div class="main__cards">
            <div class="card">
              <div class="card__header">
                <div class="card__header-title text-light">Your <strong>Events</strong>
                  <a href="#" class="card__header-link text-bold">View All</a>
                </div>
                <div class="settings">
                  <div class="settings__block"><i class="fas fa-edit"></i></div>
                  <div class="settings__block"><i class="fas fa-cog"></i></div>
                </div>
              </div>
              <div class="card__main">
                <div class="card__row">
                  <div class="card__icon"><i class="fas fa-gift"></i></div>
                  <div class="card__time">
                    <div>today</div>
                  </div>
                  <div class="card__detail">
                    <div class="card__source text-bold">Jonathan G</div>
                    <div class="card__description">Going away party at 8:30pm. Bring a friend!</div>
                    <div class="card__note">1404 Gibson St</div>
                  </div>
                </div>
                <div class="card__row">
                  <div class="card__icon"><i class="fas fa-plane"></i></div>
                  <div class="card__time">
                    <div>Tuesday</div>
                  </div>
                  <div class="card__detail">
                    <div class="card__source text-bold">Matthew H</div>
                    <div class="card__description">Flying to Bora Bora at 4:30pm</div>
                    <div class="card__note">Delta, Gate 27B</div>
                  </div>
                </div>
                <div class="card__row">
                  <div class="card__icon"><i class="fas fa-book"></i></div>
                  <div class="card__time">
                    <div>Thursday</div>
                  </div>
                  <div class="card__detail">
                    <div class="card__source text-bold">National Institute of Science</div>
                    <div class="card__description">Join the institute for an in-depth look at Stephen Hawking</div>
                    <div class="card__note">7:30pm, Carnegie Center for Science</div>
                  </div>
                </div>
                <div class="card__row">
                  <div class="card__icon"><i class="fas fa-heart"></i></div>
                  <div class="card__time">
                    <div>Friday</div>
                  </div>
                  <div class="card__detail">
                    <div class="card__source text-bold">24th Annual Heart Ball</div>
                    <div class="card__description">Join us and contribute to your favorite local charity.</div>
                    <div class="card__note">6:45pm, Austin Convention Ctr</div>
                  </div>
                </div>
                <div class="card__row">
                  <div class="card__icon"><i class="fas fa-heart"></i></div>
                  <div class="card__time">
                    <div>Saturday</div>
                  </div>
                  <div class="card__detail">
                    <div class="card__source text-bold">Little Rock Air Show</div>
                    <div class="card__description">See the Blue Angels fly with roaring thunder</div>
                    <div class="card__note">11:00pm, Jacksonville Airforce Base</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card__header">
                <div class="card__header-title text-light">Recent <strong>Documents</strong>
                  <a href="#" class="card__header-link text-bold">View All</a>
                </div>
                <div class="settings">
                  <div class="settings__block"><i class="fas fa-edit"></i></div>
                  <div class="settings__block"><i class="fas fa-cog"></i></div>
                </div>
              </div>
              <div class="card">
                <div class="documents">
                  <div class="document">
                    <div class="document__img"></div>
                    <div class="document__title">tesla-patents</div>
                    <div class="document__date">07/16/2018</div>
                  </div>
                  <div class="document">
                    <div class="document__img"></div>
                    <div class="document__title">yearly-budget</div>
                    <div class="document__date">09/04/2018</div>
                  </div>
                  <div class="document">
                    <div class="document__img"></div>
                    <div class="document__title">top-movies</div>
                    <div class="document__date">10/10/2018</div>
                  </div>
                  <div class="document">
                    <div class="document__img"></div>
                    <div class="document__title">trip-itinerary</div>
                    <div class="document__date">11/01/2018</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card--finance">
              <div class="card__header">
                <div class="card__header-title text-light">Monthly <strong>Spending</strong>
                  <a href="#" class="card__header-link text-bold">View All</a>
                </div>
                <div class="settings">
                  <div class="settings__block"><i class="fas fa-edit"></i></div>
                  <div class="settings__block"><i class="fas fa-cog"></i></div>
                </div>
              </div>
              <div id="chartdiv"></div>
            </div>
          </div> 
        </main>

        <footer class="footer">
          <p><span class="footer__copyright">&copy;</span> 2018 MTH</p>
          <p>Crafted with <i class="fas fa-heart footer__icon"></i> by <a href="https://www.linkedin.com/in/matt-holland/" target="_blank" class="footer__signature">Matt H</a></p>
        </footer>
      </div> */}
      


      <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">
          <div id="main-menu" class="main-menu collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="index.html"><i class="menu-icon fa fa-laptop"></i>Dashboard </a>
              </li>
              <li class="menu-title">UI elements</li>
              <li class="menu-item-has-children dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-cogs"></i>Components</a>
                <ul class="sub-menu children dropdown-menu">                            <li><i class="fa fa-puzzle-piece"></i><a href="ui-buttons.html">Buttons</a></li>
                  <li><i class="fa fa-id-badge"></i><a href="ui-badges.html">Badges</a></li>
                  <li><i class="fa fa-bars"></i><a href="ui-tabs.html">Tabs</a></li>

                  <li><i class="fa fa-id-card-o"></i><a href="ui-cards.html">Cards</a></li>
                  <li><i class="fa fa-exclamation-triangle"></i><a href="ui-alerts.html">Alerts</a></li>
                  <li><i class="fa fa-spinner"></i><a href="ui-progressbar.html">Progress Bars</a></li>
                  <li><i class="fa fa-fire"></i><a href="ui-modals.html">Modals</a></li>
                  <li><i class="fa fa-book"></i><a href="ui-switches.html">Switches</a></li>
                  <li><i class="fa fa-th"></i><a href="ui-grids.html">Grids</a></li>
                  <li><i class="fa fa-file-word-o"></i><a href="ui-typgraphy.html">Typography</a></li>
                </ul>
              </li>
              <li class="menu-item-has-children dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-table"></i>Tables</a>
                <ul class="sub-menu children dropdown-menu">
                  <li><i class="fa fa-table"></i><a href="tables-basic.html">Basic Table</a></li>
                  <li><i class="fa fa-table"></i><a href="tables-data.html">Data Table</a></li>
                </ul>
              </li>
              <li class="menu-item-has-children dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-th"></i>Forms</a>
                <ul class="sub-menu children dropdown-menu">
                  <li><i class="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                  <li><i class="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                </ul>
              </li>

              <li class="menu-title">Icons</li>

              <li class="menu-item-has-children dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-tasks"></i>Icons</a>
                <ul class="sub-menu children dropdown-menu">
                  <li><i class="menu-icon fa fa-fort-awesome"></i><a href="font-fontawesome.html">Font Awesome</a></li>
                  <li><i class="menu-icon ti-themify-logo"></i><a href="font-themify.html">Themefy Icons</a></li>
                </ul>
              </li>
              <li>
                <a href="widgets.html"> <i class="menu-icon ti-email"></i>Widgets </a>
              </li>
              <li class="menu-item-has-children dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-bar-chart"></i>Charts</a>
                <ul class="sub-menu children dropdown-menu">
                  <li><i class="menu-icon fa fa-line-chart"></i><a href="charts-chartjs.html">Chart JS</a></li>
                  <li><i class="menu-icon fa fa-area-chart"></i><a href="charts-flot.html">Flot Chart</a></li>
                  <li><i class="menu-icon fa fa-pie-chart"></i><a href="charts-peity.html">Peity Chart</a></li>
                </ul>
              </li>

              <li class="menu-item-has-children dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-area-chart"></i>Maps</a>
                <ul class="sub-menu children dropdown-menu">
                  <li><i class="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                  <li><i class="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                </ul>
              </li>
              <li class="menu-title">Extras</li>
              <li class="menu-item-has-children dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-glass"></i>Pages</a>
                <ul class="sub-menu children dropdown-menu">
                  <li><i class="menu-icon fa fa-sign-in"></i><a href="page-login.html">Login</a></li>
                  <li><i class="menu-icon fa fa-sign-in"></i><a href="page-register.html">Register</a></li>
                  <li><i class="menu-icon fa fa-paper-plane"></i><a href="pages-forget.html">Forget Pass</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
      <div id="right-panel" class="right-panel">
        <header id="header" class="header">
          <div class="top-left">
            <div class="navbar-header">
              <a class="navbar-brand" href="./"><img src="https://technext.github.io/elaadmin/images/logo.png" alt="Logo" /></a>
              <a class="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo" /></a>
              <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
            </div>
            
          </div>
          <div class="top-right">
            
            <div class="header-menu">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} class="top-fixed-link">
                <a style={{ marginRight: 10 }} href="" class="btn btn-success btn-outline"><i class="fa fa-balance-scale"></i> Sale</a>


                <a style={{ marginRight: 10 }} href="" class="btn btn-success btn-outline"><i class="fa fa-money"></i> Customer Receive</a>

                <a style={{ marginRight: 10 }} href="" class="btn btn-success btn-outline"><i class="fa fa-money" aria-hidden="true"></i> Supplier Payment</a>

                <a href="" class="btn btn-success btn-outline"><i class="ti-shopping-cart"></i> Purchase</a>
              </div>






              <div class="header-left">
                

                <button class="search-trigger"><i class="fa fa-search"></i></button>
                
                <div class="form-inline">
                  

                  <form class="search-form">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                    <button class="search-close" type="submit"><i class="fa fa-close"></i></button>
                  </form>

                </div>

                <div class="dropdown for-notification">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-bell"></i>
                    <span class="count bg-danger">3</span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="notification">
                    <p class="red">You have 3 Notification</p>
                    <a class="dropdown-item media" href="#">
                      <i class="fa fa-check"></i>
                      <p>Server #1 overloaded.</p>
                    </a>
                    <a class="dropdown-item media" href="#">
                      <i class="fa fa-info"></i>
                      <p>Server #2 overloaded.</p>
                    </a>
                    <a class="dropdown-item media" href="#">
                      <i class="fa fa-warning"></i>
                      <p>Server #3 overloaded.</p>
                    </a>
                  </div>
                </div>
                

                <div class="dropdown for-message">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="message" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-envelope"></i>
                    <span class="count bg-primary">4</span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="message">
                    <p class="red">You have 4 Mails</p>
                    <a class="dropdown-item media" href="#">
                      <span class="photo media-left"><img alt="avatar" src="images/avatar/1.jpg" /></span>
                      <div class="message media-body">
                        <span class="name float-left">Jonathan Smith</span>
                        <span class="time float-right">Just now</span>
                        <p>Hello, this is an example msg</p>
                      </div>
                    </a>
                    <a class="dropdown-item media" href="#">
                      <span class="photo media-left"><img alt="avatar" src="images/avatar/2.jpg" /></span>
                      <div class="message media-body">
                        <span class="name float-left">Jack Sanders</span>
                        <span class="time float-right">5 minutes ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                      </div>
                    </a>
                    <a class="dropdown-item media" href="#">
                      <span class="photo media-left"><img alt="avatar" src="images/avatar/3.jpg" /></span>
                      <div class="message media-body">
                        <span class="name float-left">Cheryl Wheeler</span>
                        <span class="time float-right">10 minutes ago</span>
                        <p>Hello, this is an example msg</p>
                      </div>
                    </a>
                    <a class="dropdown-item media" href="#">
                      <span class="photo media-left"><img alt="avatar" src="images/avatar/4.jpg" /></span>
                      <div class="message media-body">
                        <span class="name float-left">Rachel Santos</span>
                        <span class="time float-right">15 minutes ago</span>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="user-area dropdown float-right">
                <a href="#" class="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img class="user-avatar rounded-circle" src="https://technext.github.io/elaadmin/images/admin.jpg" alt="User Avatar" />
                </a>

                <div class="user-menu dropdown-menu">
                  <a class="nav-link" href="#"><i class="fa fa- user"></i>My Profile</a>

                  <a class="nav-link" href="#"><i class="fa fa- user"></i>Notifications <span class="count">13</span></a>

                  <a class="nav-link" href="#"><i class="fa fa -cog"></i>Settings</a>

                  <a class="nav-link" href="#"><i class="fa fa-power -off"></i>Logout</a>
                </div>
              </div>

            </div>
          </div>
        </header>

        <div class="content">
          
          <div class="animated fadeIn">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <div class="stat-widget-five">
                      <div class="stat-icon dib flat-color-1">
                        <i class="pe-7s-cash"></i>
                      </div>
                      <div class="stat-content">
                        <div class="text-left dib">
                          <div class="stat-text">$<span class="count">23569</span></div>
                          <div class="stat-heading">Revenue</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <div class="stat-widget-five">
                      <div class="stat-icon dib flat-color-2">
                        <i class="pe-7s-cart"></i>
                      </div>
                      <div class="stat-content">
                        <div class="text-left dib">
                          <div class="stat-text"><span class="count">3435</span></div>
                          <div class="stat-heading">Sales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <div class="stat-widget-five">
                      <div class="stat-icon dib flat-color-3">
                        <i class="pe-7s-browser"></i>
                      </div>
                      <div class="stat-content">
                        <div class="text-left dib">
                          <div class="stat-text"><span class="count">349</span></div>
                          <div class="stat-heading">Templates</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body">
                    <div class="stat-widget-five">
                      <div class="stat-icon dib flat-color-4">
                        <i class="pe-7s-users"></i>
                      </div>
                      <div class="stat-content">
                        <div class="text-left dib">
                          <div class="stat-text"><span class="count">2986</span></div>
                          <div class="stat-heading">Clients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div> 
    </>
  );
}

export default App;
