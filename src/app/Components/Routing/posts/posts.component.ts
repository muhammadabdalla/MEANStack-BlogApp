import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(
    private MyService: DemoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  AllUsers: any;
  link: string = '';

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.MyService.getAllUsers().subscribe(
      (users) => {
        this.AllUsers = users;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete(id: number) {
    this.MyService.deleteUser(id).subscribe((response) => {
      this.router.navigateByUrl('/posts');
    });

    // this.resetPage();
  }

  // resetPage() {
  //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //   this.router.onSameUrlNavigation = 'reload';
  //   this.router.navigate(['/posts'], {
  //     relativeTo: this.route,
  //   });
  // }
}
