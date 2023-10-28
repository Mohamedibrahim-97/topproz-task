import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class RequestInterceptor implements HttpInterceptor {
    constructor() {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + (localStorage.getItem('userToken') || ''),
                'Content-Type': 'application/json'
            }
        })
        return next.handle(request)
    }
}