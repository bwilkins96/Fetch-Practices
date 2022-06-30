export function getAllDogs() {
   return fetch("/dogs");
}

export function getDogNumberTwo() {
    return fetch("/dogs/2");
}

export function postNewDog() {
    let url = "/dogs";
    let options = {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams({
            'name': "Bailey",
            'age': "regal"
        })
    };

    return fetch(url, options);
}

export function postNewDogV2(name, age) {
    let url = "/dogs";
    let options = {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams({
            'name': name,
            'age': age
        })
    }

    return fetch(url, options);
}

export function deleteDog(id) {
    let url = `/dogs/${id}/delete`;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "AUTH": "ckyut5wau0000jyv5bsrud90y"
    },
        body: new URLSearchParams({"id": id})
    }

    return fetch(url, options);
}

//fetch(url, options)
