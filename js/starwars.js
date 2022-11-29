const apiUrl = 'https://www.omniva.ee/locations.json'

async function getData() {
    const res = await fetch(apiUrl);

    if (!res.ok) {
        throw new Error('help me!');
    }
    
    return await res.json();
};
// console.log(getData());
async function getOut() {
    let city = [];

    const data = await getData();
    for (let key in data) {
        if ('LT' === data[key]['A0_NAME']) {
        //   console.log(data[key]['A2_NAME'])
            
            if (!city.includes(data[key]['A2_NAME'])) {
                city.push(data[key]['A2_NAME']);
            }
        }
    }

    for (let i = 0; i < city.length; i++) {
        console.log(city[i]);
    }
}
getOut();

