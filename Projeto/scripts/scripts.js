function navega()
{
    document.querySelectorAll("nav ul a").forEach(link => 
    {
        link.addEventListener("click", evento => 
        {
            evento.preventDefault();

            let href = link.getAttribute("href");
            let alvo = document.querySelector(href);
        
            if (alvo)
            {
                alvo.scrollIntoView(
                {
                    behavior: "smooth"
                });

                alvo.classList.add("selecionado");

                setTimeout(() =>
                {
                    alvo.classList.remove("selecionado");
                }, 700);
            }
        });
    });
}

function topo()
{
    document.querySelector(".top").addEventListener("click", event =>
    {
        event.preventDefault();
    
        let eita = document.querySelector(document.querySelector(".top").getAttribute("href"));
    
        if (eita)
        {
            eita.scrollIntoView(
            {
                behavior: "smooth"
            });
        };
    });
};