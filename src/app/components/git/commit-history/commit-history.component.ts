import { Component, OnInit } from '@angular/core';
import { GitService } from 'app/services/git.service';
import { GitCommitListModel } from 'app/models/git-commit-list.model';

@Component({
  selector: 'git-commit-history',
  templateUrl: './commit-history.component.html',
  styleUrls: ['./commit-history.component.scss']
})
export class CommitHistoryComponent implements OnInit {

  dataSource: GitCommitListModel[] = [];
  displayedColumns: string[] = ['authorName', 'authorEmail', 'authorDate', 'message'];

  constructor( private gitService: GitService ) { }

  ngOnInit() {

  }
}
