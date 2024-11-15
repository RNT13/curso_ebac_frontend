function Computador(placaMae, cpu, ram, hdd, gpu) {
    if (!placaMae || !cpu || !ram || !hdd || !gpu) {
        throw new Error("Todos os componentes são obrigatórios para criar um Computador.");
    }
    this.placaMae = placaMae;
    this.cpu = cpu;
    this.ram = ram;
    this.hdd = hdd;
    this.gpu = gpu;
}

function Pc(placaMae, cpu, ram, hdd, gpu, fonte, cooler, teclado, mouse, monitor, gabinete, cabos) {
    Computador.call(this, placaMae, cpu, ram, hdd, gpu);
    this.fonte = fonte;
    this.cooler = cooler;
    this.teclado = teclado;
    this.mouse = mouse;
    this.monitor = monitor;
    this.gabinete = gabinete;
    this.cabos = cabos;
}

Pc.prototype = Object.create(Computador.prototype);
Pc.prototype.constructor = Pc;

function Notebook(placaMae, cpu, ram, hdd, gpu, bateria, fonteDeAlimentacao, leitorDeCartaoSd) {
    Computador.call(this, placaMae, cpu, ram, hdd, gpu);
    this.bateria = bateria;
    this.fonteDeAlimentacao = fonteDeAlimentacao;
    this.leitorDeCartaoSd = leitorDeCartaoSd;
}

Notebook.prototype = Object.create(Computador.prototype);
Notebook.prototype.constructor = Notebook;

Computador.prototype.descrever = function () {
    return `
Computador:
- Placa-mãe: ${this.placaMae}
- CPU: ${this.cpu}
- RAM: ${this.ram}
- HDD: ${this.hdd}
- GPU: ${this.gpu}`;
};

Pc.prototype.descrever = function () {
    return `
PC:
- Placa-mãe: ${this.placaMae}
- CPU: ${this.cpu}
- RAM: ${this.ram}
- HDD: ${this.hdd}
- GPU: ${this.gpu}
- Fonte: ${this.fonte}
- Cooler: ${this.cooler}
- Teclado: ${this.teclado}
- Mouse: ${this.mouse}
- Monitor: ${this.monitor}
- Gabinete: ${this.gabinete}
- Cabos: ${this.cabos}`;
};

Notebook.prototype.descrever = function () {
    return `
Notebook:
- Placa-mãe: ${this.placaMae}
- CPU: ${this.cpu}
- RAM: ${this.ram}
- HDD: ${this.hdd}
- GPU: ${this.gpu}
- Bateria: ${this.bateria}
- Fonte de Alimentação: ${this.fonteDeAlimentacao}
- Leitor de Cartão SD: ${this.leitorDeCartaoSd}`;
};

const computador1 = new Pc(
    "Gigabyte B760 Aorus Elite AX",
    "Intel Core i7-13700K",
    "Corsair Vengeance DDR5 32GB (2x16GB)",
    "Samsung 990 Pro NVMe SSD",
    "NVIDIA GeForce RTX 4070 Ti",
    "Corsair RM850e 850W",
    "Noctua NH-D15 (air cooler premium)",
    "Logitech MX Keys",
    "Logitech MX Master 3S",
    "Dell UltraSharp U2723QE",
    "NZXT H7 Flow",
    "Cabo de força"
);

const computador2 = new Notebook(
    "Dell XPS 15 (9520)",
    "Intel Core i7-13700H",
    "Kingston Fury Impact DDR5 32GB (2x16GB)",
    "Samsung 990 Pro NVMe SSD",
    "NVIDIA GeForce RTX 4060",
    "Apple MacBook Pro 14",
    "Apple USB-C Power Adapter (96W)",
    "Dell XPS 15"
);

const computador3 = new Notebook (
    "Asus ROG Zephyrus G14",
    "AMD Ryzen 9 6900HS",
    "Corsair DDR5 32GB (2x16GB)",
    "Kingston KC3000 NVMe 1TB",
    "AMD Radeon RX 6700S",
    "76Wh Li-ion",
    "USB-C 100W Power Adapter",
    "Built-in High-Speed Card Reader"
);

console.log(computador1.descrever());
console.log(computador2.descrever());
console.log(computador3.descrever());