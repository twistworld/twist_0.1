import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MdSidenav } from '@angular/material';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.scss'],
})
export class RestrictedComponent {

  constructor(
    private router: Router,
  ) { }


}
