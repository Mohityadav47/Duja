(() => {
  const NAV_HTML = '<nav>\n<a aria-label="DUJA Coffee Home" class="logo" href="/index.html#home">\n<img alt="DUJA Coffee logo" class="logo-image" src="/images/logo.jpeg"/>\n<span class="logo-name"><strong>DUJA</strong><span>COFFEE &amp; CAFÉ</span></span>\n</a>\n<button aria-label="Open menu" class="menu-btn" id="menuBtn">☰</button>\n<div class="navlinks" id="navLinks">\n<a href="#home">Home</a>\n<div class="nav-dropdown">\n<a class="products-link" href="#menu">Products <span class="chevron">⌄</span></a>\n<div class="dropdown-menu">\n<a href="/products/duja-breakfast-updated.html">DUJA BREAKFAST <span>فطور دوجا</span></a>\n<a href="/products/duja-desserts-updated.html">DESSERTS <span>الحلويات</span></a>\n<a href="/products/duja-cold-drinks (1).html">COLD DRINKS <span>المشروبات الباردة</span></a>\n<a href="/products/duja-coffee-beans.html">DUJA COFFEE BEANS <span>حبوب قهوة دوجا</span></a>\n<a href="/products/duja-espresso.html">DUJA ESPRESSO <span>إسبريسو دوجا</span></a>\n<a href="/products/duja-hot-drinks.html">HOT DRINKS <span>المشروبات الساخنة</span></a>\n<a href="/products/duja-milk-based-drinks.html">MILK-BASED DRINKS <span>مشروبات الحليب</span></a>\n</div>\n</div>\n<a href="/index.html#menu">Menu</a>\n<a href="/index.html#locations">Locations</a>\n</div>\n</nav>';
  const FOOTER_HTML = '<footer class="global-footer" id="locations">\n<div class="footer-inner global-footer-inner">\n<div class="footer-brand">\n<a aria-label="DUJA Coffee Home" class="footer-logo" href="/index.html#home">\n<img alt="DUJA Coffee logo" src="/images/logo.jpeg"/>\n<span>\n<strong>DUJA</strong>\n<small>COFFEE &amp; CAFÉ</small>\n</span>\n</a>\n<p>\n        A warm place for carefully crafted coffee, fresh bakery and cozy moments.\n        <br/>\n<span class="ar">مكان دافئ للقهوة المتقنة والمخبوزات الطازجة واللحظات الهادئة.</span>\n</p>\n<div aria-label="Social media and location" class="footer-socials">\n<a aria-label="Location" class="social-icon" href="https://maps.app.goo.gl/cSE8bGLbTRUxXCXA?g_st=ic" rel="noopener" target="_blank" title="Location">\n<svg aria-hidden="true" viewbox="0 0 24 24"><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"></path><circle cx="12" cy="9" r="2.4"></circle></svg>\n</a>\n<a aria-label="Instagram" class="social-icon" href="#" title="Instagram">\n<svg aria-hidden="true" viewbox="0 0 24 24"><rect height="17" rx="5" width="17" x="3.5" y="3.5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.7" r="1"></circle></svg>\n</a>\n<a aria-label="TikTok" class="social-icon" href="#" title="TikTok">\n<svg aria-hidden="true" viewbox="0 0 24 24"><path d="M14 4v10.1a4.2 4.2 0 1 1-3.3-4.1"></path><path d="M14 4c.5 2.2 2 3.8 4.2 4.2"></path></svg>\n</a>\n<a aria-label="Snapchat" class="social-icon" href="#" title="Snapchat">\n<svg aria-hidden="true" viewbox="0 0 24 24"><path d="M12 3.5c3.1 0 5.1 2.1 5.1 5.3v2.1c0 .9.4 1.5 1.2 2l1.2.7c.4.2.4.8 0 1-.7.3-1.6.5-2.2.9-.4.2-.5.6-.7 1.1-.3.7-1.1 1-1.8.8-.7-.2-1.3-.1-2 .4-.5.4-1 .6-1.8.6s-1.3-.2-1.8-.6c-.7-.5-1.3-.6-2-.4-.7.2-1.5-.1-1.8-.8-.2-.5-.3-.9-.7-1.1-.6-.4-1.5-.6-2.2-.9-.4-.2-.4-.8 0-1l1.2-.7c.8-.5 1.2-1.1 1.2-2V8.8c0-3.2 2-5.3 5.1-5.3Z"></path></svg>\n</a>\n</div>\n</div>\n<div class="footer-column">\n<h3>Products<br/><span class="ar">المنتجات</span></h3>\n<div class="footer-links">\n<a href="/products/duja-breakfast-updated.html">DUJA BREAKFAST <span class="ar">فطور دوجا</span></a>\n<a href="/products/duja-desserts-updated.html">DESSERTS <span class="ar">الحلويات</span></a>\n<a href="/products/cold-drinks.html">COLD DRINKS <span class="ar">المشروبات الباردة</span></a>\n<a href="/products/duja-coffee-beans.html">DUJA COFFEE BEANS <span class="ar">حبوب قهوة دوجا</span></a>\n<a href="/products/duja-espresso.html">DUJA ESPRESSO <span class="ar">إسبريسو دوجا</span></a>\n<a href="/products/hot-drinks.html">HOT DRINKS <span class="ar">المشروبات الساخنة</span></a>\n<a href="milk-based-drinks.html">MILK-BASED DRINKS <span class="ar">مشروبات الحليب</span></a>\n</div>\n</div>\n<div class="footer-column">\n<h3>Explore<br/><span class="ar">استكشف</span></h3>\n<div class="footer-links">\n<a href="/index.html#home">Home <span class="ar">الرئيسية</span></a>\n<a href="/index.html#menu">Menu <span class="ar">القائمة</span></a>\n<a href="/index.html#story">Our Story <span class="ar">قصتنا</span></a>\n<a href="/index.html#locations">Locations <span class="ar">الموقع</span></a>\n</div>\n</div>\n<div class="footer-column visit-column">\n<h3>Visit Us<br/><span class="ar">زورونا</span></h3>\n<a class="footer-address" href="https://maps.app.goo.gl/cSE8bGLbTRUxXCXA?g_st=ic" rel="noopener" target="_blank">\n<span class="address-icon">⌖</span>\n<span>\n<strong>123 Coffee Street</strong>\n<small>شارع القهوة 123</small>\n</span>\n</a>\n<p class="footer-hours">\n        Mon–Sun · 8:00 AM – 10:00 PM<br/>\n<span class="ar">الإثنين–الأحد · 8:00 صباحاً – 10:00 مساءً</span>\n</p>\n<a class="footer-phone" href="tel:+919876543210">+91 98765 43210</a>\n</div>\n</div>\n<div class="copyright">\n    © 2026 DUJA Coffee &amp; Café · All rights reserved.\n  </div>\n</footer>';
  const CSS_HREF = '/components.css';
  function mount(id, html) {
    const host = document.getElementById(id);
    if (!host || host.shadowRoot) return;
    host.style.display = 'block';
    const shadow = host.attachShadow({mode:'open'});
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = CSS_HREF;
    shadow.appendChild(link);
    const wrap = document.createElement('div');
    wrap.innerHTML = html;
    shadow.appendChild(wrap);
    if (id === 'global-nav') {
      const btn = shadow.querySelector('#menuBtn');
      const links = shadow.querySelector('#navLinks');
      btn?.addEventListener('click', () => links?.classList.toggle('open'));
      shadow.querySelectorAll('.navlinks a:not(.products-link)').forEach(a => a.addEventListener('click', () => links?.classList.remove('open')));
      const products = shadow.querySelector('.products-link');
      products?.addEventListener('click', e => {
        if (window.innerWidth <= 850) {
          e.preventDefault();
          const menu = products.nextElementSibling;
          menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }
      });
    }
  }
  mount('global-nav', NAV_HTML);
  mount('global-footer', FOOTER_HTML);
})();
