import {Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core";
import { DataStorageService } from "../share/data-storage.server";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{

  isAuthenticated = false;
  private userSub: Subscription;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user =>{
      this.isAuthenticated  = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
