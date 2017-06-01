import {
  RECORD_TITLE
} from './mutation-types.js'

export default {
  // 记录当前页面title
  [RECORD_TITLE] (state, {
    titleData
  }) {
    state.titleData = titleData
  }
}
