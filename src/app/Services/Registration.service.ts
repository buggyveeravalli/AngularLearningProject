import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { RegisterUser } from '../Model/RegisterUser';
@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
 

  constructor(private http: HttpClient) { }

  createRegistration(data: any): Observable<any> {
    return this.http.post<any>('https://angularlearning-25a4a-default-rtdb.firebaseio.com/registrations.json', data);
  }
  getAllUsers(): Observable<RegisterUser[]> {
    return this.http.get<any>('https://angularlearning-25a4a-default-rtdb.firebaseio.com/registrations.json').pipe(
      map((res)=>{
        let tempArray:RegisterUser[]=[];
        for(let index in res){
          tempArray.push(
            new RegisterUser(
              res[index].firstName,
                res[index].lastName,
                res[index].gender,
                res[index].phoneNumber,
                res[index].email,
                res[index].address,
                res[index].city,
                res[index].pinCode,
                res[index].state,
                index
            )
          );
        }
        return tempArray;
      })
    );
     
  }
  deleteUser(id:string):Observable<any>{
    console.log("id = "+id);
    return this.http.delete('https://angularlearning-25a4a-default-rtdb.firebaseio.com/registrations/'+id+'.json');
  }
}