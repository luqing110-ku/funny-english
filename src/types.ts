export interface _id{
    _id?:string
}
export interface IStudent extends _id{
    key?:number;
    account:string
    password:string
    nickname:string
    age:number
    job:string
    hobby:string
    phone:number
}
export interface IAddVocabulary extends _id{
    word:string
    pronunciationAmerica:string
    pronunciationEnglish:string
    base64PNG:string[]
    base64JPG:string[]

}
export interface ISentence extends _id{
    sentence:string
}
    
