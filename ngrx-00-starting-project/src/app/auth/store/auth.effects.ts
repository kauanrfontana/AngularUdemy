import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as AuthActions from "./auth.actions";
import { EMPTY, catchError, map, of, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  authLogin = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((authData: AuthActions.LoginStart) => {
        return this.http
          .post<AuthResponseData>(
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
              environment.firebaseAPIKey,
            {
              email: authData.payload.email,
              password: authData.payload.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            map((resData) => {
              const expirationDate = new Date(
                new Date().getTime() + +resData.expiresIn * 1000
              );
              return new AuthActions.Login({
                  email: resData.email,
                  userId: resData.idToken,
                  token: resData.idToken,
                  expirationDate: expirationDate,
                })
              
            }),
            catchError((error) => {
              return EMPTY;
            })
          );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
//authLogin = createEffect(() => this.actions$.pipe(...));
