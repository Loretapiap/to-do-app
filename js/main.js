var texto = document.getElementById("inputCuadro").value;
var lista = document.getElementById("lista");
var listaTareas = document.getElementById("listaTareas");

function agregarTarea() {
    var texto = document.getElementById("inputCuadro").value;
	
   
    if(texto != ""){
    	var div = document.createElement("div");
    	div.setAttribute("class", "contenedor");
    	var checked = document.createElement("input");
    	checked.setAttribute("type", "checkbox");
    	checked.setAttribute("class", "checked");
        var tarea = document.createElement("span");
        tarea.setAttribute("class", "tarea");
        var btn = document.createElement("button");
        btn.setAttribute("class", "glyphicon glyphicon-trash");
		var textob = document.createTextNode("Borrar");
        btn.appendChild(textob);
		btn.addEventListener('click', eliminarTarea);
        checked.onclick = function(){
        	if(this.checked === true){
        		tarea.setAttribute("class", "tachar");
        	}else{
        		tarea.removeAttribute("class");
        	}
        }
        listaTareas.appendChild(div);
        div.appendChild(checked);
        tarea.innerHTML = texto;
        div.appendChild(tarea);
        div.appendChild(btn);
        document.getElementById("inputCuadro").value = "";
    }else{
    	alert("Por favor, escribe una tarea");
    }
}

function eliminarTarea(e) {
 	var div = e.target.parentNode;
 	listaTareas.removeChild(div);   
}
