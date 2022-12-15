import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ConsoleReporter } from "jasmine";
import { tap } from "rxjs";
import { CounterCommands } from "..actions/count-actions";
import { CountState, initialState } from '../reducers/count-reducer';
import { z } from 'zod';

@Injectable()
export class CounterDataEffects {
    private readonly COUNT_DATA_KEY = 'count-data';
    private readonly CountDataSchema = z.object({
        current: z.number(),
        by: z.union([z.literal(1)])
    })
}                                                                                                                                        