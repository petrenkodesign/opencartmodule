window.addEventListener('DOMContentLoaded', (event) => {
  loadAllImages();
  console.log('Load');
  document.querySelectorAll(".ocpd-icons-field .ocpd-icon-img").forEach(function(el) {
    el.addEventListener('click', function() {
      removeAllClass(".ocpd-icons-field .ocpd-icon-img", "active");
      this.classList.add("active");
      var layerimg = this.getAttribute('data-url');
      document.querySelector('.ocpd-product-field').style.cssText = "background-image: url('"+layerimg+"')";
      // remove change to opencar mechanic
      if(this.getAttribute('data-style')) document.querySelector('.ocpd-product-field').style.cssText += "background-position: 320px 30px; background-size: 43%;"
    });
    // el.addEventListener('click', function() {
    // });
  });
});

function removeAllClass(selsector, classname) {
  document.querySelectorAll(selsector).forEach(function(el) {
    el.classList.remove(classname);
  });
}

function loadAllImages() {
  preloadImages(".ocpd-icons-field .ocpd-icon-img");
}
function preloadImages(selector) {
  document.querySelectorAll(selector).forEach(function(el) {
    var src = el.getAttribute('data-url');
    document.querySelector('.ocpd-preloader').style.content += ' url("'+src+'")';
  });
}
