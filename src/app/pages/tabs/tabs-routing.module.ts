import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        children: [
          {
            path: '',
            loadChildren: () => import('../films/films.module').then( m => m.FilmsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../film-details/film-details.module').then( m => m.FilmDetailsPageModule)
          }
        ]
      },
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: () => import('../people/people.module').then( m => m.PeoplePageModule)
          }
        ]
      },
      {
        path: 'planets',
        children: [
          {
            path: '',
            loadChildren: () => import('../planets/planets.module').then( m => m.PlanetsPageModule)
          }
        ]
      }
    ]
  },
  {
    path: 'species',
    children: [
      {
        path: '',
        loadChildren: () => import('../species/species.module').then( m => m.SpeciesPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('../specimen-details/specimen-details.module').then( m => m.SpecimenDetailsPageModule)
      }
    ]
},
{
  path: 'spaceships',
  children: [
    {
      path: '',
      loadChildren: () => import('../spaceships/spaceships.module').then( m => m.SpaceshipsPageModule)
    },
    {
      path: ':id',
      loadChildren: () => import('../spaceship-details/spaceship-details.module').then( m => m.SpaceshipDetailsPageModule)
    }
  ]
},
  {
    path: '',
    redirectTo: '/tabs/films',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
