import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert/alert.component";
import {LoadingSpinnerComponent} from "./loading-spiner/loading-spinner.component";
import {PlaceholderDirective} from "./placeholder/placeholder.directive";
import {DropdownDirective} from "./dropdown.directive";
import {LoggingService} from "../logging.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations:[
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [CommonModule],
  exports:[
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [AlertComponent],
  providers:[LoggingService]
})
export class SharedModule{}
