/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let popWelcome: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {

    WA.room.onEnterLayer('zoneWecome').subscribe(() => {
        popWelcome = WA.ui.openPopup("popupWelcome","It's ",[]);
    })

    WA.room.onLeaveLayer('zoneWecome').subscribe(closePopUp())


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (popWelcome !== undefined) {
        popWelcome.close();
        popWelcome = undefined;
    }
}

export {};
