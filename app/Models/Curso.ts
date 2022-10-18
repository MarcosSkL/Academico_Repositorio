import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Disciplina from './Disciplina'

export default class Curso extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public nome: string

  @column()
  public duracao: string

  @column()
  public modalidade: number

  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
  @hasMany( ()=> Disciplina )
  public disciplinas: HasMany<typeof Disciplina> 

  

}
