document.addEventListener("DOMContentLoaded",async function(){async function u(){var e,t,n;sessionStorage.getItem("auth")&&null!=subscription&&"Inspiration"==subscription.plan&&(e=document.getElementsByClassName("product-price-wrapper")[0],(t=document.createElement("a")).className="button w-inline-block",t.style.cssText="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d; display: flex; margin-top:15px; background: #a4a67c;",(n=document.createElement("div")).className="button-text",n.innerText="In Kollektion speichern",t.appendChild(n),t.setAttribute("onclick","clickHandler(event)"),e.appendChild(t))}window.saveOrDelete=e=>{const t=e.target,n=t.getAttribute("name"),i=window.collections.find(e=>e.name==n);"Speichern"==t.innerText?fetch("https://bildzeitschrift.netlify.app/.netlify/functions/collection",{method:"PUT",headers:{Authorization:sessionStorage.getItem("auth")},body:JSON.stringify({name:n,update:{$addToSet:{items:productId},...i.hasOwnProperty("cover")?{}:{$set:{cover:document.querySelector(".product-img").src.split("/v1651695832/")[1]}}}})}).then(e=>{200==e.status&&(i.items.push(productId),t.innerText="Gespeichert",t.style="margin: 10px; border: 2px solid var(--black); color: var(--black); background-color: #A4A67C; border-radius:10px;font-size: initial;")}):"Gespeichert"==t.innerText&&fetch("https://bildzeitschrift.netlify.app/.netlify/functions/collection",{method:"PUT",headers:{Authorization:sessionStorage.getItem("auth")},body:JSON.stringify({name:n,update:{$pull:{items:productId}}})}).then(e=>{200==e.status&&(-1<(e=i.items.indexOf(window.productId))&&i.items.splice(e,1),t.innerText="Speichern",t.style="margin: 10px; border: 2px solid var(--black); color: var(--black); background-color: #BF8563; border-radius:10px;font-size: initial;")})},window.createCollection=async e=>{let t=await Swal.fire({title:"Neue Kollektion",input:"text",inputLabel:"Name",inputPlaceholder:"Name deiner neuen Kollektion",confirmButtonText:"Erstellen",inputValidator:e=>{if(!e)return"Name cannot be empty"}});window.collections.some(e=>e.name==t.value)||null==t.value||fetch("https://bildzeitschrift.netlify.app/.netlify/functions/collection",{method:"POST",headers:{Authorization:sessionStorage.getItem("auth")},body:JSON.stringify({name:t.value,item:window.productId})}).then(e=>{200==e.status&&((e={name:t.value,items:[],cover:window.productId.replaceAll("-","_").replaceAll("(","").replaceAll(")","")}).items.push(window.productId),window.collections.push(e))})},window.searchFilter=t=>{var n=t.target.parentElement.querySelectorAll(".collections");if(""==t.target.value)for(let e=0;e<n.length;e++)n[e].style.display="flex";for(let e=0;e<n.length;e++)n[e].innerText.toLowerCase().startsWith(t.target.value.toLowerCase())?n[e].innerText.toLowerCase().startsWith(t.target.value.toLowerCase())&&"none"==n[e].style.display&&(n[e].style.display="flex"):n[e].style.display="none"},window.clickHandler=e=>{let t=`<input placeholder="Suchen..." style="background-color: #d9d3d0;
        outline: none;
        border: 1px solid #2b2a2a;
        border-radius: 10px;
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 10;" oninput="searchFilter(event)">`;for(let e=0;e<window.collections.length;e++){var n=window.collections[e].items.includes(window.productId);t+=`
            <div style="display:flex; justify-content: space-between;" class="collections">
                <div style="margin: 10px;">${window.collections[e].name}</div>
                <button style="margin: 10px; border: 2px solid var(--black); color: var(--black);
                border-radius: 10px; font-size:initial; ${n?"background-color: rgb(164, 166, 124);":"background-color:var(--peru);"}"   name="${window.collections[e].name.trim()}"   onclick='saveOrDelete(event)'>${n?"Gespeichert":"Speichern"}</button>
            </div>
            `}t+=`
        <div style="display:flex; justify-content: space-between;">

            <button style="margin: 10px; border: 2px solid var(--black); color: var(--black);
            border-radius: 10px; font-size:initial; background-color:var(--peru);" onclick='createCollection()'>+</button>
            <div style="margin: 10px;">Kollektion erstellen</div>
        </div>
        `,Swal.fire({showCloseButton:!1,showConfirmButton:!1,html:`
        
            <div style="display: flex;flex-direction:column;overflow: auto;
            scrollbar-width: none; max-height:350px;">
                ${t}
            </div>            
            `,focusConfirm:!1})},setTimeout(()=>{var e=window.location.href.split("?")[1];e&&fetch("https://bildzeitschrift.netlify.app/.netlify/functions/loadProduct?"+e).then(e=>e.json()).then(async e=>{o=e,(t=document.getElementsByClassName("snipcart-add-item")[0]).setAttribute("data-item-url","https://bildzeitschrift.netlify.app/.netlify/functions/validateOrder?productId="+o.product.SKU),t.setAttribute("data-item-id",o.product.SKU),t.setAttribute("data-item-price",o.product.Preis),t.setAttribute("data-item-name",o.product.Name+" "+o.product.Jahr),t.setAttribute("data-item-image","https://res.cloudinary.com/wdy-bzs/image/upload/"+o.product.Images),t.setAttribute("data-item-description",o.product.Monat+" "+o.product.Jahr+" "+o.product.Ausgabe);var t=await(collections=await(collections=await fetch("https://bildzeitschrift.netlify.app/.netlify/functions/collection",{method:"GET",headers:{Authorization:sessionStorage.getItem("auth")}})).json());window.collections=t.collections,window.subscription=t.subscription;{var n=e;document.getElementsByClassName("heading-2")[0].innerText=n.product.Name,document.getElementsByClassName("month-product")[0].innerText=n.product.Monat,document.getElementsByClassName("year-text")[0].innerText=n.product.Jahr;var i,o=document.getElementsByClassName("product-image")[0];document.getElementsByClassName("product-lightbox")[0].setAttribute("data-mfp-src","https://res.cloudinary.com/wdy-bzs/image/upload/"+n.product.Images),o.src="https://res.cloudinary.com/wdy-bzs/image/upload/"+n.product.Images,/[a-zA-Z]/g.test(n.product.Preis)||0==n.product.Preis?(await u(),document.getElementsByClassName("price-wrapper")[0].style.display="none",(o=document.getElementsByClassName("snipcart-add-item")[0]).getElementsByClassName("button-text")[0].innerText="Kontakt for preis",o.addEventListener("click",async e=>{e.preventDefault();null==sessionStorage.getItem("auth")?(e=await Swal.fire({title:"Kontaktformular",input:"text",inputLabel:"E-Mail",inputPlaceholder:"johndoe@gmail.com",confirmButtonText:"Anfrage senden",inputValidator:e=>{if(!e)return"E-Mail darf nicht leer sein"}}),await fetch("https://bildzeitschrift.netlify.app/.netlify/functions/price-inquiry",{method:"POST",body:{email:e.value,product:location.href}})):(await fetch("https://bildzeitschrift.netlify.app/.netlify/functions/price-inquiry",{method:"POST",headers:{Authorization:sessionStorage.getItem("auth")},body:{product:location.href}}),await Swal.fire({title:"Kontaktformular",input:"text",inputLabel:"E-Mail",inputPlaceholder:"johndoe@gmail.com",confirmButtonText:"Anfrage senden",inputValidator:e=>{if(!e)return"E-Mail darf nicht leer sein"}}))})):(await u(),document.getElementsByClassName("price")[0].innerText=n.product.Preis,document.getElementsByClassName("price-wrapper")[0].style.display="flex",document.getElementsByClassName("snipcart-add-item")[0].style.display="flex");const d=document.getElementsByClassName("product-categories-wrapper")[0];n.categories;for(c of Object.keys(n.product))"Jahrzehnt"==c?((i=document.createElement("a")).className="single-product-cat",i.innerText=n.product.Jahrzehnt,i.href=new URL(document.baseURI).origin+"/archiv?jahrzehnt="+n.product.Jahrzehnt,d.append(i)):"THEMA"==c?n.product.THEMA.forEach(e=>{var t;""!=e&&((t=document.createElement("a")).className="single-product-cat",t.innerText=e,t.href=new URL(document.baseURI).origin+"/archiv?t_single="+e,d.append(t))}):"ZEITSCHRIFTEN"==c?n.product.ZEITSCHRIFTEN.forEach(e=>{var t;""!=e&&((t=document.createElement("a")).className="single-product-cat",t.innerText=e,t.href=new URL(document.baseURI).origin+"/archiv?z_single="+e,d.append(t))}):"MOTIV"==c?n.product.MOTIV.forEach(e=>{var t;""!=e&&((t=document.createElement("a")).className="single-product-cat",t.innerText=e,t.href=new URL(document.baseURI).origin+"/archiv?m_single="+e,d.append(t))}):"Titelseite"==c?n.product.Titelseite.forEach(e=>{var t;""!=e&&((t=document.createElement("a")).className="single-product-cat",t.innerText=e,t.href=new URL(document.baseURI).origin+"/archiv?Titelseite="+e,d.append(t))}):"PERSÖNLICHKEITEN"==c&&n.product.PERSÖNLICHKEITEN.forEach(e=>{var t;""!=e&&((t=document.createElement("a")).className="single-product-cat",t.innerText=e,t.href=new URL(document.baseURI).origin+"/archiv?p_single="+e,d.append(t))});var o=document.getElementsByClassName("upsells-link w-inline-block"),r=document.getElementsByClassName("upsells-img"),s=0,l=n.similarMags;for(a of o)r[s].src="",r[s].src="https://res.cloudinary.com/wdy-bzs/image/upload/"+l[s].Images,a.href=new URL(document.baseURI).origin+"/magazine?productId="+l[s].SKU,s++}await 0,window.productId=new URLSearchParams(window.location.search).get("productId")})},10)});