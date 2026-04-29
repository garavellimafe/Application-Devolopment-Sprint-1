document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let dataNascimento = document.getElementById("dataNascimento").value;
    let rua = document.getElementById("rua").value.trim();
    let numero = document.getElementById("numero").value.trim();
    let bairro = document.getElementById("bairro").value.trim();
    let cidade = document.getElementById("cidade").value.trim();
    let estado = document.getElementById("estado").value;
    let cnh = document.getElementById("cnh").value.trim();
    let categoriaCNH = document.getElementById("categoriaCNH").value;
    let validadeCNH = document.getElementById("validadeCNH").value;
    let experiencia = document.getElementById("experiencia").value;
    let aceite = document.getElementById("aceite").checked;
    let mensagem = document.getElementById("mensagem");

    // Validações
    if (!nome || !email || !telefone || !cpf || !dataNascimento || !rua || !numero || !bairro || !cidade || !estado || !cnh || !categoriaCNH || !validadeCNH || !experiencia) {
        exibirMensagem("Por favor, preencha todos os campos obrigatórios.", "erro");
        return;
    }

    if (!aceite) {
        exibirMensagem("Você precisa aceitar os termos e condições para continuar.", "erro");
        return;
    }

    // Validar CPF (formato básico)
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) {
        exibirMensagem("CPF inválido. Use o formato: XXX.XXX.XXX-XX", "erro");
        return;
    }

    // Validar CNH (apenas números)
    if (!/^\d+$/.test(cnh)) {
        exibirMensagem("CNH deve conter apenas números.", "erro");
        return;
    }

    // Se passou em todas as validações
    exibirMensagem("Cadastro realizado com sucesso! Bem-vindo à plataforma VegaTrack.", "sucesso");
    
    // Limpar formulário após sucesso
    setTimeout(function() {
        document.getElementById("formCadastro").reset();
        mensagem.classList.remove("show");
    }, 2000);
});

function exibirMensagem(texto, tipo) {
    let mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.classList.remove("sucesso", "erro");
    mensagem.classList.add(tipo, "show");
    
    // Scroll para a mensagem
    mensagem.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
