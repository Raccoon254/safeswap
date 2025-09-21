'use server';

import fs from 'fs';
import path from 'path';
import mjml from 'mjml';
import handlebars from 'handlebars';

const readTemplate = (templateName) => {
  return fs.readFileSync(path.join(process.cwd(), 'emails', `${templateName}.mjml`), 'utf8');
};

export const renderEmail = async (templateName, data) => {
  const mjmlTemplate = readTemplate(templateName);
  const template = handlebars.compile(mjmlTemplate);
  const mjmlContent = template(data);
  const { html } = mjml(mjmlContent);
  return html;
};