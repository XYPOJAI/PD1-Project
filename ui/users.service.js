export function getUsersAsync(){
    return fetch('http://localhost:3000/users')
                .then(response => response.json())
                .catch(e=>console.error(e)); 
}

export function createUserAsync(data){

    let config = {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }; 
    return fetch('http://localhost:3000/users',config)
                .then(response => response.json())
                .catch(e=>console.error(e)); 
}
export function updateUserAsync(data){

    let config = {
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }; 
    return fetch('http://localhost:3000/users',config)
                .then(response => response.json())
                .catch(e=>console.error(e)); 
}