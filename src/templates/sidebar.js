class Sidebar extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
    this.innerHTML = `
        <div class="sidebar">
            <h2>Info</h2>
                <a href="/index.html">About Me</a>
            <h2>Projects</h2>
                <a href="/src/html/mods.html">Minecraft Mods</a>
                <a href="/src/html/programs.html">Programs</a>
                <a href="/src/html/music.html">Music</a>
        </div>
        `;

    }
}

customElements.define("main-sidebar", Sidebar);