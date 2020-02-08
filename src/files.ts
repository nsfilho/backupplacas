import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { BoardConfig } from './types';

const OUTPUT_DIR = './out';

export const mkOutDir = (): void => {
    if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR);
};

export const saveFile = (board: BoardConfig): void => {
    const pathFile = join(OUTPUT_DIR, `${board.ip.replace('.', '_')}.txt`);
    console.log(`Saving ${board.ip} to file: ${pathFile}`);
    writeFileSync(pathFile, JSON.stringify(board.config, null, 4));
};
