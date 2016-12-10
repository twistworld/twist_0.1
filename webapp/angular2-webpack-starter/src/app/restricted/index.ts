import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';
import { RestrictedComponent } from './restricted.component';
import { ArtistsComponent } from './artists/artists.component';
import { EventsComponent } from './events/events.component';
import { FriendsComponent } from './friends/friends.component';

import { restrictedRouting } from './restricted.routes';

@NgModule({
    declarations: [
        RestrictedComponent,
        NavbarComponent,
        ArtistsComponent,
        EventsComponent,
        FriendsComponent
    ],
    exports: [
        RestrictedComponent,
        NavbarComponent,
        ArtistsComponent,
        EventsComponent,
        FriendsComponent
    ],
    imports: [
        restrictedRouting,
        CommonModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
    ],
    providers: [
        // AuthGuard,
    ],
    bootstrap: [
        RestrictedComponent
    ],
})
export default class RestrictedModule {

}