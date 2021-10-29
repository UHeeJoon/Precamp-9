const exchange = () => {
    const temp = String(Math.floor(Math.random()*1000000)).padStart(6,0)
    document.getElementById("input_text").value= temp
    
}