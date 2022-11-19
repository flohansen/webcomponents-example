import fs from 'fs/promises';
import { existsSync, readdirSync, readFileSync } from 'fs';
import express from 'express';
import handlebars from 'handlebars';
import path from 'path';

const app = express();
const port = 8080;

// register all frames that contain a template.hbs file
const frameNames = readdirSync(path.join(__dirname, '..', 'src', '_frames'));
for (const frameName of frameNames) {
    const templateFileName = path.join(__dirname, '..', 'src', '_frames', frameName, 'template.hbs');

    if (existsSync(templateFileName)) {
        const templateSource = readFileSync(templateFileName, { encoding: 'utf8' });
        handlebars.registerPartial(frameName, templateSource);
    }
}

// register all components that contain a template.hbs file
const componentNames = readdirSync(path.join(__dirname, '..', 'src', '_components'));
for (const componentName of componentNames) {
    const templateFileName = path.join(__dirname, '..', 'src', '_components', componentName, 'template.hbs');

    if (existsSync(templateFileName)) {
        const templateSource = readFileSync(templateFileName, { encoding: 'utf8' });
        handlebars.registerPartial(componentName, templateSource);
    }
}

app.use(express.static('server/public'));

app.get('/', async (_req, res) => {
    const indexFileName = path.join(__dirname, 'index.hbs');
    const indexFile = await fs.readFile(indexFileName, { encoding: 'utf8' });
    const template = handlebars.compile(indexFile);
    res.send(template({}));
});

app.listen(port, () => {
    console.log(`development server started at http://localhost:${port}`);
});
