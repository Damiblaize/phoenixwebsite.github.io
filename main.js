


window.addEventListener('DOMContentLoaded', () => {
  // Waitlist form handling
  document.getElementById('waitlist-join-btn').addEventListener('click', async function () {
    const email = document.getElementById('waitlist-email').value;
    const messageEl = document.getElementById('waitlist-message');

    if (!email) {
      messageEl.textContent = 'Please enter a valid email.';
      messageEl.classList.remove('waitlist-hidden');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mvgrgnqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        messageEl.textContent = '🎉 You’ve been added to the waitlist!';
        messageEl.classList.remove('waitlist-hidden');
        document.getElementById('waitlist-email').value = '';
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      messageEl.textContent = '❌ Something went wrong. Please try again.';
      messageEl.classList.remove('waitlist-hidden');
    }
  });

  // FAQ toggle
  const faqs = document.querySelectorAll('.faq');
  faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
      faqs.forEach(f => f.classList.remove('active'));
      faq.classList.toggle('active');
    });
  });
});

   
   
    const toast = document.createElement('div');
    toast.innerText = "🔥 Welcome to the Phoenix Ecosystem!";
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(255, 115, 0, 0.9)',
      color: '#fff',
      padding: '12px 20px',
      borderRadius: '8px',
      fontSize: '14px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      zIndex: 9999,
      transition: 'opacity 0.5s',
      opacity: '1'
    });
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    }, 4000); // disappears after 4 seconds
  

 
  


 