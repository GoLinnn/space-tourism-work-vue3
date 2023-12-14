import axios from 'axios'
// 用axios访问本地db.json文件
export default {
    getDate() {
        return axios.get('db.json')
    }
}