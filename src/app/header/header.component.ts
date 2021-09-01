import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("menuCategoria") categoriaM:ElementRef;
  @ViewChild("menuEspecialidades") especialidadesM: ElementRef;
  @ViewChild("menuUbicacion") ubicacionM: ElementRef;
  @ViewChild("menuOtros") otrosM: ElementRef;
  @ViewChild("primerVistaMenu") primerVista: ElementRef;
  @ViewChild("opcionesCategorias") opcCategorias:ElementRef;
  @ViewChild("opcionesUbicaciones") opcUbicacion:ElementRef;
  @ViewChild("opcionesEspecialidades") opcEspecialidad: ElementRef;
  @ViewChild("contenedorPrueba") contenedorP: ElementRef;
  @ViewChild("contenedorBusqueda") contedorSearch: ElementRef;
  @ViewChild("closeButton") closeB:ElementRef;
  @ViewChild("busquedaDesktop") searchDesktop: ElementRef;


  public categoriaEquipos = false;
  public categoriaHerramientas = false;
  public categoriaMotores = false;
  public categoriaAccesorios = false;

  /*==============================================*/

  public menuCategorias = false;
  public menuEspecialidades = false;
  public menuUbicaciones = false;
  public menuOtros = false;

  public subcatEquipos = false;
  public subcatHerramientas = false;
  public subcatAccesorios = false;
  public subcatMotores = false;
  public busquedaFlag = false;

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    this.categoriaEquipos = true;
  }

  leaveelement(dato:string){
    this.renderer.removeClass(this.categoriaM.nativeElement, "clasePrueba");
    switch(dato){
      case 'categorias':
        this.renderer.removeClass(this.categoriaM.nativeElement, "clasePrueba");
      break;
      case 'especialidades':
        this.renderer.removeClass(this.especialidadesM.nativeElement, "clasePrueba");
      break;
      case 'ubicaciones':
        this.renderer.removeClass(this.ubicacionM.nativeElement, "clasePrueba");
      break;
      case 'otros':
        this.renderer.removeClass(this.otrosM.nativeElement, "clasePrueba");
      break;
    }
  }

  busquedaAvanzada(){
    console.log('Supp this is the advance research')
  }

  openSearchArea(){
    console.log('Presionaste opensearch area')
    let searchWidth = this.searchDesktop.nativeElement.offsetWidth;
    if(searchWidth == 0){
      this.renderer.addClass(this.searchDesktop.nativeElement, "expandSearchD")
    }else{
      this.renderer.removeClass(this.searchDesktop.nativeElement, "expandSearchD")
    }
  }

  closeSearchArea(){
    this.renderer.removeClass(this.searchDesktop.nativeElement, "expandSearchD")
  }

  expandSearch(){

    let elementBusquedaWith = this.contedorSearch.nativeElement.offsetWidth;
    if(elementBusquedaWith == 0){
      this.renderer.addClass(this.contedorSearch.nativeElement, "expandContenedorBusqueda");
      this.renderer.removeClass(this.primerVista.nativeElement, "expandfirst");
      this.renderer.removeClass(this.contenedorP.nativeElement, "contenedorPruebaExpand");
      this.renderer.addClass(this.closeB.nativeElement, "closeButtonAppear");
    }else{
      this.renderer.removeClass(this.contedorSearch.nativeElement, "expandContenedorBusqueda");
      this.renderer.removeClass(this.closeB.nativeElement, "closeButtonAppear");
    }
    
  }


  expandSubcategorias(dato){
    switch(dato){
      case 'equipos':
        console.log('son equipos');
        this.renderer.addClass(this.contenedorP.nativeElement, "contenedorPruebaExpand");
        this.subcatEquipos = true;
        this.subcatAccesorios = false;
        this.subcatHerramientas = false;
        this.subcatMotores = false;
       
      break;
      case 'herramientas':
        console.log('Son herramientas');
        this.renderer.addClass(this.contenedorP.nativeElement, "contenedorPruebaExpand");
        this.subcatEquipos = false;
        this.subcatAccesorios = false;
        this.subcatHerramientas = true;
        this.subcatMotores = false;
      break;
      case 'accesorios':
        console.log('Son accesorios');
        this.renderer.addClass(this.contenedorP.nativeElement, "contenedorPruebaExpand");
        this.subcatEquipos = false;
        this.subcatAccesorios = true;
        this.subcatHerramientas = false;
        this.subcatMotores = false;
      break;
      case 'motores':
        console.log('Son motorres');
        this.renderer.addClass(this.contenedorP.nativeElement, "contenedorPruebaExpand");
        this.subcatEquipos = false;
        this.subcatAccesorios = false;
        this.subcatHerramientas = false;
        this.subcatMotores = true;
      break;
    }
  }


  minimizarSubMenu(){
    this.renderer.removeClass(this.contenedorP.nativeElement, "contenedorPruebaExpand");
  }
  

  selectCategory(valor:string){
    console.log("Supp bitches", valor);
    switch(valor){
      case 'herramientas': 
        console.log('Es una herramienta');
        this.categoriaEquipos = false;
        this.categoriaHerramientas = true;
        this.categoriaAccesorios = false;
        this.categoriaMotores = false;
      break;
      case 'equipos':
        console.log('Es un equipo');
        this.categoriaEquipos = true;
        this.categoriaHerramientas = false;
        this.categoriaAccesorios = false;
        this.categoriaMotores = false;
      break;
      case 'accesorios':
        console.log('Son accesorios');
        this.categoriaEquipos = false;
        this.categoriaHerramientas = false;
        this.categoriaAccesorios = true;
        this.categoriaMotores = false;
      break;
      case 'motores':
        console.log('Son motores');
        this.categoriaEquipos = false;
        this.categoriaHerramientas = false;
        this.categoriaAccesorios = false;
        this.categoriaMotores = true;
      break;
      
    
  }

} 

  expandMenu(){
    console.log('This is the fucking width',this.primerVista.nativeElement.offsetWidth);
    let widthElement = this.primerVista.nativeElement.offsetWidth;
    if(widthElement == 0){
      this.renderer.addClass(this.primerVista.nativeElement, "expandfirst");
      this.renderer.addClass(this.closeB.nativeElement, "closeButtonAppear");
      this.renderer.removeClass(this.contedorSearch.nativeElement, "expandContenedorBusqueda");
    }else{
      this.renderer.removeClass(this.primerVista.nativeElement, "expandfirst");
      this.renderer.removeClass(this.contenedorP.nativeElement, "contenedorPruebaExpand");
      this.renderer.removeClass(this.contedorSearch.nativeElement, "expandContenedorBusqueda");
      this.renderer.removeClass(this.closeB.nativeElement, "closeButtonAppear");
    }
    
  }
  
  

  expandCategories(dato){
    switch(dato){
      case 'categorias':
        let opcCategoryHeight = this.opcCategorias.nativeElement.offsetHeight;
        console.log(opcCategoryHeight)
        if(opcCategoryHeight == 0){
          this.renderer.addClass(this.opcCategorias.nativeElement, "expandCm");
        }else{
          this.renderer.removeClass(this.opcCategorias.nativeElement, "expandCm");
        }
      break;
      case 'ubicaciones':
        let opcUbicacionHeight = this.opcUbicacion.nativeElement.offsetHeight;
        if(opcUbicacionHeight == 0){
          this.renderer.addClass(this.opcUbicacion.nativeElement, "expandCm");
        }else{
          this.renderer.removeClass(this.opcUbicacion.nativeElement, "expandCm");
        }
      break;
      case 'especialidades':
        let opcEspecialidades = this.opcEspecialidad.nativeElement.offsetHeight;
        if(opcEspecialidades == 0){
          this.renderer.addClass(this.opcEspecialidad.nativeElement, "expandCm");
        }else{
          this.renderer.removeClass(this.opcEspecialidad.nativeElement, "expandCm");
        }
      break;
    }
    
  } 

  closeMenus(){
    this.renderer.removeClass(this.closeB.nativeElement, "closeButtonAppear");
    this.renderer.removeClass(this.primerVista.nativeElement, "expandfirst");
    this.renderer.removeClass(this.contenedorP.nativeElement, "contenedorPruebaExpand");
    this.renderer.removeClass(this.contedorSearch.nativeElement, "expandContenedorBusqueda");

  }


  selectMenu(valor:string){
    switch(valor){
      case 'categorias':
        this.renderer.addClass(this.categoriaM.nativeElement, "clasePrueba");
        this.renderer.removeClass(this.especialidadesM.nativeElement, "clasePrueba");
        this.renderer.removeClass(this.ubicacionM.nativeElement, "clasePrueba");
        this.renderer.removeClass(this.otrosM.nativeElement, "clasePrueba");
      break;
      case 'especialidades': 
        this.renderer.removeClass(this.categoriaM.nativeElement, "clasePrueba");
        this.renderer.addClass(this.especialidadesM.nativeElement, "clasePrueba");
        this.renderer.removeClass(this.ubicacionM.nativeElement, "clasePrueba");
        this.renderer.removeClass(this.otrosM.nativeElement, "clasePrueba");
       
      break;
      case 'ubicaciones': 
        this.renderer.removeClass(this.categoriaM.nativeElement, "clasePrueba");
        this.renderer.removeClass(this.especialidadesM.nativeElement, "clasePrueba");
        this.renderer.addClass(this.ubicacionM.nativeElement, "clasePrueba");
        this.renderer.removeClass(this.otrosM.nativeElement, "clasePrueba");
      
      break;
      case 'otros': 
        this.renderer.removeClass(this.categoriaM.nativeElement, "clasePrueba");
        this.renderer.removeClass(this.especialidadesM.nativeElement, "clasePrueba");
        this.renderer.removeClass(this.ubicacionM.nativeElement, "clasePrueba");
        this.renderer.addClass(this.otrosM.nativeElement, "clasePrueba");
      break;


    }
  }



}
