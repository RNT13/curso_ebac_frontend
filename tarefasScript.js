$(document).ready(function() {
    $('#toDoList').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nomeDaTarefa').val();
        const dataTarefa = $('#dataDaTarefa').val();

        if (nomeTarefa && dataTarefa) {
            const itemDaLista = $(`
                <li>
                    <input type="checkbox" class="completeTask">
                    <span>${nomeTarefa} - ${dataTarefa}</span>
                    <button class="removeTask">Remover</button>
                </li>
            `);

            itemDaLista.appendTo('.listaDeTarefas ul');

            this.reset();
        }
    });

    $(document).on('click', '.removeTask', function() {
        $(this).parent('li').remove();
    });

    $(document).on('change', '.completeTask', function() {
        const tarefa = $(this).siblings('span');
        if (this.checked) {
            tarefa.css('text-decoration', 'line-through');
        } else {
            tarefa.css('text-decoration', 'none');
        }
    });

    $(document).on('click', '.listaDeTarefas ul span', function() {
        const checkbox = $(this).siblings('.completeTask');
        checkbox.prop('checked', !checkbox.prop('checked'));
        $(this).css('text-decoration', checkbox.prop('checked') ? 'line-through' : 'none');
    });
});
