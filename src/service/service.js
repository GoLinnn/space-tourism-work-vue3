import axios from 'axios'
// 用axios访问本地db.json文件
export default {
    async getData(view) {
        const res = await axios.get('db.json')
        return res.data[view]
    }
}
