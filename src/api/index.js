import axios from 'axios'
import {
  baseDataUrl,
  listDataUrl
} from './resource'

export default {
  getBaseData () {
    return axios.get(baseDataUrl)
  },
  getListData () {
    return axios.get(listDataUrl)
  }
}
