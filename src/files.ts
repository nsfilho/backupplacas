import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { BoardConfig } from './types';

const options = {
    outputDir: '',
};

export const mkOutDir = (path = './out'): void => {
    options.outputDir = path;
    if (!existsSync(path)) mkdirSync(path);
};

export const saveFile = (board: BoardConfig): void => {
    const pathFile = join(options.outputDir, `${board.ip.replace('.', '_')}.txt`);
    console.log(`Placa[${board.ip}]: Salvando no arquivo: ${pathFile}`);
    if (board.config !== undefined) writeFileSync(pathFile, JSON.stringify(board.config, null, 4));
};
