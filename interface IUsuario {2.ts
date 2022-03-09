interface IUsuario {
    id: String;
    email: String;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if('cargo' in usuario) {
    }
}    