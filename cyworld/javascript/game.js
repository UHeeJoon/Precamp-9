function startWord(){
    word = document.getElementById("word").innerText
    myWord = document.getElementById("myWord").value
    const lastWord = word[word.length-1]
    const firstWord = myWord[0]
    if(lastWord===firstWord){
        document.getElementById("word").innerText = myWord
        document.getElementById("result").innerText="맞았습니다!!"
        cleanWord()
    }
    else if (myWord===""){
        document.getElementById("myWord").placeholder = lastWord
    }

    else{
        document.getElementById("result").innerText="땡!!!"
        cleanWord()
    }
}
function cleanWord(){
    document.getElementById("myWord").value = ""
    startWord()
}

function lotto(){
    let lotto_num=[]
    for(let i=0;i<6;i++){
        lotto_num[i]= Math.floor(Math.random()*45+1)
        while(1){
            let count = 0
            for(let j=0;j<i;j++)
                if(lotto_num[j]===lotto_num[i])
                    count++;
            if(count==0) break;
            for(let j=0;j<i;j++){
                if(lotto_num[j]===lotto_num[i]){
                    lotto_num[i]= Math.floor(Math.random()*45+1)
                }
            }
        }
    }
    for(let i=0;i<6;i++)
        document.getElementById(i+1+"_num").innerText = lotto_num[i]
}