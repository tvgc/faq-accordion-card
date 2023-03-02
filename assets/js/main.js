// Seleciona todos os elementos com a classe "accordion-item" e armazena em uma variável
const itemsFromAccordion = document.querySelectorAll('.accordion-item');

// Itera sobre todos os itens selecionados
itemsFromAccordion.forEach(item => {
  // Adiciona um evento de clique em cada item
  item.addEventListener('click', event => {
    // Verifica se o item clicado já possui a classe "selected"
    const isSelected = event.currentTarget.classList.contains('selected');

    // Se já tiver a classe "selected", remove-a
    if (isSelected) {
      event.currentTarget.classList.remove('selected');
    } else {
      // Se não tiver a classe "selected", adiciona-a e remove de todos os outros elementos
      itemsFromAccordion.forEach(otherItem => {
        otherItem.classList.remove('selected');
      });
      event.currentTarget.classList.add('selected');
    }
  });
});
