function definirHora (){
    const header = document.querySelector('#real-time-clock');
    
        setInterval(() => {
            const now = new Date();
            const horas = now.getHours();
            const minutos = now.getMinutes().toString().padStart(2,'0');
            const segundos = now.getSeconds().toString().padStart(2, '0');
        
    
    
    
            header.innerHTML = ` <span> ${horas}:${minutos}:${segundos}</span>`;
    
        }, 1000);
    };
    document.addEventListener('DOMContentLoaded', definirHora);