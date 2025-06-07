


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
   document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.question');
      const toggle = item.querySelector('.toggle');
  
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
  
        // Close all FAQs
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          const t = i.querySelector('.toggle');
          if (t) t.textContent = '+';
        });
  
        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          if (toggle) toggle.textContent = '−';
        }
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
  

 
  


 