import { isValidUrl } from './validations'
import { createResultTable, getInputValueById, appendChildToElement, clearFormResult } from './utils'

const SERVER_URL = 'http://localhost:8081/checkArticle';

export const checkArticleByUrl = event => {
    event.preventDefault();

    const inputURL = getInputValueById('urlTxt');
    if (!isValidUrl(inputURL)) {
        alert('Please enter valid Url');
        return;
    }
    clearFormResult();
    document.getElementById('loading').removeAttribute('hidden');
    fetch(`${SERVER_URL}?url=${inputURL}`)
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('loading').setAttribute('hidden', '');
            if ([200, -1].includes(res.status)) {
                alert(res.msg);
            } else {
                appendChildToElement('results', createResultTable(res.data))
            }

        })
        .catch(error => {
            document.getElementById('loading').setAttribute('hidden', '');
            alert(`An error occurred, it might be the server is not running.\n${error}`);
        })
}