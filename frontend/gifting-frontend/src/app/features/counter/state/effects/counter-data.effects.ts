import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ConsoleReporter } from "jasmine";
import { tap } from "rxjs";
import { CounterCommands } from "..actions/count-actions";

@Injectable()
export class CounterDataEffects {
    constructor(parameters) {

    }
}                                                                                                                                        