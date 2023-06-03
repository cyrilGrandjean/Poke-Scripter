/*  globals GM */

'use strict';

function executeFileContents(fileContents) {
    try {
        eval(fileContents);
    } catch (error) {
        console.error('Error executing file:', error);
    }
}

// @ts-ignore
if (GM.info.script.downloadURL) {
    // @ts-ignore
    GM.xmlhttpRequest({
        method: 'GET',
        // @ts-ignore
        url: GM.info.script.downloadURL,
        onload: function (response) {
            const fileContents = response.responseText;
            executeFileContents(fileContents);
        },
        onerror: function (error) {
            console.error('Error fetching file:', error);
        }
    });
}
