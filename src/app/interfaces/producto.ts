
export interface Productos {
    total:     number;
    productos: Producto[];
}

export interface Producto {
    _id:         string;
    categoria:   string;
    descripcion: string;
    imagen:      string;
    nombre:      string;
    precio:      number;
    usuario:     Usuario;
    fecha:       Date;
}

export interface Usuario {
    _id:   string;
    email: string;
}
