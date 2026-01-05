type status='pending'|'cancelled'|'delivered'

export interface Iproduct {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
}

// export interface IgenericResponse<T>{
//     status:'sucess'|'error';
//     message:string;
//     data :T

// }