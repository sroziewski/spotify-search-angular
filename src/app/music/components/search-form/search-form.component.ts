import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AsyncValidatorFn, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { distinctUntilChanged, filter, throttle, debounceTime, withLatestFrom } from 'rxjs/operators';
import { fillProperties } from '@angular/core/src/util/property';
import { Observable, Observer } from 'rxjs';
import { calcBindingFlags } from '@angular/core/src/view/util';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  queryForm: FormGroup
  @Input()
  set query(value){
    this.queryForm.get('query')!.setValue(value,{
      emitEvent: false, // nie emituj na onChange, chcemy tylko ustawic wartosc
      onlySelf: true, // nie wykonuj walidacji na rodzicach, tylko na samym elemencie
    });
  }

  constructor() {

    const censor = (badword: string): ValidatorFn =>
      (control: AbstractControl): ValidationErrors | null => {
        const hasError = (control.value as string).includes('batman')
        return hasError ? {
          censor: 'batman'
        } : null;
      }

    const asyncCensor = (badword: string): AsyncValidatorFn =>
      (control: AbstractControl): Observable<ValidationErrors> => {
        return Observable.create((observer: Observer<ValidationErrors | null>) => {
          const handler = setTimeout(() => {
            const hasError = (control.value as string).includes('batman');
            observer.next(
              hasError
                ? {
                  censor: { badword }
                }
                : null
            );
            observer.complete(); // gdyby sie nie konczyl tu jest spoko bo jest complete, to by zyl do konca swiata np ;)
          }, 1000);
          return () => {
            clearTimeout(handler)
          }
        });
      }
    this.queryForm = new FormGroup({
      query: new FormControl("",
        [Validators.required,
        Validators.minLength(3)],
        [asyncCensor("batman")]
      )
    })
    console.log(this.queryForm);
    const value$ = this.queryForm.get("query")!.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(query => query.length >= 3)
      );
    const valid$ = this.queryForm.get("query")!.statusChanges
      .pipe(filter(status => status == "VALID"));

    const search$ = valid$.pipe(withLatestFrom(value$, (valid, value) => value))

    search$.subscribe(
      query => {
        this.search(query)
      }
    )
  }



  ngOnInit() {
  }

  @Output()
  queryChange = new EventEmitter<string>();

  search(query: string) {
    this.queryChange.emit(query);
  }

}
