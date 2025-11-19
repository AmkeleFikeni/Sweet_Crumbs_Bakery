document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('primary-menu');
  if(menuToggle && menu){
    menuToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('show');
    });
  }
  var crumb = document.getElementById('breadcrumbs');
  if(crumb){
    var path = window.location.pathname.split('/').pop() || 'index.html';
    var map = {
      'index.html':'Home',
      'home.html':'Home',
      'about.html':'About',
      'products.html':'Products',
      'orders.html':'Orders',
      'contacts.html':'Contact'
    };
    var current = map[path] || path.replace('.html','');
    crumb.innerHTML = '<a href="index.html">Home</a> &raquo; <span aria-current="page">'+ current +'</span>';
  }
  if(typeof anime !== 'undefined'){
    var h = document.querySelector('#hero-heading') || document.querySelector('.site-header h1') || document.querySelector('h1');
    if(h){
      anime({
        targets: h,
        translateY: [-30,0],
        opacity: [0,1],
        duration: 900,
        easing: 'easeOutExpo'
      });
    }
    var cards = document.querySelectorAll('.product-card');
    if(cards.length){
      anime({
        targets: cards,
        translateY: [20,0],
        opacity: [0,1],
        delay: anime.stagger(120),
        duration: 800,
        easing: 'easeOutExpo'
      });
    }
  }

  var orderForm = document.getElementById('orderForm');
  if(orderForm){
    orderForm.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('cust-name') || orderForm.querySelector('[name="name"]');
      var email = document.getElementById('cust-email') || orderForm.querySelector('[name="email"]');
      var product = document.getElementById('product') || orderForm.querySelector('[name="product"]');
      var qty = document.getElementById('qty') || orderForm.querySelector('[name="qty"]');

      if(!name.value.trim() || !email.value.trim() || !product.value.trim() || !qty.value){
        Swal.fire({
          icon: 'warning',
          title: 'Please complete all required fields',
          text: 'Name, email, product and quantity are required.'
        });
        return;
      }

      Swal.fire({
        title: 'Confirm order',
        html: '<strong>' + name.value + '</strong><br>Order: ' + qty.value + ' x ' + product.value,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Submit order',
        cancelButtonText: 'Cancel'
      }).then(function(res){
        if(res.isConfirmed){
          Swal.fire({
            title: 'Order received',
            html: 'Thank you! Your order has been recorded (simulated).',
            icon: 'success',
            timer: 2200
          });
          orderForm.reset();
        }
      });
    });
  }
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('cname') || contactForm.querySelector('[name="name"]');
      var email = document.getElementById('cemail') || contactForm.querySelector('[name="email"]');

      if(!name.value.trim() || !email.value.trim()){
        Swal.fire({ icon:'warning', title:'Please fill name and email' });
        return;
      }

      Swal.fire({
        title:'Message Sent',
        text:'Thanks — we will be in touch shortly.',
        icon:'success',
        timer:1800
      });
      contactForm.reset();
    });
  }

  var orderNowBtn = document.getElementById('orderNowBtn');
  if(orderNowBtn){
    orderNowBtn.addEventListener('click', function(e){
      e.preventDefault();
      Swal.fire({
        title:'Order now',
        text:'Go to the Orders page to place your order.',
        icon:'info',
        confirmButtonText:'Go to Orders'
      }).then(function(){
        window.location.href = 'orders.html';
      });
    });
  }
});
