let placeholder = document.getElementById("text");
let words = ["Climate change in Arizona ", "encompasses the effects of climate change,", "attributed to man-made increases in atmospheric carbon dioxide, ","in the U.S. state of Arizona.", "It has been asserted that Arizona 'will suffer more than most of U.S.' due to climate change.", "[1] According to the United States Environmental Protection Agency, Arizona 'has warmed about two degrees (F) in the last century. Throughout the southwestern United States, heat waves are becoming more common, and snow is melting earlier in spring. In the coming decades, changing the climate is likely to decrease the flow of water in the Colorado River, threaten the health of livestock, increase the frequency and intensity of wildfires, and convert some rangelands to desert'.", "[2]Adaptation includes managing water resources, proposals to redesign urban downtown areas,", "[3] and potential application of passive daytime radiative cooling technology."];
let index = 0;
function type(word){
    let i = 0;
    let writing = setInterval(()=>{
        placeholder.innerHTML += word.charAt(i);
        i ++;
        if(i>=word.length){
            clearInterval(writing);
            setTimeout(erase, 1000);
        }
    }, 75)

}

function erase(){
    let deleting = setInterval(() => {
        placeholder.innerHTML = placeholder.innerHTML.slice(0,-1);
        if(placeholder.innerHTML.length <= 0){
            clearInterval(deleting);
            index++;
            if(index>=words.length){
                index = 0;
            }
            type(words[index])
        }
    
        
    }, 25);

}

type(words[index]);