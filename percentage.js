const BI = document.querySelector("#inputBI");
const P = document.querySelector("#inputP");
const minCash = document.querySelector("#inputMC");
const btn = document.querySelector("#btn");
const btnProcess = document.querySelector("#btnProcess");
const ticketID = document.querySelector("#inputTicketID");

const outputTicketValue = document.querySelector("#outputValue");
const outputPayout = document.querySelector("#outputPayout");
const btnCopy = document.querySelector("#btnCopy");
var maxValue = 0;
var D2Entries = [];

function GetD2Seats(k) {
    return Math.round(P.value * k);
}

function checkingMax(entries, winners) {
    return Math.ceil((entries * BI.value - winners * minCash.value) / winners);
}

btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (BI.value !== "" && P.value !== "" && minCash.value !== "") {
        outputPayout.value = "";
        for (let i=6; i<1000; i++) {
            if (GetD2Seats(i) !== GetD2Seats(i+1)){
                D2Entries[GetD2Seats(i)] = i;
            }
            let t = checkingMax(i, GetD2Seats(i));
            if (t > maxValue) {
                maxValue = t;
            }
        }

        outputTicketValue.value = maxValue;

        if (ticketID !== undefined && ticketID !== null) {
            btnProcess.classList.remove("disabled");
        }
        btn.classList.add("disabled");
    }
})

btnCopy.addEventListener("click", functionCopy);

function functionCopy() {
    var copyText = document.getElementById("outputPayout");
    copyText.select(); 
    document.execCommand("copy");
  }

btnProcess.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("disabled") === false) {

        outputPayout.value = "Rank/Players";
        outputPayout.value += D2Entries.join(",")
        outputPayout.value += "\n";
        for (let i=1; i<D2Entries.length; i++) {
            outputPayout.value += `${i}`;
            for(let j=1; j<D2Entries.length;j++) {
                if (i<=j) {
                    if (minCash.value == 0) {
                        outputPayout.value += `,${ticketID.value}TT`;
                    } else {
                        outputPayout.value += `,${ticketID.value}TT-${minCash.value*100}C`;
                    }

                } else {
                    outputPayout.value += `,`;
                }
            }
            outputPayout.value += `\n`;
        }
    } 
});