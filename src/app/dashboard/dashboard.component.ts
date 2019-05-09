import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { TourService } from 'ngx-tour-md-menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private tourService: TourService) { }

  ngOnInit(): void {
    this.getHeroes();
    setTimeout(()=> {
      this.tourService.initialize([{
        anchorId: 'primeiro-p-nav',
        content: 'Essa é a barra de navegação do Tour of Heroes',
        title: 'Barra de Navegação',
        route: 'dashboard'
      }, 
      {
        anchorId: 'segundo-topHeroes',
        content: 'Aqui fica a lista dos melhores Heróis!',
        title: 'Top Heroes',
        route: 'dashboard',
        enableBackdrop: true
      },
      {
        anchorId: 'terceiro-messages',
        content: 'Essas são os logs do sistema!',
        title: 'Messages',
        enableBackdrop: true
      },
      {
        anchorId: 'quarto-listaHerois',
        content: 'Aqui está a lista de todos os heróis do app!',
        title: 'Nossos heróis',
        route: 'heroes',
      },
      {
        anchorId: 'quinto-adicionaHeroe',
        content: 'Aqui você pode criar um novo herói!',
        title: 'Adicionar Herói',
        route: 'heroes',
        enableBackdrop: true
      }
    ]);

      //this.tourService.start();
    }, 3000);
  }

  onStartTour(){
    this.tourService.start();
  }


  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
