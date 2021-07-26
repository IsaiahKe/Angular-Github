export interface IUser{
name:string,
avatar_url:string,
public_repos:string,
followers:number,
following:number,
bio:string,
created_at:string
}
export interface IRepo{
html_url:string,
url:string,
homepage:string,
created_at:string,
description:string,
updated_at:string,
clone:string
}