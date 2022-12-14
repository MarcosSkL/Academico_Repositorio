// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from 'App/Models/Semestre'

export default class SemestresController {
  index (){
    return Semestre.query().paginate(1)
  }
  store ({request}){
    const dados = request.only('nome', 'dataInicio', 'dataFim')
    return Semestre.createMany(dados)
  }
}