const container = document.getElementById("terminalContent");

const addLine = (html) => {
    const line = document.createElement("div");
    line.className = "line";
    line.innerHTML = html;
    container.appendChild(line);
};

const sleep = ms => new Promise(res => setTimeout(res, ms));

async function typeCommand(prefix, command, speed = 100) {
    const line = document.createElement("div");
    line.className = "line";
    container.appendChild(line);

    line.innerHTML = prefix;
    for (let i = 0; i <= command.length; i++) {
    line.innerHTML = prefix + `<span class="command">${command.slice(0, i)}</span>`;
    await sleep(speed);
    }
}

async function typeStars(promptText, count) {
    const line = document.createElement("div");
    line.className = "line";
    container.appendChild(line);

    for (let i = 0; i <= count; i++) {
    line.innerHTML = `<span class="output">${promptText} ${'*'.repeat(i)}</span>`;
    await sleep(100);
    }
}

async function startSequence() {
    await typeCommand(
    `<span class="user">user</span><span class="server">@server</span><span class="prompt"> ~ $ </span>`,
    'su',
    100
    );
    await typeStars('[sudo] password for root:', 8);
    await typeCommand(
    `<span class="user">root</span><span class="server">@server</span><span class="prompt"># </span>`,
    'echo @SilenceNode',
    80
    );
    addLine(`<span class="output"><a href="https://t.me/SilenceNode">@SilenceNode</a></span>`);
    addLine(`<span class="user">root</span><span class="server">@server</span><span class="prompt"># </span><span class="cursor-blink">|</span>`);
}

startSequence();