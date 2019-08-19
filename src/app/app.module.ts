import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditComponent } from "./edit/edit.component";
import { ProfileService } from "./profile.service";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "profile-path", component: ProfileComponent },
  { path: "edit-path", component: EditComponent }
];

@NgModule({
  declarations: [AppComponent, ProfileComponent, EditComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
