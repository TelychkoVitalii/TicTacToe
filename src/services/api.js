import axios from 'axios';

export default {
    fetchUsers() {
        const url = 'https://api.github.com/search/repositories?q=stars:>1+language:Java&sort=stars&order=desc&type=Repositories';
        return axios.get(url)
            .then(res => res.data.items);
    }
};