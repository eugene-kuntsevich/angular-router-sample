import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {path: 'crisis-center', component: CrisisListComponent},
    {path: 'heroes', component: HeroListComponent},
    {path: '', redirectTo: '/heroes', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        )
    ],
    declarations: [
        AppComponent,
        HeroListComponent,
        CrisisListComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
