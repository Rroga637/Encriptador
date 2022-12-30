const img = document.querySelector(".img");
    const copia = document.querySelector(".copy");
    const na = document.querySelector(".na");

    function encriptar() {
        let codigo = document.querySelector(".input-text").value
        let modificado = codigo.replace(/e/g, "enter");
        modificado = modificado.replace(/i/g, "imes");
        modificado = modificado.replace(/a/g, "ai");
        modificado = modificado.replace(/o/g, "ober");
        modificado = modificado.replace(/u/g, "ufat")

        return modificado;

    }

    function desencriptar(codigo) {
        let modificado = codigo.replace(/enter/g,"e" );
        modificado = modificado.replace(/imes/g, "i");
        modificado = modificado.replace(/ai/g, "a");
        modificado = modificado.replace(/ober/g, "o");
        modificado = modificado.replace(/ufat/g, "u")

        return modificado;

    }

    function copy() {
        let copyText = document.querySelector(".pa").textContent;
        navigator.clipboard.writeText(copyText);
    }

    document.querySelector(".desencriptar").addEventListener("click", function(){
        document.querySelector(".pa").textContent = desencriptar(document.querySelector(".input-text").value );

        if(document.querySelector(".input-text").value  != ""){
            img.style.display = "none";
            na.style.display = "none";
            copia.style.display = "inline";
        }

    });

    document.querySelector(".encriptar").addEventListener("click", function(){
        document.querySelector(".pa").textContent = encriptar();

        if(document.querySelector(".input-text").value  != ""){
            na.style.display = "none";
            img.style.display = "none";
            copia.style.display = "inline";
        }

    });

    copia.style.display = "none";
    copia.addEventListener("click", copy);

