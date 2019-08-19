import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  userProfile: object = {
    name: "Grant",
    contact: "grant@grandcircus.co",
    bio:
      "I am pretty cool. I do a great job. I like to play Tetris. I am ok at Angular."
  };

  constructor(private router: Router) {}
  getUserProfile(): object {
    return this.userProfile;
  }
}
