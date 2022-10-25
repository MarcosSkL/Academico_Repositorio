// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professor from 'App/Models/Professor'

export default class ProfessorsController {
  index (){
    return Professor.query().paginate(1)
  }
  store ({request}){
    const dados = request.only([
      'nome',
      'cpf',
      'matricula',
      'salario',
      'email',
      'telefone',
      'cep',
      'logradouro',
      'complemento',
      'numero',
      'bairro',
    ])
    return Professor.createMany(dados)
  }
  show( {request} ) {
    const id = request.param('id')
    return Professor.findOrFail(id)
  }

  async destroy( {request} ) {
    const id = request.param('id')
    const professores = await Professor.findOrFail(id)
    return professores.delete()
  }

  async update( {request} ) {
    const id = request.param('id')
    const professores = await Professor.findOrFail(id)
    const dados = request.only(['data', 'conteudo'])
    professores.merge(dados)
    return professores.save()

}
}