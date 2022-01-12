export const createResultTable = (data) => {
    const fragment = document.createDocumentFragment();
    const table = document.createElement('table');
    table.className = 'resultTable';

    //Init Table Head Row
    const tHead = document.createElement('thead');
    const headTR = document.createElement('tr');
    for (let hVal of Object.keys(data[0])) {
        const th = document.createElement('th');
        th.textContent = hVal;
        headTR.appendChild(th);
    }
    tHead.appendChild(headTR);
    table.appendChild(tHead);

    //Fill Table Data Rows
    const tBody = document.createElement('tbody');
    for (let obj of data) {
        const bodyTR = document.createElement('tr');
        for (let objVal of Object.keys(obj)) {
            const td = document.createElement('td');
            td.textContent = obj[objVal];
            bodyTR.appendChild(td);
        }
        tBody.appendChild(bodyTR);
    }
    table.appendChild(tBody);

    fragment.appendChild(table);
    return fragment;
}


export const getInputValueById = id => {
    try {
        return document.getElementById(id).value;
    } catch (error) {
        return undefined;
    }
}

export const appendChildToElement = (id, child) => {
    try {
        return document.getElementById(id).appendChild(child);
    } catch (error) {
        return undefined;
    }
}

export const clearFormResult = () => {
    try {
        return document.getElementById('results').innerHTML = '';
    } catch (error) {
        return undefined;
    }
}