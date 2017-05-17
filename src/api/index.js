import axios from 'axios'
import {
  baseDataUrl,
  listDataUrl,
  picDetailDataUrl
} from './resource'

export default {
  getBaseData () {
    return axios.get(baseDataUrl)
  },
  getListData () {
    return axios.get(listDataUrl)
  },
  getPicDetailData () {
    return axios.get(picDetailDataUrl)
  }
}
