import * as fs from 'fs';

export async function listOfFiles() {
  return `List files: ${await fs.readdirSync('src')}`;
}
