window.addEventListener("load",()=>{
    document.querySelectorAll(".progress-bar").forEach(bar=>{
        const value = bar.dataset.progress;
        setTimeout(()=>{
            bar.style.width = value + "%";
        },300);
    });
});
