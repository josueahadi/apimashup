import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  private data = {
    josueahadi: {
      age: 20,
      twitterFollowers: 160,
    }, 
    developedbyed: {
      age: 30,
      twitterFollowers: 66500
    }
  }; 

  constructor(private httpService: HttpService) {}

  getUser(params) {
    return this.httpService
      .get(`https://api.github.com/users/${params.username}`)
      .pipe(
        map((response) => ({
          ...this.data[params.username],
          githubFollowers: response.data.followers,
          publicRepos: response.data.public_repos,
          name: response.data.name,
          location: response.data.location,
          bio: response.data.bio,
          
        }))
      );
  }
}