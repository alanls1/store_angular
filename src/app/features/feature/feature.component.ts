import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../share/button/button.component';
import { TagsService } from '../../services/tags.service';
import { tags } from '../../../types/tags';

@Component({
  selector: 'app-feature',
  imports: [ButtonComponent],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
})
export class FeatureComponent implements OnInit {
  public tag: tags | undefined;

  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {
    this.tagsService.getOneTag().subscribe((data) => {
      this.tag = data;
    });
  }
}
