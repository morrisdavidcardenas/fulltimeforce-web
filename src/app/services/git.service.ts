import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { map, delay } from 'rxjs/operators';
import { GitCommitListModel } from 'app/models/git-commit-list.model';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor( private http: HttpClient ) { }

  getGitCommitList() {
    let url = environment.baseURL + 'gitHub/repos/morrisdavidcardenas/fulltimeforce-web/commits';
    return this.http.get(url)
    .pipe(
      map( this.formatDataGitCommitList ),
      delay(0)
    );
  }

  private formatDataGitCommitList( elementList: object ) {
    const gitCommitList: GitCommitListModel[] = [];
    Object.keys( elementList ).forEach( key => {
      const entity : GitCommitListModel = new GitCommitListModel();
      entity.id = elementList[key].node_id;
      entity.authorName = elementList[key].commit.author.name;
      entity.authorEmail = elementList[key].commit.author.email;
      entity.authorDate = elementList[key].commit.author.date;
      entity.message = elementList[key].commit.message;
      gitCommitList.push( entity );
    });
    return gitCommitList;
  }
}