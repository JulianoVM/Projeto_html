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
        }
    });
});
        
document.querySelector(".top").addEventListener("click", event =>
{
    event.preventDefault();

    let eita = document.querySelector(document.querySelector(".top").getAttribute("href"));

    if (eita)
    {
        eita.scrollIntoView
        ({
            behavior: "smooth"
        });
    };
});