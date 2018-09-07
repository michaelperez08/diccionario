var diccionario = [
  {
    palabra: "Abacería",
    significado: {
      significado1: "Tienda de comestibles",
      significado2: "Scalzi"
    }
  },
  {
    palabra: "Abalear",
    significado: {
      significado1: "Separar del grano ya aventado los residuos de la paja",
      significado2: "Hamilton"
    }
  },
  {
    palabra: "Ablación",
    significado: {
      significado1: "Castración femenina por extirpación del clítoris",
      significado2: "Sharp"
    }
  },
  {
    palabra: "Acanto",
    significado: {
      significado1: "Hierba de hojas rizadas y espinosas, Adorno imitativo de las hojas de esta planta",
      significado2: "Woodhouse"
    }
  },
  {
    palabra: "Diploblastic",
    significado: {
      significado1: "Characterizing the ovum when it has two primary germinallayers.",
      significado2: "Woodhouse"
    }
  },
  {
    palabra: "Defigure",
    significado: {
      significado1: "To delineate. [Obs.]These two stones as they are here defigured. Weever.",
      significado2: "Woodhouse"
    }
  },
  {
    palabra: "Corrugator",
    significado: {
      significado1: "A muscle which contracts the skin of the forehead into wrinkles.",
      significado2: "Brown"
    }
  },
  {
    palabra: "Proterandry",
    significado: {
      significado1: "Pertaining to, or designating, an acid obtained from leucin, and called also oxycaproic acid.",
      significado2: "Brown"
    }
  },
  {
    palabra: "The Silmarillion",
    significado: {
      significado1: "J.R.R",
      significado2: "Tolkien"
    }
  },
  {
    palabra: "Syrup",
    significado: {
      significado1: "Max",
      significado2: "Barry"
    }
  },
  {
    palabra: "The Lost Symbol",
    significado: {
      significado1: "Dan",
      significado2: "Brown"
    }
  },
  {
    palabra: "The Book of Lies",
    significado: {
      significado1: "Brad",
      significado2: "Meltzer"
    }
  },
  {
    palabra: "Lamb",
    significado: {
      significado1: "Christopher",
      significado2: "Moore"
    }
  },
  {
    palabra: "Fool",
    significado: {
      significado1: "Christopher",
      significado2: "Moore"
    }
  },
  {
    palabra: "Incompetence",
    significado: {
      significado1: "Rob",
      significado2: "Grant"
    }
  },
  {
    palabra: "Fat",
    significado: {
      significado1: "Rob",
      significado2: "Grant"
    }
  },
  {
    palabra: "Colony",
    significado: {
      significado1: "Rob",
      significado2: "Grant"
    }
  },
  {
    palabra: "Backwards, Red Dwarf",
    significado: {
      significado1: "Rob",
      significado2: "Grant"
    }
  },
  {
    palabra: "The Grand Design",
    significado: {
      significado1: "Stephen",
      significado2: "Hawking"
    }
  },
  {
    palabra: "The Book of Samson",
    significado: {
      significado1: "David",
      significado2: "Maine"
    }
  },
  {
    palabra: "The Preservationist",
    significado: {
      significado1: "David",
      significado2: "Maine"
    }
  },
  {
    palabra: "Fallen",
    significado: {
      significado1: "David",
      significado2: "Maine"
    }
  },
  {
    palabra: "Monster 1959",
    significado: {
      significado1: "David",
      significado2: "Maine"
    }
  }
];

function buscar(){

  var palabraBuscar = document.getElementById("search").value;
  if(palabraBuscar){
    var options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "palabra",
        "significado.significado1"
      ]
    };
    var fuse = new Fuse(diccionario, options); // "list" is the item array
    var result = fuse.search(palabraBuscar);
    var item = document.getElementById("listItem"+0);
    var descripcion = document.getElementById("descripcion"+0);
    if(result[0] && (result[0].palabra != item.text)){
      item.text = result[0].palabra;
      descripcion.text = result[0].significado.significado1;
      Materialize.showStaggeredList('#staggered-test');
    }
  }
}


$(document).ready(function(){

  /*setInterval(function() {
  ObserveInputValue($('#input_id').val());
}, 100);*/

});
