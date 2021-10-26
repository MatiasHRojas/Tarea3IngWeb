export interface Noticias {
    id:number;
    title:string;
    content:string;
    abstract:string;
    img:string;
    author:string;
    date:string;
    idCategoria:number;
    destacado:boolean;
}

export let Contenidos:Array<Noticias>=[{
    id:1,
    title:"El juego de Calamar se convierte en la serie más visitada de Netflix",
    content:"Nam vestibulum, ipsum sollicitudin pellentesque dictum, orci elit imperdiet urna, ut tincidunt ante risus sit amet sapien. Nullam lectus ipsum, convallis a magna sodales, rutrum volutpat sem. Duis pulvinar tempus erat eu blandit. Suspendisse interdum mauris nec imperdiet scelerisque. Nam pulvinar tempor interdum. Vivamus tortor elit, condimentum a rutrum ut, tincidunt eu odio. Morbi id ipsum sem. Donec ultricies mi metus. Donec in elit vulputate nisi efficitur vehicula. Nullam posuere mollis urna et ornare. Praesent luctus turpis a elit consectetur convallis. Vivamus semper lectus non ligula euismod, in dapibus diam congue. Fusce non leo vitae purus ullamcorper sodales. Sed faucibus, sapien sit amet posuere faucibus, ligula purus convallis turpis, sed feugiat sem felis eu ligula. Fusce nisl mi, pulvinar nec purus nec, consectetur luctus sapien. Integer cursus magna nibh, et faucibus sem gravida eget. Duis ut urna auctor, tempus massa porttitor, sollicitudin magna. Donec nec ultrices ipsum. Pellentesque blandit pulvinar elementum",
    abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim nunc, pharetra sit amet risus in, vestibulum venenatis diam. Proin blandit lorem erat, vitae facilisis risus luctus vitae. Suspendisse facilisis elit eu mauris consequat consequat.",
    img:"1.jpg",
    author:"Nombre Apellido",
    date:"12/11/2021",
    idCategoria:1,
    destacado:true
},{
    id:2,
    title:"Murió el rinoceronte más viejo",
    content:"Nam vestibulum, ipsum sollicitudin pellentesque dictum, orci elit imperdiet urna, ut tincidunt ante risus sit amet sapien. Nullam lectus ipsum, convallis a magna sodales, rutrum volutpat sem. Duis pulvinar tempus erat eu blandit. Suspendisse interdum mauris nec imperdiet scelerisque. Nam pulvinar tempor interdum. Vivamus tortor elit, condimentum a rutrum ut, tincidunt eu odio. Morbi id ipsum sem. Donec ultricies mi metus. Donec in elit vulputate nisi efficitur vehicula. Nullam posuere mollis urna et ornare. Praesent luctus turpis a elit consectetur convallis. Vivamus semper lectus non ligula euismod, in dapibus diam congue. Fusce non leo vitae purus ullamcorper sodales. Sed faucibus, sapien sit amet posuere faucibus, ligula purus convallis turpis, sed feugiat sem felis eu ligula. Fusce nisl mi, pulvinar nec purus nec, consectetur luctus sapien. Integer cursus magna nibh, et faucibus sem gravida eget. Duis ut urna auctor, tempus massa porttitor, sollicitudin magna. Donec nec ultrices ipsum. Pellentesque blandit pulvinar elementum",
    abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim nunc, pharetra sit amet risus in, vestibulum venenatis diam. Proin blandit lorem erat, vitae facilisis risus luctus vitae. Suspendisse facilisis elit eu mauris consequat consequat.",
    img:"2.jpg",
    author:"Nombre Apellido",
    date:"12/11/2021",
    idCategoria:2,
    destacado:true
},{
    id:3,
    title:"Ciclismo - El regreso de Chris Froome",
    content:"Nam vestibulum, ipsum sollicitudin pellentesque dictum, orci elit imperdiet urna, ut tincidunt ante risus sit amet sapien. Nullam lectus ipsum, convallis a magna sodales, rutrum volutpat sem. Duis pulvinar tempus erat eu blandit. Suspendisse interdum mauris nec imperdiet scelerisque. Nam pulvinar tempor interdum. Vivamus tortor elit, condimentum a rutrum ut, tincidunt eu odio. Morbi id ipsum sem. Donec ultricies mi metus. Donec in elit vulputate nisi efficitur vehicula. Nullam posuere mollis urna et ornare. Praesent luctus turpis a elit consectetur convallis. Vivamus semper lectus non ligula euismod, in dapibus diam congue. Fusce non leo vitae purus ullamcorper sodales. Sed faucibus, sapien sit amet posuere faucibus, ligula purus convallis turpis, sed feugiat sem felis eu ligula. Fusce nisl mi, pulvinar nec purus nec, consectetur luctus sapien. Integer cursus magna nibh, et faucibus sem gravida eget. Duis ut urna auctor, tempus massa porttitor, sollicitudin magna. Donec nec ultrices ipsum. Pellentesque blandit pulvinar elementum",
    abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim nunc, pharetra sit amet risus in, vestibulum venenatis diam. Proin blandit lorem erat, vitae facilisis risus luctus vitae. Suspendisse facilisis elit eu mauris consequat consequat.",
    img:"3.jpg",
    author:"Nombre Apellido",
    date:"12/11/2021",
    idCategoria:3,
    destacado:true
},{
    id:4,
    title:"Noticia 4",
    content:"Nam vestibulum, ipsum sollicitudin pellentesque dictum, orci elit imperdiet urna, ut tincidunt ante risus sit amet sapien. Nullam lectus ipsum, convallis a magna sodales, rutrum volutpat sem. Duis pulvinar tempus erat eu blandit. Suspendisse interdum mauris nec imperdiet scelerisque. Nam pulvinar tempor interdum. Vivamus tortor elit, condimentum a rutrum ut, tincidunt eu odio. Morbi id ipsum sem. Donec ultricies mi metus. Donec in elit vulputate nisi efficitur vehicula. Nullam posuere mollis urna et ornare. Praesent luctus turpis a elit consectetur convallis. Vivamus semper lectus non ligula euismod, in dapibus diam congue. Fusce non leo vitae purus ullamcorper sodales. Sed faucibus, sapien sit amet posuere faucibus, ligula purus convallis turpis, sed feugiat sem felis eu ligula. Fusce nisl mi, pulvinar nec purus nec, consectetur luctus sapien. Integer cursus magna nibh, et faucibus sem gravida eget. Duis ut urna auctor, tempus massa porttitor, sollicitudin magna. Donec nec ultrices ipsum. Pellentesque blandit pulvinar elementum",
    abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim nunc, pharetra sit amet risus in, vestibulum venenatis diam.",
    img:"4.jpg",
    author:"Nombre Apellido",
    date:"12/11/2021",
    idCategoria:4,
    destacado:false
},{
    id:5,
    title:"Noticia 5",
    content:"Nam vestibulum, ipsum sollicitudin pellentesque dictum, orci elit imperdiet urna, ut tincidunt ante risus sit amet sapien. Nullam lectus ipsum, convallis a magna sodales, rutrum volutpat sem. Duis pulvinar tempus erat eu blandit. Suspendisse interdum mauris nec imperdiet scelerisque. Nam pulvinar tempor interdum. Vivamus tortor elit, condimentum a rutrum ut, tincidunt eu odio. Morbi id ipsum sem. Donec ultricies mi metus. Donec in elit vulputate nisi efficitur vehicula. Nullam posuere mollis urna et ornare. Praesent luctus turpis a elit consectetur convallis. Vivamus semper lectus non ligula euismod, in dapibus diam congue. Fusce non leo vitae purus ullamcorper sodales. Sed faucibus, sapien sit amet posuere faucibus, ligula purus convallis turpis, sed feugiat sem felis eu ligula. Fusce nisl mi, pulvinar nec purus nec, consectetur luctus sapien. Integer cursus magna nibh, et faucibus sem gravida eget. Duis ut urna auctor, tempus massa porttitor, sollicitudin magna. Donec nec ultrices ipsum. Pellentesque blandit pulvinar elementum",
    abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim nunc, pharetra sit amet risus in, vestibulum venenatis diam.",
    img:"5.jpg",
    author:"Nombre Apellido",
    date:"12/11/2021",
    idCategoria:5,
    destacado:false
},{
    id:6,
    title:"Noticia 6",
    content:"Nam vestibulum, ipsum sollicitudin pellentesque dictum, orci elit imperdiet urna, ut tincidunt ante risus sit amet sapien. Nullam lectus ipsum, convallis a magna sodales, rutrum volutpat sem. Duis pulvinar tempus erat eu blandit. Suspendisse interdum mauris nec imperdiet scelerisque. Nam pulvinar tempor interdum. Vivamus tortor elit, condimentum a rutrum ut, tincidunt eu odio. Morbi id ipsum sem. Donec ultricies mi metus. Donec in elit vulputate nisi efficitur vehicula. Nullam posuere mollis urna et ornare. Praesent luctus turpis a elit consectetur convallis. Vivamus semper lectus non ligula euismod, in dapibus diam congue. Fusce non leo vitae purus ullamcorper sodales. Sed faucibus, sapien sit amet posuere faucibus, ligula purus convallis turpis, sed feugiat sem felis eu ligula. Fusce nisl mi, pulvinar nec purus nec, consectetur luctus sapien. Integer cursus magna nibh, et faucibus sem gravida eget. Duis ut urna auctor, tempus massa porttitor, sollicitudin magna. Donec nec ultrices ipsum. Pellentesque blandit pulvinar elementum",
    abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim nunc, pharetra sit amet risus in, vestibulum venenatis diam.",
    img:"6.jpg",
    author:"Nombre Apellido",
    date:"12/11/2021",
    idCategoria:6,
    destacado:false
},{
    id:7,
    title:"Noticia 7",
    content:"Nam vestibulum, ipsum sollicitudin pellentesque dictum, orci elit imperdiet urna, ut tincidunt ante risus sit amet sapien. Nullam lectus ipsum, convallis a magna sodales, rutrum volutpat sem. Duis pulvinar tempus erat eu blandit. Suspendisse interdum mauris nec imperdiet scelerisque. Nam pulvinar tempor interdum. Vivamus tortor elit, condimentum a rutrum ut, tincidunt eu odio. Morbi id ipsum sem. Donec ultricies mi metus. Donec in elit vulputate nisi efficitur vehicula. Nullam posuere mollis urna et ornare. Praesent luctus turpis a elit consectetur convallis. Vivamus semper lectus non ligula euismod, in dapibus diam congue. Fusce non leo vitae purus ullamcorper sodales. Sed faucibus, sapien sit amet posuere faucibus, ligula purus convallis turpis, sed feugiat sem felis eu ligula. Fusce nisl mi, pulvinar nec purus nec, consectetur luctus sapien. Integer cursus magna nibh, et faucibus sem gravida eget. Duis ut urna auctor, tempus massa porttitor, sollicitudin magna. Donec nec ultrices ipsum. Pellentesque blandit pulvinar elementum",
    abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim nunc, pharetra sit amet risus in, vestibulum venenatis diam.",
    img:"7.jpg",
    author:"Nombre Apellido",
    date:"12/11/2021",
    idCategoria:1,
    destacado:false
},{
    id:8,
    title:"Noticia 8",
    content:"Nam vestibulum, ipsum sollicitudin pellentesque dictum, orci elit imperdiet urna, ut tincidunt ante risus sit amet sapien. Nullam lectus ipsum, convallis a magna sodales, rutrum volutpat sem. Duis pulvinar tempus erat eu blandit. Suspendisse interdum mauris nec imperdiet scelerisque. Nam pulvinar tempor interdum. Vivamus tortor elit, condimentum a rutrum ut, tincidunt eu odio. Morbi id ipsum sem. Donec ultricies mi metus. Donec in elit vulputate nisi efficitur vehicula. Nullam posuere mollis urna et ornare. Praesent luctus turpis a elit consectetur convallis. Vivamus semper lectus non ligula euismod, in dapibus diam congue. Fusce non leo vitae purus ullamcorper sodales. Sed faucibus, sapien sit amet posuere faucibus, ligula purus convallis turpis, sed feugiat sem felis eu ligula. Fusce nisl mi, pulvinar nec purus nec, consectetur luctus sapien. Integer cursus magna nibh, et faucibus sem gravida eget. Duis ut urna auctor, tempus massa porttitor, sollicitudin magna. Donec nec ultrices ipsum. Pellentesque blandit pulvinar elementum",
    abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim nunc, pharetra sit amet risus in, vestibulum venenatis diam.",
    img:"4.jpg",
    author:"Nombre Apellido",
    date:"12/11/2021",
    idCategoria:5,
    destacado:false
},{
    id:9,
    title:"Noticia 9",
    content:"Nam vestibulum, ipsum sollicitudin pellentesque dictum, orci elit imperdiet urna, ut tincidunt ante risus sit amet sapien. Nullam lectus ipsum, convallis a magna sodales, rutrum volutpat sem. Duis pulvinar tempus erat eu blandit. Suspendisse interdum mauris nec imperdiet scelerisque. Nam pulvinar tempor interdum. Vivamus tortor elit, condimentum a rutrum ut, tincidunt eu odio. Morbi id ipsum sem. Donec ultricies mi metus. Donec in elit vulputate nisi efficitur vehicula. Nullam posuere mollis urna et ornare. Praesent luctus turpis a elit consectetur convallis. Vivamus semper lectus non ligula euismod, in dapibus diam congue. Fusce non leo vitae purus ullamcorper sodales. Sed faucibus, sapien sit amet posuere faucibus, ligula purus convallis turpis, sed feugiat sem felis eu ligula. Fusce nisl mi, pulvinar nec purus nec, consectetur luctus sapien. Integer cursus magna nibh, et faucibus sem gravida eget. Duis ut urna auctor, tempus massa porttitor, sollicitudin magna. Donec nec ultrices ipsum. Pellentesque blandit pulvinar elementum",
    abstract:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim nunc, pharetra sit amet risus in, vestibulum venenatis diam. Proin blandit lorem erat, vitae facilisis risus luctus vitae. Suspendisse facilisis elit eu mauris consequat consequat.",
    img:"2.jpg",
    author:"Nombre Apellido",
    date:"12/11/2021",
    idCategoria:4,
    destacado:true
}];