import { Injectable } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario/UsuarioModel';


@Injectable()

export class Session {

    constructor() { }

     createSession(user: UsuarioModel) {
        localStorage.setItem('userQuintoAndar', JSON.stringify(user));
    }

    getSession() {
        let user = JSON.parse(localStorage.getItem('userQuintoAndar'));
        return user;
    }

    removeSession() {
        localStorage.removeItem('userQuintoAndar');
    }

    updateSession(user: UsuarioModel) {

        localStorage.removeItem('userQuintoAndar');

        localStorage.setItem('userQuintoAndar', JSON.stringify(user));

        let userSession = JSON.parse(localStorage.getItem('userQuintoAndar'));

        return userSession;
    }

    getCodUserSession() {
        let user = JSON.parse(localStorage.getItem('userQuintoAndar')) as UsuarioModel;
        return user.CodUser;
    }

    getUserSession() {
        let user = JSON.parse(localStorage.getItem('userQuintoAndar')) as UsuarioModel;
        return user
    }

    createSessionIPLogado(IP: string) {
        localStorage.removeItem('ipUserQuintoAndarLogado');
        localStorage.setItem('ipUserQuintoAndarLogado', IP);
    }

    getSessionIPLogado() {
        let IP = localStorage.getItem('ipUserQuintoAndarLogado');
        return IP;
    }



}