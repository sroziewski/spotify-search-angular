import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  Validator,
  ValidationErrors,
  AsyncValidatorFn,
  AsyncValidator,
  NgControlStatus
} from "@angular/forms";
import {
  distinctUntilChanged,
  filter,
  debounceTime,
  combineLatest,
  withLatestFrom
} from "rxjs/operators";
import { Observable, Observer } from "rxjs";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"]
})
export class SearchFormComponent implements OnInit {
 
 
  @Input()
  set query(value: string) {
    this.queryForm.get("query")!.setValue(value, {
      emitEvent: false,
      onlySelf: true,
    });
  }

  queryForm: FormGroup;

  constructor() {
    const censor = (badword: string): ValidatorFn =>
      //
      (control: AbstractControl): ValidationErrors | null => {
        //
        const hasError = (control.value as string).includes(badword);

        return hasError
          ? {
              censor: { badword }
            }
          : null;
      };

    const asyncCensor = (badword: string): AsyncValidatorFn => (
      control: AbstractControl
    ): Observable<ValidationErrors | null> => {
      //
      // return this.http.post(/validate,value).pipe(map(resp => errors))

      return Observable.create(
        (observer: Observer<ValidationErrors | null>) => {
          //
          const handler = setTimeout(() => {
            const hasError = (control.value as string).includes(badword);

            observer.next(
              hasError
                ? {
                    censor: { badword }
                  }
                : null
            );
            observer.complete();
          }, 2000);

          // onUnsubscribe
          return () => {
            clearTimeout(handler);
          };
        }
      );
    };

    this.queryForm = new FormGroup({
      query: new FormControl(
        "",
        [Validators.required, Validators.minLength(3) /* , censor("batman") */],
        [asyncCensor("batman")]
      )
    });

    // console.log(this.queryForm);
    ///

    const value$ = this.queryForm.get("query")!.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter((query: string) => query.length >= 3)
    );

    const valid$ = this.queryForm
      .get("query")!
      .statusChanges.pipe(filter(status => status === "VALID"));

    const search$ = valid$.pipe(
      withLatestFrom(value$, (valid, value) => value)
    );

    search$.subscribe(query => {
      this.search(query);
    });
  }

  ngOnInit() {}

  @Output()
  queryChange = new EventEmitter<string>();

  search(query: string) {
    this.queryChange.emit(query);
  }
}
