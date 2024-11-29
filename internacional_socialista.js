async function enviarScript(scriptText, delay = 1000) {
    const lines = scriptText.split('\n').map(line => line.trim()).filter(line => line);

    const main = document.querySelector("#main");
    const textarea = main.querySelector(`div[contenteditable="true"]`);

    if (!textarea) {
        throw new Error("Não há uma conversa aberta");
    }

    for (const line of lines) {
        console.log(line);
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        await new Promise(resolve => setTimeout(resolve, 100));

        const sendButton = main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`);
        sendButton.click();

        if (lines.indexOf(line) !== lines.length - 1) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    return lines.length;
}

const script = `
De pé, ó vítimas da fome
De pé, famélicos da terra
Da ideia a chama já consome
A crosta bruta que a soterra
Cortai o mal bem pelo fundo
De pé, não mais senhores
Se nada somos em tal mundo
Sejamos tudo, ó produtores

Bem unidos façamos
Nesta luta final
Uma terra sem amos
A Internacional

Senhores, patrões, chefes supremos
Nada esperamos de nenhum
Sejamos nós que conquistemos
A terra-mãe livre e comum
Para não ter protestos vãos
Para sair desse antro estreito
Façamos nós por nossas mãos
Tudo o que a nós nos diz respeito

Bem unidos façamos
Nesta luta final
Uma terra sem amos
A Internacional

Crime de rico a lei o cobre
O Estado esmaga o oprimido
Não há direitos para o pobre
Ao rico tudo é permitido
À opressão não mais sujeitos
Somos iguais todos os seres
Não mais deveres sem direitos
Não mais direitos sem deveres

Bem unidos façamos
Nesta luta final
Uma terra sem amos
A Internacional

Abomináveis na grandeza
Os reis da mina e da fornalha
Edificaram a riqueza
Sobre o suor de quem trabalha
Todo o produto de quem sua
A corja rica o recolheu
Querendo que ela o restitua
O povo quer só o que é seu

Bem unidos façamos
Nesta luta final
Uma terra sem amos
A Internacional

Fomos de fumo embriagados
Paz entre nós, guerra aos senhores
Façamos greve de soldados
Somos irmãos, trabalhadores
Se a raça vil, cheia de galas
Nos quer à força canibais
Logo verá que as nossas balas
São para os nossos generais

Bem unidos façamos
Nesta luta final
Uma terra sem amos
A Internacional

Pois somos do povo ativos
Trabalhador forte e fecundo
Pertence a Terra aos produtivos
Ó parasitas, deixai o mundo
Ó parasita que te nutres
Do nosso sangue a gotejar
Se nos faltarem os abutres
Não deixa o Sol de fulgurar

Bem unidos façamos
Nesta luta final
Uma terra sem amos
A Internacional

`;

enviarScript(script, 2000)
    .then(e => console.log(`Código finalizado, ${e} mensagens enviadas`))
    .catch(console.error);
