/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let popComptoir1: any = undefined;
let popComptoir2: any = undefined;
let popBar: any = undefined;
let popNFT: any = undefined;
let popGate: any = undefined;


// Waiting for the API to be ready
WA.onInit().then(() => {


    WA.room.onEnterLayer('zoneComptoir1').subscribe(() => {
        popComptoir1 = WA.ui.openPopup("comptoir1Popup","Hello, you are rather tropical climate or Caribbean climate ?",
            [{
                label: "Tropical",
                className: "primary",
                callback: () => {
                    WA.nav.openCoWebSite('https://player.vimeo.com/video/680787827');
                }
            },
            {
                label: "Caribbean",
                className: "success",
                callback: () => {
                    WA.nav.openCoWebSite('https://player.vimeo.com/video/684568939/71107d1cc5');
                }
            }]
        );
    })
    WA.room.onEnterLayer('zoneComptoir2').subscribe(() => {
        popComptoir2 = WA.ui.openPopup("comptoir2Popup","Good morning, you are a beach or culture person?",[
            {
                label: "Beach",
                className: "primary",
                callback: () => {
                    WA.nav.openCoWebSite('https://vimeo.com/manage/videos/554125018/eed15f29a1');
                }
            },
            {
                label: "Culture",
                className: "success",
                callback: () => {
                    WA.nav.openCoWebSite('https://vimeo.com/435014076');
                }
            }
            ]);    })
    WA.room.onEnterLayer('zoneBar').subscribe(() => {
        popBar = WA.ui.openPopup("barPopup","You want to get high before you get in the air?",[
            {
                label: "NO",
                className: "primary",
                callback: () => {
                    WA.nav.openCoWebSite('https://www.youtube.com/watch?v=5YbjzztYbUo');
                }
            },
            {
                label: "YES",
                className: "success",
                callback: () => {
                    WA.nav.openCoWebSite('https://www.youtube.com/watch?v=5YbjzztYbUo');
                }
            }
        ]);
    })
    WA.room.onEnterLayer('zoneGate').subscribe(() => {
        popGate = WA.ui.openPopup("gatePopup","You want to know the secret life of your suitcase? We explain it all here!",[
            {
                label: "Watch",
                className: "primary",
                callback: () => {
                    WA.nav.openCoWebSite('https://vimeo.com/452151588');
                }
            }
        ]);
    })
    WA.room.onEnterLayer('zoneNFT').subscribe(() => {
        popNFT = WA.ui.openPopup("nftPopup","NFT supply in progress...stay tuned!",[]);
        console.log('zoneNFT');
    })

    WA.room.onLeaveLayer('zoneComptoir1').subscribe(closePopUp)
    WA.room.onLeaveLayer('zoneComptoir2').subscribe(closePopUp)
    WA.room.onLeaveLayer('zoneBar').subscribe(closePopUp)
    WA.room.onLeaveLayer('zoneNFT').subscribe(closePopUp)
    WA.room.onLeaveLayer('zoneGate').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (popComptoir1 !== undefined) {
        popComptoir1.close();
        popComptoir1 = undefined;
        WA.nav.closeCoWebsites();
    }
    if (popComptoir2 !== undefined) {
        popComptoir2.close();
        popComptoir2 = undefined;
    }
    if (popBar !== undefined) {
        popBar.close();
        popBar = undefined;
    }
    if (popNFT !== undefined) {
        popNFT.close();
        popNFT = undefined;
    }
    if (popGate !== undefined) {
        popGate.close();
        popGate = undefined;
    }
}

export {};
