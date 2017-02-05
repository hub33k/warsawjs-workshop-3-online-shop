export default function () {
    return {
        read: (key) => {
            let result = [];
            try {
                result = JSON.parse(localStorage.getItem(key));
            } catch(e) {
                console.log(e);
            }

            return result;
        },
        save: (key, data) => {
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
}
