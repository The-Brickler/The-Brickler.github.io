class ModCard extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        let thumbnailUrl;
        if (this.hasAttribute("thumb"))
        {
            thumbnailUrl = this.getAttribute("thumb");
        }
        else
        {
            thumbnailUrl = "";
        }

        let iconUrl;
        if (this.hasAttribute("icon"))
        {
            iconUrl = this.getAttribute("icon");
        }
        else
        {
            iconUrl = "";
        }

        let githubUrl;
        if (this.hasAttribute("git"))
        {
            githubUrl = this.getAttribute("git");
        }
        else
        {
            githubUrl = "";
        }

        let modrinthUrl;
        if (this.hasAttribute("modr"))
        {
            modrinthUrl = this.getAttribute("modr");
        }
        else
        {
            modrinthUrl = "";
        }

        let curseUrl;
        if (this.hasAttribute("curse"))
        {
            curseUrl = this.getAttribute("curse");
        }
        else
        {
            curseUrl = "";
        }

        let pageUrl;
        if (this.hasAttribute("page"))
        {
            pageUrl = this.getAttribute("page");
        }
        else
        {
            pageUrl = this.getAttribute("page");
        }



        let modName;
        if (this.hasAttribute("mname"))
        {
            modName = this.getAttribute("mname");
        }
        else
        {
            modName = "Unknown Mod";
        }

        let modDescription;
        if (this.hasAttribute("mdesc"))
        {
            modDescription = this.getAttribute("mdesc");
        }
        else
        {
            modDescription = "No description was found so you can have some filler text";
        }

        let modVersion;
        if (this.hasAttribute("ver"))
        {
            modVersion = this.getAttribute("ver");
        }
        else
        {
            modVersion = "No Version Specified";
        }

        let modLoader;
        if (this.hasAttribute("loader"))
        {
            modLoader = this.getAttribute("loader");
        }
        else
        {
            modLoader = "Fabric / Quilt"
        }



        const card = document.createElement("div");
        card.setAttribute("class", "modCard");

        const info = document.createElement("div");
        info.setAttribute("class", "modInfo");
        const links = document.createElement("div");
        links.setAttribute("class", "modLinks");
        card.appendChild(info);
        card.appendChild(links);

        if (thumbnailUrl !== "")
        {
            const thumb = document.createElement("img");
            thumb.src = thumbnailUrl;
            info.appendChild(thumb);
        }
        if (iconUrl !== "")
        {
            const icon = document.createElement("img");
            thumb.src = iconUrl;
            info.appendChild(icon);
        }

        const name = document.createElement("h3");
        name.setAttribute("class", "modName");
        desc.textContent(modName);
        info.appendChild(name);

        const desc = document.createElement("p");
        desc.setAttribute("class", "modDesc");
        desc.textContent(modDescription);
        info.appendChild(desc);

        const ver = document.createElement("p");
        desc.setAttribute("class", "modDetails");
        desc.textContent(modVersion);
        info.appendChild(ver);

        const loader = document.createElement("p");
        desc.setAttribute("class", "modDetails");
        desc.textContent(modLoader);
        info.appendChild(loader);


        if (pageUrl !== "")
        {
            const page = document.createElement("a");
            page.setAttribute("href", pageUrl);
            page.setAttribute("class", "modLink");
            page.textContent("More Info");
            links.appendChild(page);
        }

        if (githubUrl !== "")
        {
            const github = document.createElement("a");
            github.setAttribute("href", githubUrl);
            github.setAttribute("class", "modLink");
            github.textContent("Github");
            links.appendChild(github);
        }

        if (modrinthUrl !== "")
        {
            const modrinth = document.createElement("a");
            modrinth.setAttribute("href", modrinthUrl);
            modrinth.setAttribute("class", "modLink");
            modrinth.textContent("Modrinth");
            links.appendChild(modrinth);
        }

        if (curseUrl !== "")
        {
            const curse = document.createElement("a");
            curse.setAttribute("href", curseUrl);
            curse.setAttribute("class", "modLink");
            curse.textContent("CurseForge");
            links.appendChild(curse);
        }


        const style = document.createElement("style");

        this.shadowRoot.appendChild(card);
    }
}

customElements.define("mod-card", ModCard);