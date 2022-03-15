import { Component, OnInit } from '@angular/core';
import { IPost } from '../interface';
import { PostService } from "../PostService";

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
