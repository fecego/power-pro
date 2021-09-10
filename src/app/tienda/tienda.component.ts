import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  @ViewChild('filtrosResponsive') filResponsive:ElementRef;
  @ViewChild('botonResponsiveFiltros') botonResponsiveF: ElementRef;
  @ViewChild('filtrosRExpand') filtrosRexpand:ElementRef;
  constructor(private render:Renderer2) { 

  }

  ngOnInit(): void {
  }

  openFiltrosResponsive(){
      const medidaFilterResponsive = this.filResponsive.nativeElement.offsetWidth;
      console.log('Presionaste openFiltros')
      if(medidaFilterResponsive == 0){
        this.render.addClass(this.filResponsive.nativeElement, 'clasificacion-responsivaExpand');
        this.render.addClass(this.botonResponsiveF.nativeElement, 'indexIncrease');
      }else{
        this.render.removeClass(this.filResponsive.nativeElement, 'clasificacion-responsivaExpand');
        this.render.removeClass(this.botonResponsiveF.nativeElement, 'indexIncrease');

      }

      
  }

  expandFiltros(){
    const mR = this.filtrosRexpand.nativeElement.offsetHeight;
    if(mR == 0){
      this.render.addClass(this.filtrosRexpand.nativeElement, 'filtrosExpExpand')
    }else{
      this.render.removeClass(this.filtrosRexpand.nativeElement, 'filtrosExpExpand');
    }
    
  }

}
