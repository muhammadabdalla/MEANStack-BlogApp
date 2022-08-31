export class User{
  constructor(
    public id:number,
    public name:string,
    public username:string,
    public email:string,
    public address:{
                     street:string,
                     suit:string,
                     city:string,
                     zipcode:string,
                     get:{
                           lat:string
                         }
                   },
    public phone:string,


    ){}
}
