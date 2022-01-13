import axios from "axios"
import { BASE_URL } from '../../const';
import { commands } from './commands';
import { getUrl } from './urlParams';

// Кастомный аксиос мутим)
const instance = axios.create({
    //Основной url по которому будем делать запросы
    baseURL: BASE_URL,
})

// 1-cmd это просто строка, там указывается какая команда будет выполняться
// 2-obj это объект в котором будут поля data, params, query
// 3-multipare это для того чтобы менять 'Content-Type': 'multipart/form-data',
export const API_REQUEST = async (cmd, obj, multipare) => {
  // commands мы импортируем от commands.js и динамически передаем туда cmd
  const comm = commands[cmd]
  // getURL - функция для работы с параметрами типа /:id
  const url = obj?.params ? getUrl(comm.url, obj.params) : comm.url
  const multipare_Content = !!multipare

  // все встыкаем по местам
  return await instance({
    method: comm.method,
    url,
    data: obj?.data,
    params: obj?.query,
    headers: multipare_Content 
    ?
      {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      } 
    :
      {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
  })
}