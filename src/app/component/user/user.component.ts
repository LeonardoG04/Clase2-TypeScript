import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userId: string = '';
  private sub!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((param: ParamMap) => {
      this.userId = param.get('id') || '';
    })
  }

  ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
  }

  irAConfiguracion(){
    this.router.navigate(['settings'], {relativeTo: this.route})
  }

}
