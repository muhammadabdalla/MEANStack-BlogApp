import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  userID = '';
  user: any;
  constructor(
    myActivated: ActivatedRoute,
    private MyService: DemoService,
    private router: Router
  ) {
    this.userID = myActivated.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.MyService.getUserByID(this.userID).subscribe((data) => {
      this.user = data;
    });
  }

  update(userId: number, id: number) {
    this.router.navigateByUrl(`/posts/update/${userId}/${id}`);
  }
}
