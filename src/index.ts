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
        const config = await axios.get(`http://${ip}/status`, {
            auth: {
                username: PLACA_USUARIO,
                password: PLACA_SENHA,
            },
        });
        if (config.status === 200)
            return {
                ip,
                config: config.data,
            };
    } catch (err) {
        console.error(`Placa: ${ip} -> ${err}`);
    }
    return {
        ip,
    };
};

const getAllConfigs = (): void => {
    const allPromises = ipRange().map(ip => getConfig(ip));
    Promise.all(allPromises).then(allResults => {
        allResults.forEach(board => saveFile(board));
    });
};

mkOutDir();
getAllConfigs();
