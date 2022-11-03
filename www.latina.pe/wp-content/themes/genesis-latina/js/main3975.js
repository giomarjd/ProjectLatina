
$(document).ready(function() {
   
    opciones_series = {
        0: {
            items: 1,
            nav: false

        },
        400: {
            items: 2,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        970: {
            items: 3,
            nav: false,

        }
    }
    var list_breaking = $(".list-breaking-news").owlCarousel({

        margin: 10,
        loop: true,
        autoWidth: true,
        items: 1,
       
    });
    $(".nav-left-ultima").click(function(event) {
        list_breaking.trigger('prev.owl');
    });
    $(".nav-right-ultima").click(function(event) {
        list_breaking.trigger('next.owl');
    });


    var descatada_single = $(".carousel-destacada-single").owlCarousel({
        nav: false,
        dots: false,
        margin: 0,
        loop: true,
        items: 1,

    });

    $(".destacada-single .nav-left").click(function(event) {
        descatada_single.trigger('prev.owl');
    });
    $(".destacada-single .nav-right").click(function(event) {
        descatada_single.trigger('next.owl');
    });






    var list_series = $(".list-series").owlCarousel({
        nav: false,
        dots: false,
        margin: 0,
        loop: true,
        items: 3,
        responsive: opciones_series
    });
    $(".nav-left-1").click(function() {
        list_series.trigger('prev.owl');
    })
    $(".nav-right-1").click(function() {
        list_series.trigger('next.owl');
    })


    $(".carousel-categoria").owlCarousel({
        margin: 0,
        dots: true,
        loop: true,
        items: 1
    })

  


    //cargarSubMenu();
    $(".cerrar-ultimo-minuto").click(function() {
        $(".ultimo-minuto-caja").slideUp(500);
    })
});

function nuevoCargar(){
    let path = window.location;
    let slug = path.pathname.split("/")[1];
    console.log(slug);
    let seleccionado;
    let url = "/js/sub-menu.json?v654468798";
    fetch(url)
        .then((data) => { return data.json() })
        .then((data) => {
            for(let item of data){
             
                let title_=item.title.replace(" ","-").toLowerCase();
              
                if(slug==title_){
                    seleccionado=item;
                    break;
                }
            }
            console.log(seleccionado)
          
           
            if ( seleccionado.items) {
                $("#sub-menu-left").show();
                $("#sub-menu-right").show();
                for (var i = 0; i < seleccionado.items.length; i++) {
                    $("#sub-menu-categoria").append(`<div class="item-submenu"><a href="${seleccionado.items[i].link}">${seleccionado.items[i].title}</a><div>`)
                }
                var owlsubmenu = $("#sub-menu-categoria").owlCarousel({
                    margin: 3,
                    loop: false,
                    dots: false,
                    nav: false,
                    responsive: {
                        // breakpoint from 0 up
                        0: {
                            items: 1,
                            margin: 10,

                        },
                        // breakpoint from 480 up
                        660: {
                            items: 1,
                            margin: 10,

                        },
                        // breakpoint from 768 up
                        768: {
                            items: 6,
                        }
                    }


                });


                $("#sub-menu-left").click(function() {
                    owlsubmenu.trigger('prev.owl');
                })
                $("#sub-menu-right").click(function() {
                    owlsubmenu.trigger('next.owl');
                })





            } else {
                // submenu off
            
            }
        
        });
}
function cargarSubMenu__() {
    let path = window.location;
  
    let slug = path.pathname.split("/")[1];
    console.log(slug);
  
    let url = "/js/submenu.json?v654468798";
    fetch(url)
        .then((data) => { return data.json() })
        .then((data) => {
            console.log(data);
         

        })
}

function versubitems(ele) {
    $(ele).parent().toggleClass("activo");
    $(ele).parent().find("ul").slideToggle();
}


$(function() {
   


    $(".box-compartir img.ico-compartir").click(function() {

        let url = $(this).attr("data-url");
        window.open(url, '_blank', 'width=550,height=600');


    })


    $(".js-enlace").click(function() {
        window.location = $(this).attr("data-enlace");
    })
    $(".js-enlace-blank").click(function() {

        window.open($(this).attr("data-enlace"), '_blank');
    })

    $(".see-more-footer").click(function() {
        $(".footer-site .col-2, .footer-site .col-3, .footer-site .col-4").toggle();
    })




    $(".container-player-fixed").addClass("show");
    $(".cerrar-player").click(function() {
        $(".container-player-fixed").remove();
    })




})

///** detectando el click en el contenido **/ //



function registro_consumo(valor_propiedad) {
    var _favoritos = localStorage.getItem("favoritos");
    //console.log(_favoritos);
    if (_favoritos == null) {
        _favoritos = {};
    } else {
        _favoritos = _favoritos.replace('""', '"').replace('""', '"').replace('"{', '{').replace('}"', "}");

        _favoritos = JSON.parse(_favoritos);

    }
    var _propiedad = valor_propiedad;
    var contador = _favoritos[_propiedad];

    if (contador == undefined) {

        _favoritos[_propiedad] = 0;
    } else {
        _favoritos[_propiedad] = _favoritos[_propiedad] + 1;
    }

    _favoritos = JSON.stringify(_favoritos).replace(/\\/g, "")

    localStorage.setItem("favoritos", _favoritos);

}