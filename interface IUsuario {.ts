interface IUsuario {
    id: String;
    email: String;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario) {
if(usuario.cargo) {
    //rediconar(usuario,cargo);
    }

    // redirecionar para a area do usuario
}