document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

// Multilingual manual access (FR / EN / AR) on every localized home page.
const manualSection=document.querySelector('#manual');
if(manualSection){
  const cta=manualSection.querySelector('.cta');
  if(cta && !manualSection.querySelector('.manual-languages')){
    const lang=document.documentElement.lang || 'en';
    const labels={
      en:{title:'Manual languages',fr:'French illustrated PDF',en:'English manual',ar:'Arabic manual'},
      fr:{title:'Langues du manuel',fr:'Manuel français illustré (PDF)',en:'Manuel en anglais',ar:'Manuel en arabe'},
      ar:{title:'لغات الدليل',fr:'الدليل الفرنسي المصور (PDF)',en:'الدليل باللغة الإنجليزية',ar:'الدليل باللغة العربية'}
    };
    const t=labels[lang] || labels.en;
    const box=document.createElement('div');
    box.className='manual-languages';
    box.style.cssText='margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;align-items:center';
    box.innerHTML=`<strong style="width:100%;margin-bottom:2px">${t.title}</strong>
      <a class="btn secondary" href="WorldGNSS_Field_Manuel_Terrain_FR_Illustre_Complet_1.1.pdf" target="_blank" rel="noopener">FR — ${t.fr}</a>
      <a class="btn secondary" href="manual-en.html">EN — ${t.en}</a>
      <a class="btn secondary" href="manual-ar.html">AR — ${t.ar}</a>`;
    cta.insertAdjacentElement('afterend',box);
  }
}
