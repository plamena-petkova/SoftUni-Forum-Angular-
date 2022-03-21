import { Component, OnInit } from '@angular/core';
import { IPost } from '../../core/interface';
import { PostService } from "../../user/post.service";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  
  postList!: IPost[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {

    this.postService.loadPostList().subscribe(postList =>{
      this.postList = postList;
    })
  }

}
