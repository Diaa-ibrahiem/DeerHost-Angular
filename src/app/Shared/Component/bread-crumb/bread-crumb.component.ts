import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css'],
})
export class BreadCrumbComponent implements OnInit {
  Path: string;
  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.snapshot.url.forEach((a) => {
      this.Path = a.path;
    });
  }

  ngOnInit(): void {}
}
