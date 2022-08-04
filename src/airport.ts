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

    console.log('Hello world !');

    WA.room.onEnterLayer('zoneComptoir1').subscribe(() => {
        popComptoir1 = WA.ui.openPopup("comptoir1Popup","Hello, you are rather tropical climate or Caribbean climate ?",
            [{
                label: "Tropical",
                className: "primary",
                callback: () => {
                    WA.room.website.create({
                      name: "my_website",
                      url: "https://example.com",
                      position: {
                        x: 64,
                        y: 128,
                        width: 320,
                        height: 240,
                      },
                      visible: true,
                      allowApi: true,
                      allow: "fullscreen",
                      origin: "map",
                      scale: 1,
                    });
                }
            },
            {
                label: "Caribbean",
                className: "secondary",
                callback: () => {
                    window.open("https://vimeo.com/684568939/71107d1cc5", '_blank');
                }
            }]
        );
        console.log('zoneComptoir1');
    })
    WA.room.onEnterLayer('zoneComptoir2').subscribe(() => {
        popComptoir2 = WA.ui.openPopup("comptoir2Popup","Good morning, you are a beach or culture person?",[
            {
                label: "Beach",
                className: "primary",
                callback: () => {
                    window.open("https://vimeo.com/manage/videos/554125018/eed15f29a1", '_blank').focus();
                }
            },
            {
                label: "Culture",
                className: "secondary",
                callback: () => {
                    window.open("https://vimeo.com/435014076", '_blank').focus();
                }
            }
            ]);
        console.log('zoneComptoir2');
    })
    WA.room.onEnterLayer('zoneBar').subscribe(() => {
        popBar = WA.ui.openPopup("barPopup","You want to get high before you get in the air?",[
            {
                label: "NO",
                className: "primary",
                callback: () => {
                    window.open("https://www.youtube.com/watch?v=5YbjzztYbUo", '_blank').focus();
                }
            },
            {
                label: "YES",
                className: "secondary",
                callback: () => {
                    window.open("", '_blank').focus();
                }
            }
        ]);
        console.log('zoneBar');
    })
    WA.room.onEnterLayer('zoneGate').subscribe(() => {
        popGate = WA.ui.openPopup("gatePopup","You want to know the secret life of your suitcase? We explain it all here!",[
            {
                label: "NO",
                className: "primary",
                callback: () => {
                    window.open("https://vimeo.com/452151588", '_blank');
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
