import { Component } from '@angular/core';

@Component({
  selector: 'app-client-component',
  templateUrl: './client-component.component.html',
  styleUrls: ['./client-component.component.css']
})
export class ClientComponentComponent {

  clientes = [
    {
      foto: "https://cdn-icons-png.flaticon.com/512/607/607451.png?w=826&t=st=1679280308~exp=1679280908~hmac=5a787684aa5d91f2d0c1b5e302eca4b220fb72758996a1eeb3d853e25ad39d61", 
      nome: "Lucas",
      sobre: "Cliente a 5 anos"  
    },

    {
      foto: "https://img.freepik.com/icones-gratis/homem_318-157578.jpg?t=st=1679257593~exp=1679258193~hmac=c852f3692873d7a0465e02fef3b71196b5c56d193e9f4ab24539ec5835f18f5b", 
      nome: "Joao",
      sobre: "Cliente a 3 anos"   
    },

    {
      foto: "https://img.freepik.com/vetores-gratis/avatar-mulher_23-2147501833.jpg?w=826&t=st=1679280302~exp=1679280902~hmac=dd2e41bc27f2259ab6bc51a221cdeb215f858091acca49391960735f2f150f3e", 
      nome: "Fernanda",
      sobre: "Cliente a 2 anos"   
    },

    {
      foto: "https://img.freepik.com/vetores-gratis/ilustracao-de-executiva_53876-5857.jpg?w=826&t=st=1679280317~exp=1679280917~hmac=dee8b735d9116dac99a46bd34ebac9e4052ea4aa6fc830cb21959ea3b3e452fd", 
      nome: "Clara",
      sobre: "Cliente a 1 ano"   
    }
    
  ]
}

