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
