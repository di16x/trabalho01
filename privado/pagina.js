function atualizaTotal() {
        
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            let total = 0;

           
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    
                    total += parseFloat(checkbox.getAttribute('data-price'));
                }
            });

           
            document.getElementById('total').textContent = total.toFixed(2);
        }
function alerta() {
            window.alert('Compra realizada com sucesso!');  
}               
   
