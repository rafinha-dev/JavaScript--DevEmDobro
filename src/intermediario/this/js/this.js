let usuario = {
    nome: 'Ricardo', 
    saudar: function(){
        console.log('this no contexto do metodo', this)

        console.log('this.name no contexto do metodo', this.nome)
    }
}
usuario.saudar()