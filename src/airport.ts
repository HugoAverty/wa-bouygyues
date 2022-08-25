/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let popComptoir1: any = undefined;
let popComptoir2: any = undefined;
let popBar: any = undefined;
let popNFT: any = undefined;
let popGate: any = undefined;
let popSecurity: any = undefined;

let websiteTropical: any = undefined;
let websiteCaribbean: any = undefined;
let websiteBeach: any = undefined;
let websiteCulture: any = undefined;
let websiteNO: any = undefined;
let websiteYES: any = undefined;
let websiteWatch: any = undefined;
let websiteSecurity: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {


    WA.room.onEnterLayer('zoneComptoir1').subscribe(() => {
        popComptoir1 = WA.ui.openPopup("comptoir1Popup","Hello, you are rather tropical climate or Caribbean climate ?",
            [{
                label: "Tropical",
                className: "primary",
                callback: async () => {
                    websiteTropical = await WA.nav.openCoWebSite('https://player.vimeo.com/video/680787827');
                }
            },
            {
                label: "Caribbean",
                className: "success",
                callback: async () => {
                    websiteCaribbean = await WA.nav.openCoWebSite('https://player.vimeo.com/video/684568939');
                }
            }]
        );
    })
    WA.room.onEnterLayer('zoneComptoir2').subscribe(() => {
        popComptoir2 = WA.ui.openPopup("comptoir2Popup","Good morning, you are a beach or culture person?",[
            {
                label: "Beach",
                className: "primary",
                callback: async () => {
                    websiteBeach = await WA.nav.openCoWebSite('https://player.vimeo.com/video/554125018');
                }
            },
            {
                label: "Culture",
                className: "success",
                callback: async () => {
                    websiteCulture = await WA.nav.openCoWebSite('https://player.vimeo.com/video/435014076');
                }
            }
            ]);    
    })
    WA.room.onEnterLayer('zoneBar').subscribe(() => {
        popBar = WA.ui.openPopup("barPopup","Hello, I’m Tom, want to travel back to the 80’s ?",[
            {
                label: "NO",
                className: "primary",
                callback: async () => {
                    closePopUp();
                }
            },
            {
                label: "YES",
                className: "success",
                callback: async () => {
                    websiteYES = await WA.nav.openCoWebSite('https://www.youtube.com/embed/5YbjzztYbUo');
                }
            }
        ]);
    })
    WA.room.onEnterLayer('zoneGate').subscribe(() => {
        popSecurity = WA.ui.openPopup("gatePopup","You want to know the secret life of your suitcase? We explain it all here!",[
            {
                label: "Watch",
                className: "primary",
                callback: async () => {
                    websiteWatch = await WA.nav.openCoWebSite('https://player.vimeo.com/video/452151588');
                }
            }
        ]);
    })
    WA.room.onEnterLayer('zoneSecurity').subscribe(() => {
        popSecurity = WA.ui.openPopup("securityPopup","You want to know the secret life of your suitcase? We explain it all here!",[
            {
                label: "Watch",
                className: "primary",
                callback: async () => {
                    websiteSecurity = await WA.nav.openCoWebSite('https://player.vimeo.com/video/452151588');
                }
            }
        ]);
    })
    WA.room.onEnterLayer('zoneNFT').subscribe(() => {
        popNFT = WA.ui.openPopup("nftPopup","NFT supply in progress...stay tuned!",[]);
    })

    WA.room.onLeaveLayer('zoneComptoir1').subscribe(closePopUp)
    WA.room.onLeaveLayer('zoneComptoir2').subscribe(closePopUp)
    WA.room.onLeaveLayer('zoneBar').subscribe(closePopUp)
    WA.room.onLeaveLayer('zoneNFT').subscribe(closePopUp)
    WA.room.onLeaveLayer('zoneSecurity').subscribe(closePopUp)
    WA.room.onLeaveLayer('zoneGate').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (websiteSecurity !== undefined) {
        websiteSecurity.close();
    }
    if (websiteTropical !== undefined) {
        websiteTropical.close();
    }
    if (websiteCaribbean !== undefined) {
        websiteCaribbean.close();
    }
    if (websiteBeach !== undefined) {
        websiteBeach.close();
    }
    if (websiteCulture !== undefined) {
        websiteCulture.close();
    }
    if (websiteNO !== undefined) {
        websiteNO.close();
    }
    if (websiteYES !== undefined) {
        websiteYES.close();
    }
    if (websiteWatch !== undefined) {
        websiteWatch.close();
    }
    if (popComptoir1 !== undefined) {
        popComptoir1.close();
        popComptoir1 = undefined;
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
    if (popSecurity !== undefined) {
        popSecurity.close();
        popSecurity = undefined;
    }
}

export {};
