const get = (url: string) => {
    return fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject({
                message: 'Bad Status', status: response.status
            });
        }
    })
    .catch(handleError);
}

const handleError = (error: any) => {
    // If Promise.reject is called in the then block
    if (error.message) {
        return Promise.reject(error)
    } else {
        return Promise.reject({
            message: 'Unknown DAO error'
        })
    }
}

const dao = {
    // getPayees: getPayees
    // ECMAScript
    get
};

export {dao};