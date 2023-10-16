import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key : '212d557c495e430fb04029ef88412302'
    }
})