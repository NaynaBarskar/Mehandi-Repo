const WHATSAPP="919322163274";
const INSTAGRAM="https://www.instagram.com/nayana_mehandi_artist/";
const PORTFOLIO="https://naynabarskar.github.io/Mehandi-Repo/";

const services=[
 {name:"Bridal Mehendi",icon:"❀",text:"Detailed bridal designs with personalized motifs and rich traditional elements."},
 {name:"Engagement Mehendi",icon:"♡",text:"Elegant hand designs for engagement ceremonies and intimate celebrations."},
 {name:"Traditional Mehendi",icon:"❧",text:"Classic Indian patterns for weddings, festivals and family celebrations."},
 {name:"Arabic Mehendi",icon:"✦",text:"Flowing floral trails, bold spaces and graceful modern compositions."},
 {name:"Foot Mehendi",icon:"✿",text:"Beautiful floral, mandala and traditional foot patterns with fine detailing."},
 {name:"Party Mehendi",icon:"✦",text:"Stylish designs for parties, family functions and special occasions."},
 {name:"Festive Mehendi",icon:"❁",text:"Graceful festive patterns that complement your celebration and outfit."},
 {name:"Custom Design",icon:"♡",text:"A design built around your outfit, event, inspiration or special story."}
];

const designs=[
 {id:1,image:"assets/collection/collection-1.webp",title:"Lotus Feet Mehendi",category:"feet",label:"Feet",desc:"Floral lotus motifs with detailed footwork."},
 {id:2,image:"assets/collection/collection-2.webp",title:"Mandala Feet Pattern",category:"feet",label:"Feet",desc:"Circular traditional motifs with detailed toes and borders."},
 {id:3,image:"assets/collection/collection-3.webp",title:"Bridal Full-Hand Design",category:"bridal",label:"Bridal",desc:"Full-hand bridal composition with rich traditional detailing."},
 {id:4,image:"assets/collection/collection-4.webp",title:"Traditional Feet Details",category:"traditional",label:"Traditional",desc:"Dense floral and geometric detailing across the feet."},
 {id:5,image:"assets/collection/collection-5.webp",title:"Detailed Hand & Arm Art",category:"hands",label:"Hands",desc:"Long hand-to-arm composition with framed traditional motifs."},
 {id:6,image:"assets/collection/collection-6.webp",title:"Classic Full-Hand Work",category:"hands",label:"Hands",desc:"Balanced floral and geometric patterns with fine linework."},
 {id:7,image:"assets/collection/collection-7.webp",title:"Floral Palm Mehendi",category:"hands",label:"Hands",desc:"Open-palm floral composition with delicate decorative details."},
 {id:8,image:"assets/collection/collection-8.webp",title:"Modern Hand Composition",category:"hands",label:"Hands",desc:"Contemporary hand design combining bold panels and fine details."}
];

const styleIdeas=[{"id":1,"name":"Classic Bridal","category":"Bridal","desc":"Classic Bridal Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":2,"name":"Royal Bridal","category":"Bridal","desc":"Royal Bridal Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":3,"name":"Floral Bridal","category":"Bridal","desc":"Floral Bridal Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":4,"name":"Mandala Bridal","category":"Bridal","desc":"Mandala Bridal Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":5,"name":"Portrait Bridal","category":"Bridal","desc":"Portrait Bridal Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":6,"name":"Story Bridal","category":"Bridal","desc":"Story Bridal Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":7,"name":"Minimal Bridal","category":"Bridal","desc":"Minimal Bridal Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":8,"name":"Dense Bridal","category":"Bridal","desc":"Dense Bridal Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":9,"name":"Arabic Bridal","category":"Bridal","desc":"Arabic Bridal Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":10,"name":"Modern Bridal","category":"Bridal","desc":"Modern Bridal Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":11,"name":"Elegant Engagement","category":"Engagement","desc":"Elegant Engagement Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":12,"name":"Ring Motif","category":"Engagement","desc":"Ring Motif Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":13,"name":"Floral Engagement","category":"Engagement","desc":"Floral Engagement Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":14,"name":"Minimal Engagement","category":"Engagement","desc":"Minimal Engagement Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":15,"name":"Arabic Engagement","category":"Engagement","desc":"Arabic Engagement Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":16,"name":"Mandala Engagement","category":"Engagement","desc":"Mandala Engagement Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":17,"name":"Couple Story","category":"Engagement","desc":"Couple Story Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":18,"name":"Fine-Line Engagement","category":"Engagement","desc":"Fine-Line Engagement Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":19,"name":"Traditional Engagement","category":"Engagement","desc":"Traditional Engagement Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":20,"name":"Contemporary Engagement","category":"Engagement","desc":"Contemporary Engagement Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":21,"name":"Indian Traditional","category":"Traditional","desc":"Indian Traditional Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":22,"name":"Rajasthani","category":"Traditional","desc":"Rajasthani Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":23,"name":"Marwari","category":"Traditional","desc":"Marwari Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":24,"name":"Gujarati","category":"Traditional","desc":"Gujarati Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":25,"name":"Maharashtrian","category":"Traditional","desc":"Maharashtrian Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":26,"name":"South Indian","category":"Traditional","desc":"South Indian Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":27,"name":"Temple Motif","category":"Traditional","desc":"Temple Motif Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":28,"name":"Paisley Traditional","category":"Traditional","desc":"Paisley Traditional Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":29,"name":"Lotus Traditional","category":"Traditional","desc":"Lotus Traditional Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":30,"name":"Peacock Traditional","category":"Traditional","desc":"Peacock Traditional Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":31,"name":"Classic Arabic","category":"Arabic","desc":"Classic Arabic Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":32,"name":"Bold Arabic","category":"Arabic","desc":"Bold Arabic Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":33,"name":"Floral Trail","category":"Arabic","desc":"Floral Trail Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":34,"name":"Leaf Trail","category":"Arabic","desc":"Leaf Trail Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":35,"name":"Arabic Vine","category":"Arabic","desc":"Arabic Vine Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":36,"name":"Negative Space Arabic","category":"Arabic","desc":"Negative Space Arabic Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":37,"name":"Modern Arabic","category":"Arabic","desc":"Modern Arabic Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":38,"name":"Arabic Fusion","category":"Arabic","desc":"Arabic Fusion Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":39,"name":"Delicate Arabic","category":"Arabic","desc":"Delicate Arabic Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":40,"name":"Statement Arabic","category":"Arabic","desc":"Statement Arabic Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":41,"name":"Lotus Feet","category":"Feet","desc":"Lotus Feet Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":42,"name":"Mandala Feet","category":"Feet","desc":"Mandala Feet Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":43,"name":"Bridal Feet","category":"Feet","desc":"Bridal Feet Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":44,"name":"Floral Feet","category":"Feet","desc":"Floral Feet Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":45,"name":"Jewellery Feet","category":"Feet","desc":"Jewellery Feet Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":46,"name":"Paisley Feet","category":"Feet","desc":"Paisley Feet Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":47,"name":"Geometric Feet","category":"Feet","desc":"Geometric Feet Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":48,"name":"Minimal Feet","category":"Feet","desc":"Minimal Feet Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":49,"name":"Dense Feet","category":"Feet","desc":"Dense Feet Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":50,"name":"Traditional Feet","category":"Feet","desc":"Traditional Feet Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":51,"name":"Party Chic","category":"Party","desc":"Party Chic Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":52,"name":"Quick Party","category":"Party","desc":"Quick Party Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":53,"name":"Minimal Party","category":"Party","desc":"Minimal Party Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":54,"name":"Floral Party","category":"Party","desc":"Floral Party Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":55,"name":"Modern Party","category":"Party","desc":"Modern Party Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":56,"name":"Arabic Party","category":"Party","desc":"Arabic Party Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":57,"name":"Fusion Party","category":"Party","desc":"Fusion Party Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":58,"name":"Festive Party","category":"Party","desc":"Festive Party Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":59,"name":"Elegant Party","category":"Party","desc":"Elegant Party Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":60,"name":"Statement Party","category":"Party","desc":"Statement Party Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":61,"name":"Diwali Mehendi","category":"Festive","desc":"Diwali Mehendi Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":62,"name":"Teej Mehendi","category":"Festive","desc":"Teej Mehendi Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":63,"name":"Karwa Chauth","category":"Festive","desc":"Karwa Chauth Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":64,"name":"Eid Mehendi","category":"Festive","desc":"Eid Mehendi Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":65,"name":"Navratri Mehendi","category":"Festive","desc":"Navratri Mehendi Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":66,"name":"Ganesh Festival","category":"Festive","desc":"Ganesh Festival Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":67,"name":"Haldi Mehendi","category":"Festive","desc":"Haldi Mehendi Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":68,"name":"Family Function","category":"Festive","desc":"Family Function Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":69,"name":"Seasonal Floral","category":"Festive","desc":"Seasonal Floral Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":70,"name":"Celebration Motifs","category":"Festive","desc":"Celebration Motifs Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":71,"name":"Tiny Floral","category":"Minimal","desc":"Tiny Floral Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":72,"name":"Single Motif","category":"Minimal","desc":"Single Motif Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":73,"name":"Finger Detail","category":"Minimal","desc":"Finger Detail Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":74,"name":"Wrist Band","category":"Minimal","desc":"Wrist Band Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":75,"name":"Palm Accent","category":"Minimal","desc":"Palm Accent Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":76,"name":"Leaf Minimal","category":"Minimal","desc":"Leaf Minimal Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":77,"name":"Dot Work","category":"Minimal","desc":"Dot Work Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":78,"name":"Fine Mandala","category":"Minimal","desc":"Fine Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":79,"name":"Simple Arabic","category":"Minimal","desc":"Simple Arabic Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":80,"name":"Clean Lines","category":"Minimal","desc":"Clean Lines Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":81,"name":"Rose Floral","category":"Floral","desc":"Rose Floral Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":82,"name":"Lotus Floral","category":"Floral","desc":"Lotus Floral Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":83,"name":"Jasmine Floral","category":"Floral","desc":"Jasmine Floral Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":84,"name":"Sunflower Floral","category":"Floral","desc":"Sunflower Floral Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":85,"name":"Leaf & Vine","category":"Floral","desc":"Leaf & Vine Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":86,"name":"Floral Mandala","category":"Floral","desc":"Floral Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":87,"name":"Floral Trail","category":"Floral","desc":"Floral Trail Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":88,"name":"Botanical","category":"Floral","desc":"Botanical Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":89,"name":"Bloom Borders","category":"Floral","desc":"Bloom Borders Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":90,"name":"Petal Lace","category":"Floral","desc":"Petal Lace Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":91,"name":"Classic Mandala","category":"Mandala","desc":"Classic Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":92,"name":"Layered Mandala","category":"Mandala","desc":"Layered Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":93,"name":"Lotus Mandala","category":"Mandala","desc":"Lotus Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":94,"name":"Floral Mandala","category":"Mandala","desc":"Floral Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":95,"name":"Geometric Mandala","category":"Mandala","desc":"Geometric Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":96,"name":"Bridal Mandala","category":"Mandala","desc":"Bridal Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":97,"name":"Palm Mandala","category":"Mandala","desc":"Palm Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":98,"name":"Finger Mandala","category":"Mandala","desc":"Finger Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":99,"name":"Fine Mandala","category":"Mandala","desc":"Fine Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":100,"name":"Half Mandala","category":"Mandala","desc":"Half Mandala Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":101,"name":"Contemporary Lines","category":"Modern","desc":"Contemporary Lines Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":102,"name":"Geometric Modern","category":"Modern","desc":"Geometric Modern Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":103,"name":"Negative Space","category":"Modern","desc":"Negative Space Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":104,"name":"Abstract Floral","category":"Modern","desc":"Abstract Floral Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":105,"name":"Modern Bracelet","category":"Modern","desc":"Modern Bracelet Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":106,"name":"Panel Style","category":"Modern","desc":"Panel Style Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":107,"name":"Fusion Modern","category":"Modern","desc":"Fusion Modern Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":108,"name":"Minimal Modern","category":"Modern","desc":"Minimal Modern Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":109,"name":"Bold Modern","category":"Modern","desc":"Bold Modern Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":110,"name":"Fine-Line Modern","category":"Modern","desc":"Fine-Line Modern Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":111,"name":"Name Custom","category":"Custom","desc":"Name Custom Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":112,"name":"Initials Custom","category":"Custom","desc":"Initials Custom Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":113,"name":"Couple Story","category":"Custom","desc":"Couple Story Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":114,"name":"Wedding Date","category":"Custom","desc":"Wedding Date Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":115,"name":"Favourite Motif","category":"Custom","desc":"Favourite Motif Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":116,"name":"Outfit Inspired","category":"Custom","desc":"Outfit Inspired Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":117,"name":"Theme Inspired","category":"Custom","desc":"Theme Inspired Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":118,"name":"Family Motif","category":"Custom","desc":"Family Motif Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":119,"name":"Personal Symbol","category":"Custom","desc":"Personal Symbol Mehendi style with customizable details for weddings, celebrations and personal preferences."},{"id":120,"name":"Signature Custom","category":"Custom","desc":"Signature Custom Mehendi style with customizable details for weddings, celebrations and personal preferences."}];

const styleState={filter:"all",search:"",visible:5};

const state={filter:"all",search:"",visible:5,current:0};
const $=s=>document.querySelector(s);
const $$=s=>Array.from(document.querySelectorAll(s));

function waUrl(message){return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;}

function renderServices(){
  $("#serviceGrid").innerHTML=services.map((s,i)=>`
    <article class="service-card">
      <span class="service-number">${String(i+1).padStart(2,"0")}</span>
      <div class="service-symbol">${s.icon}</div>
      <h3>${s.name}</h3><p>${s.text}</p>
      <a href="${waUrl(`Hello Nayna, I would like to enquire about ${s.name}. Please share availability and details.`)}" target="_blank" rel="noopener">Enquire on WhatsApp ↗</a>
    </article>`).join("");
}

function filteredDesigns(){
  return designs.filter(d=>{
    const categoryOk=state.filter==="all"||d.category===state.filter;
    const q=state.search.trim().toLowerCase();
    const searchOk=!q||`${d.title} ${d.label} ${d.desc}`.toLowerCase().includes(q);
    return categoryOk&&searchOk;
  });
}

function renderFilters(){
  const counts={all:designs.length}; designs.forEach(d=>counts[d.category]=(counts[d.category]||0)+1);
  const labels=[["all","All"],["bridal","Bridal"],["hands","Hands"],["feet","Feet"],["traditional","Traditional"]];
  $("#filters").innerHTML=labels.map(([key,label])=>`
    <button class="filter ${state.filter===key?"active":""}" data-filter="${key}">${label} <span>${counts[key]||0}</span></button>`).join("");
  $$(".filter").forEach(btn=>btn.addEventListener("click",()=>{state.filter=btn.dataset.filter;state.visible=5;renderFilters();renderGallery();}));
}

function renderGallery(){
  const items=filteredDesigns(), visible=items.slice(0,state.visible);
  $("#galleryResult").textContent=items.length?`Showing ${visible.length} of ${items.length} designs`:`No designs found`;
  $("#galleryGrid").innerHTML=items.length?visible.map((d,index)=>`
    <button class="gallery-card" data-id="${d.id}" aria-label="Open ${d.title}">
      <img src="${d.image}" alt="${d.title}" loading="${index<4?"eager":"lazy"}">
      <div class="gallery-card-info"><div><small>${d.label}</small><b>${d.title}</b></div><span>↗</span></div>
    </button>`).join(""):
    `<div class="gallery-empty"><h3>No matching designs</h3><p>Try another category or search term.</p></div>`;
  $$("#galleryGrid .gallery-card").forEach(card=>card.addEventListener("click",()=>openDesign(Number(card.dataset.id))));
}

function openDesign(id){
  const index=designs.findIndex(d=>d.id===id); if(index<0)return;
  state.current=index; updateModal(true); openModal();
}

function updateModal(showBooking=true){
  const d=designs[state.current];
  $("#modalImage").src=d.image; $("#modalImage").alt=d.title; $("#modalCategory").textContent=d.label; $("#modalTitle").textContent=d.title;
  $("#modalBook").hidden=!showBooking;
  if(showBooking)$("#modalBook").href=waUrl(`Hello Nayna, I saw "${d.title}" in your portfolio and would like to book a similar Mehendi style. Please share availability and details.`);
}

function openMedia(src,title,label){
  $("#modalImage").src=src; $("#modalImage").alt=title; $("#modalCategory").textContent=label; $("#modalTitle").textContent=title; $("#modalBook").hidden=true; openModal();
}

function openModal(){
  $("#mediaModal").classList.add("open"); $("#mediaModal").setAttribute("aria-hidden","false"); document.body.classList.add("no-scroll");
}
function closeModal(){
  $("#mediaModal").classList.remove("open"); $("#mediaModal").setAttribute("aria-hidden","true"); document.body.classList.remove("no-scroll");
}
function moveModal(step){state.current=(state.current+step+designs.length)%designs.length;updateModal(true);}

const featuredStyles=[
  {id:1,image:"assets/collection/collection-1.webp",name:"Lotus Feet Mehendi",category:"Feet",desc:"Elegant lotus and floral detailing for beautiful foot Mehendi."},
  {id:2,image:"assets/collection/collection-2.webp",name:"Mandala Feet Pattern",category:"Feet",desc:"Traditional mandala-inspired detailing with neat borders."},
  {id:3,image:"assets/collection/collection-3.webp",name:"Bridal Full-Hand Design",category:"Bridal",desc:"Rich full-hand bridal Mehendi with detailed traditional motifs."},
  {id:4,image:"assets/collection/collection-4.webp",name:"Traditional Feet Details",category:"Traditional",desc:"Detailed floral and geometric work for a classic look."},
  {id:5,image:"assets/collection/collection-5.webp",name:"Detailed Hand & Arm Art",category:"Hands",desc:"Long hand-to-arm composition with fine traditional details."},
  {id:6,image:"assets/collection/collection-6.webp",name:"Classic Full-Hand Work",category:"Hands",desc:"Balanced floral and geometric patterns with fine linework."},
  {id:7,image:"assets/collection/collection-7.webp",name:"Floral Palm Mehendi",category:"Floral",desc:"Graceful floral palm design with delicate decorative details."},
  {id:8,image:"assets/collection/collection-8.webp",name:"Modern Hand Composition",category:"Modern",desc:"Contemporary hand design with bold panels and fine details."}
];

const categoriesForStyles={"Bridal":true,"Engagement":true,"Traditional":true,"Arabic":true,"Feet":true,"Party":true,"Festive":true,"Minimal":true,"Floral":true,"Mandala":true,"Modern":true,"Custom":true};


function renderStyleFilters(){
  const counts={all:styleIdeas.length};
  styleIdeas.forEach(s=>counts[s.category]=(counts[s.category]||0)+1);
  const cats=["all",...Object.keys(categoriesForStyles)];
  const labels={"all":"All Styles"};
  Object.keys(categoriesForStyles).forEach(k=>labels[k]=k);
  $("#styleFilters").innerHTML=cats.map(key=>`
    <button class="style-filter ${styleState.filter===key?"active":""}" data-style-filter="${key}">
      ${labels[key]} <span>${counts[key]||0}</span>
    </button>`).join("");
  $$(".style-filter").forEach(btn=>btn.addEventListener("click",()=>{
    styleState.filter=btn.dataset.styleFilter;
    styleState.visible=8;
    renderStyleFilters();
    renderStyleLibrary();
  }));
}

function filteredStyles(){
  const q=styleState.search.trim().toLowerCase();
  return styleIdeas.filter(s=>{
    const categoryOk=styleState.filter==="all"||s.category===styleState.filter;
    const searchOk=!q||`${s.name} ${s.category} ${s.desc}`.toLowerCase().includes(q);
    return categoryOk&&searchOk;
  });
}

function renderStyleLibrary(){
  const visible=featuredStyles.slice(0,8);
  $("#styleGrid").innerHTML=visible.map(s=>`
    <article class="style-card">
      <button class="style-image-card" type="button" data-style-id="${s.id}" aria-label="Open ${s.name}">
        <img src="${s.image}" alt="${s.name}" loading="lazy">
        <span class="style-image-overlay">↗</span>
      </button>
      <div class="style-card-top"><span>${s.category}</span><b>${String(s.id).padStart(2,"0")}</b></div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <a href="${waUrl(`Hello Nayna, I would like to book the ${s.name} Mehendi style. Please share availability and details.`)}" target="_blank" rel="noopener">Ask about this style ↗</a>
    </article>`).join("");
  $$(".style-image-card").forEach(card=>card.addEventListener("click",()=>{
    const s=featuredStyles.find(item=>item.id===Number(card.dataset.styleId));
    if(s)openMedia(s.image,s.name,s.category);
  }));
}

function init(){
  renderServices(); renderFilters(); renderGallery(); renderStyleLibrary(); $("#designCount").textContent="100+"; $("#year").textContent=new Date().getFullYear();
  $("#gallerySearch").addEventListener("input",e=>{state.search=e.target.value;state.visible=5;renderGallery();});
  $("#menuToggle").addEventListener("click",()=>{const nav=$("#nav"),open=nav.classList.toggle("open");$("#menuToggle").setAttribute("aria-expanded",String(open));});
  $$("#nav a").forEach(a=>a.addEventListener("click",()=>$("#nav").classList.remove("open")));
  $$("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
  $("#prevDesign").addEventListener("click",()=>moveModal(-1)); $("#nextDesign").addEventListener("click",()=>moveModal(1));
  $$(".certificate-card,.poster-card").forEach(card=>card.addEventListener("click",()=>openMedia(card.dataset.media,card.dataset.title,card.dataset.label)));
  document.addEventListener("keydown",e=>{
    if(!$("#mediaModal").classList.contains("open"))return;
    if(e.key==="Escape")closeModal();
    if(e.key==="ArrowLeft")moveModal(-1); if(e.key==="ArrowRight")moveModal(1);
  });
  $("#bookingForm").addEventListener("submit",e=>{
    e.preventDefault();
    const name=$("#customerName").value.trim(),date=$("#eventDate").value,style=$("#eventStyle").value,message=$("#customerMessage").value.trim();
    const text=`Hello Nayna,\n\nMy name is ${name}.\nI would like to enquire about Mehendi booking.\nEvent date: ${date}\nPreferred style: ${style}\n${message?`Message: ${message}`:""}\n\nPlease share availability and booking details.`;
    window.open(waUrl(text),"_blank");
  });
}
document.addEventListener("DOMContentLoaded",init);
