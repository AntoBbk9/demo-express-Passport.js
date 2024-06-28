const deleteForm= document.querySelector('.deleteForm');

        


deleteForm.addEventListener('click', async () => {

    const confirmationDelete = confirm("Voulez-vous supprimer cet utilisateur?");

            if (confirmationDelete) {
              
              window.location.href = "/auth/admin/users";
              console.log("suprimer");
            } else {
              console.error("error of delete");
              console.log("merci");
            }
          
  
});