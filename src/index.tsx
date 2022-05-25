import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models:{
    transaction: Model
  },
  
  // Vamos deixar dados salvos no banco de dados
  // E sempre colocar o nome da tabela no pural
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 09:00:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api' // Todas as minhas rotas vão está dentro da api - ttp://localhost:3000/*api*/transactions
    
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    //schema é o banco de dados
    this.post('/transactions', (schema,request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);