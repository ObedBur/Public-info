function redirectWhatsApp() {
      const phone = "243974927593";
      const message = encodeURIComponent("Bonjour, je suis intéressé par vos solutions numériques.");
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    }

    function redirectEmail() {
      const email = "obedburindi@gmail.com";
      const subject = encodeURIComponent("Demande d'information");
      const body = encodeURIComponent("Bonjour, je souhaite en savoir plus sur vos services.");
      window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    }