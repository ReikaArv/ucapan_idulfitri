function goGenerate(){
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var input3 = document.getElementById('input3').value;
    var input4 = document.getElementById('input4').value;
    var input5 = document.getElementById('input5').value;
    var input6 = document.getElementById('input6').value;
    var input7 = document.getElementById('input7').value;
    var input8 = document.getElementById('input8').value;
    var input9 = document.getElementById('input9').value;
    var input10 = document.getElementById('input10').value;
    var input11 = document.getElementById('input11').value;

    var output = document.getElementById('output');

    var ucapan = ' Seputih Keqing \n Sebening Hu Tao \n Teriring salam seharum Ganyu \n Dengan senyuman semanis Barbara \n Meskipun dosa sebesar Eula \n Mohon maafkan kesalahan padamu walaupun hanya sekecil Paimon \n karena cobaan hidup kadang tak sepahit kisah Diona dan Qiqi \n Dan sekeras Noelle \n yang tak membuat kita luput dari kesalahan.... \n Saya minta maaf Sebesar-besarnya , \n meskipun permintaan maaf Saya tidak sebesar Dvalin , \n Saya minta maaf tulus bgt, seperti Rasa cinta Lumine dan Aether \n Selamat hari Raya idul Fitri 1442 H \n تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ صِيَامَنَا وَصِيَامَكُمْ تَقَبَّلْ يَا كَرِيْمَ \n Taqabbalallohu Minna wa Minkum shiyaamanaa washiyaamakum taqabbal yaa Kariim \n Mohon maaf lahir batin atas segala salah & khilaf...'

    var replace = ucapan.replace(/Keqing/g, input1).replace(/Hu Tao/g, input2).replace(/Ganyu/g, input3).replace(/Barbara/g, input4).replace(/Eula/g, input5).replace(/Paimon/g, input6).replace(/Diona dan Qiqi/g, input7).replace(/Noelle/g, input8).replace(/Dvalin/g, input9).replace(/Lumine/g, input10).replace(/Aether/g, input11);

    output.innerHTML = replace;
}

function copyText(){
    var textCopy = document.getElementById("copy_text");
    textCopy.querySelector();
    document.execCommand('copy');
   }