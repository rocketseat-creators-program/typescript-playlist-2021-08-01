import { log } from "./colors";

class GitUser {
  _userName = "";
  _repos = "";

  greeting() {
    return `User ${this._userName}, have ${this._repos} repositories.`;
  }

  get userName() {
    return this._userName;
  }
  set userName(name) {
    this._userName = name;
  }

  set repos(repos) {
    this._repos = repos;
  }

  get repos() {
    return this._repos;
  }
}

const gitUser = new GitUser();

log(gitUser.greeting());
