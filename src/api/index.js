import axios from 'axios'
import {
  timeLineData
} from './resource'

export default {
  getTimeLineData () {
    return axios.get(timeLineData)
  }
}
