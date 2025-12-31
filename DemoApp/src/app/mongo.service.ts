// src/app/mongo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoService {
  // 8080 and 8081 are the node ports of which SVCs were added for running with minikube with port forwarding. Normally due to clusterIps which are added 'localhost' should be sufficient.
private mongoUrl = 'http://localhost:8080/mongodbapi';
private mysqlUrl = 'http://localhost:8081/mysqlapi';

  constructor(private http: HttpClient) {}

  getMongoData(): Observable<any> {
    return this.http.get(this.mongoUrl, { responseType: 'text' as 'json'});
  }

  getMysqlData(): Observable<any> {
    return this.http.get(this.mysqlUrl, { responseType: 'text' as 'json'});
  }
}
