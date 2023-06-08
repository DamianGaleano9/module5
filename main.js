// class DevCampError extends Error {
//     constructor(msg = 'An Error ocurred', ...params) {
//         super(...params);


//         this.msg = msg;
//     }
// }


// function siteComponent(func) {
//     return func();
// }


// widget = () => {
//     return '<div>Hy Damian</div>'
// }


// try {
//     console.log(siteComponent(widget));
// } catch (e) {
//     throw new DevCampError('DevCampError', e)
//     console.log('An Error ocurred')


// }



import XMLHttpRequest from 'xhr2'

var request = new XMLHttpRequest();

request.open('GET', 'https://api.dailysmarty.com/posts', true);

request.onload = function () {
    if (request.status > 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        console.log(data);
    } else {
        throw new ApiError('ApiError', `An Api Error ocurred with a status code of ${request.status}`);
    }
};

console.log(request.send());