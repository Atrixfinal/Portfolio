document.getElementById("toggleBTN").onclick = function()
{
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        this.textContent="🌙";}
        else
        {
            this.textContent = "☀️";
        }
};