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