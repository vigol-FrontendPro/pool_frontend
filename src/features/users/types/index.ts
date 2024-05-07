export interface User{

    //поля должны быть идентичны тем что приходят с бека
    id:number
    firstName:string
    lastName:string
    email:string
    role:string

}

export interface UserState{
    userList:User[]
}