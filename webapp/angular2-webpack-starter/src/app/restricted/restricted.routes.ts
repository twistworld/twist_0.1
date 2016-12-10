import { Route, RouterModule, Routes } from '@angular/router';

import { RestrictedComponent } from './restricted.component';
import { ArtistsComponent } from './artists/artists.component';
import { EventsComponent } from './events/events.component';
import { FriendsComponent } from './friends/friends.component';

export const RESTRICTED_AREA_ROUTES: Routes = [
    {
        path: "",
        component: RestrictedComponent,
        children: [
            {
                path: 'artists',
                component: ArtistsComponent,
            },
            {
                path: 'events',
                component: EventsComponent,
            },
            {
                path: 'friends',
                component: FriendsComponent,
            },
        ]
    }
];

export const restrictedRouting = RouterModule.forChild(RESTRICTED_AREA_ROUTES)