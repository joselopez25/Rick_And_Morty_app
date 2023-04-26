const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", ()=>{

  describe("GET /rickandmorty/character/:id", ()=>{

    it("Responde con status: 200",async ()=>{
      await agent.get('/rickandmorty/character/1').expect(200);
    })

    it( 'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
      const {body} = await agent.get('/rickandmorty/character/1')
      expect(body).toHaveProperty("id")
      expect(body).toHaveProperty("name")
      expect(body).toHaveProperty("species")
      expect(body).toHaveProperty("gender")
      expect(body).toHaveProperty("status")
      expect(body).toHaveProperty("origin")
      expect(body).toHaveProperty("image")
    })

    it('Si hay un error responde con status: 500' , async ()=>{
      await agent.get('/rickandmorty/character/9000').expect(500);
    })

  })

  describe("GET /rickandmorty/login", ()=>{
    it("Validacion de email y pass TRUE", async ()=>{
      const {body} = await agent.get("/rickandmorty/login/?email=jose_lopez25@outlook.com&pass=jose25")
      expect(body).toEqual({access: true})
    })

    it("Validacion de email y pass FALSE", async ()=>{
      const {body} = await agent.get("/rickandmorty/login/?email=jose_lopez25@outlooafk.com&pass=joseaa25")
      expect(body).toEqual({access: false})
    })

  })

  describe("POST /rickandmorty/fav", ()=>{
    it("Lo que envíes por body debe ser devuelto en un arreglo", async ()=>{
      const {body} = await agent.post("/rickandmorty/fav").send({id: "10", name: "JOSE"})
      expect(body).toEqual([{id: "10", name: "JOSE"}])
    })
    it("Si vuelves a enviar un nuevo elemento por body, incluye un elemento enviado previamente", async ()=>{
      const {body} = await agent.post("/rickandmorty/fav").send({id: "100", name: "37a Grupo11"})
      expect(body).toEqual([{id: "10", name: "JOSE"}, {id: "100", name: "37a Grupo11"}])
    })
  })

  describe("DELETE /rickandmorty/fav/:id", ()=>{

    it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async ()=>{
      const {body} = await agent.delete('/rickandmorty/fav/2aa06');
      expect(body.length).toBe(2);
    });

    it("Si el ID enviado existe, debería eliminarlo de favoritos", async ()=>{
      const {body} = await agent.delete('/rickandmorty/fav/10');
      expect(body.length).toBe(1);
    });



  })

})