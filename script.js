document.querySelectorAll('[data-tab]').forEach(tab=>{
  tab.addEventListener('click', e=>{
    if(tab.hasAttribute('data-soon')){
      e.preventDefault();
      alert('यह मॉड्यूल अभी निर्माणाधीन है — बैकएंड जुड़ने के बाद सक्रिय होगा।');
      return;
    }
    document.querySelectorAll('[data-tab]').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// simple clock in top strip
function updateClock(){
  const el = document.getElementById('liveClock');
  if(!el) return;
  const now = new Date();
  el.textContent = 'स्थिति: सक्रिय — ' + now.toLocaleTimeString('hi-IN', {hour:'2-digit',minute:'2-digit'});
}
updateClock();
setInterval(updateClock, 30000);

// ---------- Public Problem Portal (complaint.html) ----------
document.querySelectorAll('.upload-box').forEach(box=>{
  const targetId = box.getAttribute('data-target');
  const input = document.getElementById(targetId);
  if(!input) return;
  box.addEventListener('click', ()=> input.click());
  input.addEventListener('change', ()=>{
    const chip = document.getElementById('chip_' + targetId.split('_')[1]);
    if(input.files.length && chip){
      chip.textContent = '✓ ' + input.files[0].name;
    }
  });
});

const complaintForm = document.getElementById('complaintForm');
if(complaintForm){
  complaintForm.addEventListener('submit', function(e){
    e.preventDefault();
    const caseId = 'ARIZOE/PP/' + Math.floor(1000 + Math.random()*9000);
    document.getElementById('successCaseId').textContent = 'केस दर्ज हो गया — ' + caseId;
    document.getElementById('successBox').style.display = 'block';
    document.getElementById('successBox').scrollIntoView({behavior:'smooth', block:'center'});
    complaintForm.reset();
    document.querySelectorAll('.file-chip').forEach(c=>c.textContent='');
  });
}

// ---------- Campaign Center (campaigns.html) ----------
document.querySelectorAll('.filter-chip').forEach(chip=>{
  chip.addEventListener('click', ()=>{
    document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.getAttribute('data-filter');
    document.querySelectorAll('.campaign-card, .pil-card').forEach(card=>{
      const type = card.getAttribute('data-type');
      if(!type) return;
      card.style.display = (filter === 'all' || filter === type) ? '' : 'none';
    });
  });
});

document.querySelectorAll('.support-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const countEl = btn.closest('.campaign-card').querySelector('.count-num');
    if(!countEl) return;
    const current = parseInt(countEl.textContent.replace(/,/g,''), 10) || 0;
    countEl.textContent = (current + 1).toLocaleString('en-IN');
    btn.textContent = 'समर्थन दर्ज हुआ ✓';
    btn.disabled = true;
    btn.style.opacity = '0.7';
  });
});

// ---------- PIL Center (pil.html) ----------
const draftBtn = document.getElementById('draftRequestBtn');
if(draftBtn){
  draftBtn.addEventListener('click', ()=>{
    draftBtn.textContent = 'अनुरोध दर्ज हुआ ✓ — जल्द संपर्क होगा';
    draftBtn.disabled = true;
    draftBtn.style.opacity = '0.7';
  });
}
