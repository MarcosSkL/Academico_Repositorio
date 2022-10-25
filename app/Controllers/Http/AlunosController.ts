// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from 'App/Models/Aluno'

export default class AlunosController {
  index (){
    return Aluno.query().paginate(1)
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
    return Aluno.createMany(dados)
  }
  show( {request} ) {
    const id = request.param('id')
    return Aluno.findOrFail(id)
  }

  async destroy( {request} ) {
    const id = request.param('id')
    const alunos = await Aluno.findOrFail(id)
    return alunos.delete()
  }

  async update( {request} ) {
    const id = request.param('id')
    const alunos = await Aluno.findOrFail(id)
    const dados = request.only(['nome',
    'cpf',
    'matricula',
    'salario',
    'email',
    'telefone',
    'cep',
    'logradouro',
    'complemento',
    'numero',
    'bairro',])
    alunos.merge(dados)
    return alunos.save()

}
  
}