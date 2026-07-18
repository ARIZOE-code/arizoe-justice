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
