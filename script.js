
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;
    alert(`Merci, ${surname} ${name}! Votre demande est bien reçue. Nous vous contacterons au ${phone}.`);
});
