const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generate(){
    
let a = Math.floor(Math.random()*91)
let b = Math.floor(Math.random()*91)
let c = Math.floor(Math.random()*91)
let d = Math.floor(Math.random()*91)
let e = Math.floor(Math.random()*91)
let f = Math.floor(Math.random()*91)
let g = Math.floor(Math.random()*91)
let h = Math.floor(Math.random()*91)
let i = Math.floor(Math.random()*91)
let j = Math.floor(Math.random()*91)
let k = Math.floor(Math.random()*91)
let l = Math.floor(Math.random()*91)
let m = Math.floor(Math.random()*91)
let n = Math.floor(Math.random()*91)
let o = Math.floor(Math.random()*91)
    
    for(let x=0; x<characters.length; x++){
        document.getElementById("pw1").value = characters[a] + characters[b]+ characters[c]+ characters[d]+ characters[e]+ characters[f]+ characters[g]+ characters[h]+ characters[i]+ characters[j]+ characters[k]+ characters[l]+ characters[m]+ characters[n]+ characters[o]+ characters[x]
    }

let a1 = Math.floor(Math.random()*91)
let b1 = Math.floor(Math.random()*91)
let c1 = Math.floor(Math.random()*91)
let d1 = Math.floor(Math.random()*91)
let e1 = Math.floor(Math.random()*91)
let f1 = Math.floor(Math.random()*91)
let g1 = Math.floor(Math.random()*91)
let h1 = Math.floor(Math.random()*91)
let i1 = Math.floor(Math.random()*91)
let j1 = Math.floor(Math.random()*91)
let k1 = Math.floor(Math.random()*91)
let l1 = Math.floor(Math.random()*91)
let m1 = Math.floor(Math.random()*91)
let n1 = Math.floor(Math.random()*91)
let o1 = Math.floor(Math.random()*91)

     for(let y=0; y<characters.length; y++){
        document.getElementById("pw2").value = characters[a1] + characters[b1]+ characters[c1]+ characters[d1]+ characters[e1]+ characters[f1]+ characters[g1]+ characters[h1]+ characters[i1]+ characters[j1]+ characters[k1]+ characters[l1]+ characters[m1]+ characters[n1]+ characters[o1]+ characters[y]
    }

}

console.log(characters.length)

