import queryString from 'query-string';

export const getProducts = sortBy => {
    return fetch(`http://localhost:5000/api/products?sortBy=${sortBy}&order=desc&limit=6`,{
        method: "GET"
    })
    .then (response => {
        return response.json();
    })
      .catch(err => console.log(err)) 
};


export const getCategories = () => {
    return fetch(`http://localhost:5000/api/categories`, {
        method: "GET"
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit, skip, filters
    };
    return fetch(`http://localhost:5000/api/products/by/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then (res => {
        return res.json();
    })
    .catch(err => {
        console.log(err);
    })
};

export const list = params => {
    const query = queryString.stringify(params)
    return fetch(`http://localhost:5000/api/products/search?${query}`, {
        method: "GET"
    }) .then(response => {
          return response.json();
    }) .catch(err => console.log(err));
};

export const read = (productId) => {
    return fetch(`http://localhost:5000/api/product/${productId}`, {
        method: "GET"
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};

export const listRelated = (productId) => {
    return fetch(`http://localhost:5000/api/products/related/${productId}`, {
        method: "GET"
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};
