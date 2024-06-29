import axios from 'axios';
import { createClient } from 'pexels';

const client = createClient('gI4luDWUt4yAfxofyKcnArcfDFbaH3hs0l6cd0eQzUaN0QmETheKEpmx');

const Axios = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
        Authorization: `gI4luDWUt4yAfxofyKcnArcfDFbaH3hs0l6cd0eQzUaN0QmETheKEpmx`
    }
})

export default Axios