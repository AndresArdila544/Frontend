const tokenKey = 'Easy-PC';

export function getAuthenticationToken(){
    return localStorage.getItem( tokenKey );
}

export function isAuthenticated(){
    var a=false;
    if(localStorage.getItem( tokenKey )!=="null" && localStorage.getItem( tokenKey )!==null){
        a=true
    }
    return a
}

export function getUser(){
    var a=localStorage.getItem( "user" );
    if(localStorage.getItem( "user" )===null){
        a="Invitado"
    }
    return a
}

export function setAuthenticationToken( token = '' ){
    return localStorage.setItem( tokenKey, token );
}
