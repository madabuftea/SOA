import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'EventApp';
  route: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route = this.router.url;
  }

  isLogin() {
    const path = this.activatedRoute.snapshot['_routerState'].url;
    return (path=="/login") || (path=="/login#logout") || (!path);
  }
}
