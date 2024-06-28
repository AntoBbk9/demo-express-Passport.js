const deleteForm= document.querySelector('.deleteForm');

        


deleteForm.addEventListener('click', async () => {

    const confirmationDelete = confirm("Voulez-vous supprimer cet utilisateur?");

            if (confirmationDelete) {
              
              window.location.href = "/auth/admin/users";
            } else {
              console.error("error of delete");
            }
          
  
});