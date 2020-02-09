import program from 'commander';
import axios from 'axios';
import { Config, BoardConfig } from './types';
import { mkOutDir, saveFile } from './files';

const PLACA_USUARIO = process.env.PLACA_USUARIO || 'admin';
const PLACA_SENHA = process.env.PLACA_SENHA || 'password';

const ipRange = (): string[] => {
    const ips: string[] = [];
    for (let x = 220; x < 230; x += 1) ips.push(`10.15.20.${x}`);
    return ips;
};

const getConfig = async (ip: string): Promise<BoardConfig> => {
    try {
        console.log(`Placa[${ip}]: obtendo informações!`);
        const config = await axios.get(`http://${ip}/status`, {
            auth: {
                username: PLACA_USUARIO,
                password: PLACA_SENHA,
            },
            timeout: 2000,
        });
        console.log(`Placa[${ip}]: pronto! (${config.status})`);
        if (config.status === 200)
            return {
                ip,
                config: config.data,
            };
    } catch (err) {
        console.error(`Placa[${ip}]: Erro -> ${err}`);
    }
    return {
        ip,
    };
};

const getAllConfigs = async (): Promise<void> => {
    const allPromises = ipRange().map(ip => getConfig(ip));
    const allResults = await Promise.all(allPromises);
    allResults.forEach(board => saveFile(board));
};

program.helpOption('-h, --help', 'opções de ajuda').option('-o, --output-dir <path>', 'diretorio de saida (backup)');

program
    .command('dump', {
        isDefault: true,
    })
    .action(async () => {
        const outputDir = program.outputDir || 'out';
        mkOutDir(outputDir);
        await getAllConfigs();
    });

program.parse(process.argv);
