export interface RelojVariante {
  id: string;
  color: string;
  imagenes: string;
}

export interface Reloj {
  id: string;
  marca: string;
  nombre: string;
  slug: string;
  precio: number; 
  descripcion: string | null;
  imagen_url: string | null;
  etiqueta: string | null;
  activo: boolean;
  creado_en: string;
  variantes?: RelojVariante[];
}