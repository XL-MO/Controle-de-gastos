document.addEventListener('DOMContentLoaded', function() {
    // Exibe a tela do Dashboard inicialmente
    showDashboard();

    // Adiciona eventos de clique para os botões que abrem as telas de adicionar despesa, receita e despesa do cartão
    document.getElementById('btnAddExpense').addEventListener('click', function() {
        showAddExpense();
    });

    document.getElementById('btnAddIncome').addEventListener('click', function() {
        showAddIncome();
    });

    document.getElementById('btnAddCreditExpense').addEventListener('click', function() {
        showAddCreditExpense();
    });

    // Adiciona um evento de escuta para o formulário de adicionar despesas
    document.getElementById('form-add-expense').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Captura os valores dos campos do formulário de despesas
        let description = document.getElementById('description-expense').value;
        let amount = parseFloat(document.getElementById('amount-expense').value);
        let date = document.getElementById('date-expense').value;

        // Atualiza o total de despesas no dashboard
        let totalDespesasElement = document.getElementById('totalDespesas');
        let totalDespesas = parseFloat(totalDespesasElement.innerText.replace('R$ ', '').replace(',', '.'));
        totalDespesas += amount;
        totalDespesasElement.innerText = `R$ ${totalDespesas.toFixed(2).replace('.', ',')}`;

        // Atualiza o saldo atual no dashboard (exemplo simples de subtração)
        let saldoAtualElement = document.getElementById('saldoAtual');
        let saldoAtual = parseFloat(saldoAtualElement.innerText.replace('R$ ', '').replace(',', '.'));
        saldoAtual -= amount;
        saldoAtualElement.innerText = `R$ ${saldoAtual.toFixed(2).replace('.', ',')}`;

        // Limpa os campos do formulário
        document.getElementById('description-expense').value = '';
        document.getElementById('amount-expense').value = '';
        document.getElementById('date-expense').value = '';

        // Exibe novamente o dashboard após adicionar a despesa
        showDashboard();
    });

    // Adiciona um evento de escuta para o formulário de adicionar receitas
    document.getElementById('form-add-income').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Captura os valores dos campos do formulário de receitas
        let description = document.getElementById('description-income').value;
        let amount = parseFloat(document.getElementById('amount-income').value);
        let date = document.getElementById('date-income').value;

        // Atualiza o total de receitas no dashboard
        let totalReceitasElement = document.getElementById('totalReceitas');
        let totalReceitas = parseFloat(totalReceitasElement.innerText.replace('R$ ', '').replace(',', '.'));
        totalReceitas += amount;
        totalReceitasElement.innerText = `R$ ${totalReceitas.toFixed(2).replace('.', ',')}`;

        // Atualiza o saldo atual no dashboard (exemplo simples de adição)
        let saldoAtualElement = document.getElementById('saldoAtual');
        let saldoAtual = parseFloat(saldoAtualElement.innerText.replace('R$ ', '').replace(',', '.'));
        saldoAtual += amount;
        saldoAtualElement.innerText = `R$ ${saldoAtual.toFixed(2).replace('.', ',')}`;

        // Limpa os campos do formulário
        document.getElementById('description-income').value = '';
        document.getElementById('amount-income').value = '';
        document.getElementById('date-income').value = '';

        // Exibe novamente o dashboard após adicionar a receita
        showDashboard();
    });

    // Adiciona um evento de escuta para o formulário de adicionar despesas do cartão de crédito
    document.getElementById('form-add-credit-expense').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Captura os valores dos campos do formulário de despesas do cartão de crédito
        let description = document.getElementById('description-credit').value;
        let amount = parseFloat(document.getElementById('amount-credit').value);
        let date = document.getElementById('date-credit').value;

        // Atualiza o total de despesas no dashboard (exemplo simples de adição)
        let totalDespesasElement = document.getElementById('totalDespesas');
        let totalDespesas = parseFloat(totalDespesasElement.innerText.replace('R$ ', '').replace(',', '.'));
        totalDespesas += amount;
        totalDespesasElement.innerText = `R$ ${totalDespesas.toFixed(2).replace('.', ',')}`;

        // Atualiza o saldo atual no dashboard (exemplo simples de subtração)
        let saldoAtualElement = document.getElementById('saldoAtual');
        let saldoAtual = parseFloat(saldoAtualElement.innerText.replace('R$ ', '').replace(',', '.'));
        saldoAtual -= amount;
        saldoAtualElement.innerText = `R$ ${saldoAtual.toFixed(2).replace('.', ',')}`;

        // Limpa os campos do formulário
        document.getElementById('description-credit').value = '';
        document.getElementById('amount-credit').value = '';
        document.getElementById('date-credit').value = '';

        // Exibe novamente o dashboard após adicionar a despesa do cartão de crédito
        showDashboard();
    });

    // Função para mostrar a tela de adicionar despesas e ocultar outras telas
    function showAddExpense() {
        document.getElementById('dashboard').classList.remove('active');
        document.getElementById('add-expense').classList.add('active');
        document.getElementById('add-income').classList.remove('active');
        document.getElementById('add-credit-expense').classList.remove('active');
    }

    // Função para mostrar a tela de adicionar receitas e ocultar outras telas
    function showAddIncome() {
        document.getElementById('dashboard').classList.remove('active');
        document.getElementById('add-expense').classList.remove('active');
        document.getElementById('add-income').classList.add('active');
        document.getElementById('add-credit-expense').classList.remove('active');
    }

    // Função para mostrar a tela de adicionar despesas do cartão de crédito e ocultar outras telas
    function showAddCreditExpense() {
        document.getElementById('dashboard').classList.remove('active');
        document.getElementById('add-expense').classList.remove('active');
        document.getElementById('add-income').classList.remove('active');
        document.getElementById('add-credit-expense').classList.add('active');
    }

    // Função para mostrar a tela do Dashboard e ocultar outras telas
    function showDashboard() {
        document.getElementById('dashboard').classList.add('active');
        document.getElementById('add-expense').classList.remove('active');
        document.getElementById('add-income').classList.remove('active');
        document.getElementById('add-credit-expense').classList.remove('active');
    }
});
