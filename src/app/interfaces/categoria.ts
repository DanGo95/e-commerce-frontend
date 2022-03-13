export interface Categoria {
    _id:     string;
    nombre:  string;
    usuario: Usuario;
    __v:     number;
}

export interface Usuario {
    email: string;
    uid:   string;
}
