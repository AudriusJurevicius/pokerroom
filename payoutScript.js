const inputBox = document.querySelector("#inputBox")
const exportBox = document.querySelector("#exportBox")

const btn6 = document.querySelector("#btn6")


btn6.addEventListener("click", () => {
    exportBox.value = ""
    const eilute = inputBox.value.split("\n")
    eilute.map((el) => {
        const a = el.split(",")
        let sk = a[2]
        while(sk > 30000) {
            exportBox.value += a[0] + "," + a[1] + ",30000\n"
            sk -= 30000
        }
        (sk - Math.floor(sk)) > 0 ? exportBox.value += a[0] + "," + a[1] + "," + Math.round((sk*100))/100 + "\n" : exportBox.value += a[0] + "," + a[1] + "," + sk + "\n"
    })
    
})

function functionCopy() {
  /* Get the text field */
  var copyText = document.getElementById("exportBox");

  /* Select the text field */
  copyText.select(); 
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: \n" + copyText.value);
}