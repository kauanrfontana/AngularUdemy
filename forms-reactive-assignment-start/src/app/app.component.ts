import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dropdownOptions = ['Stable', 'Critical', 'Finished'];
  sgForm: FormGroup;

  ngOnInit(): void {
    this.sgForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbiddenNameAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'dropdown': new FormControl('Critical')
    })
  }

  
  /* forbiddenName(controls: FormControl): {[s: string]: boolean} {
    if (controls.value === 'Test'){
      return { 'projectNameIsForbidden': true };
    } else {
      return null; 
    }
  } */
  
  forbiddenNameAsync(controls: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(
          () => {
            if (controls.value === 'Test'){
              resolve({'projectNameIsForbidden': true});
            } else {
              resolve(null); 
            }
          }, 1500
          )
        }
        );
        return promise;
        
      }

      onSubmit(){
        console.log(this.sgForm);
      }
      
    }
    