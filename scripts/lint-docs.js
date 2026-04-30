const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');

function lintDocs(dir) {
  const files = fs.readdirSync(dir);
  let errors = 0;
  let warnings = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      const results = lintDocs(filePath);
      errors += results.errors;
      warnings += results.warnings;
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      console.log(`Checking: ${path.relative(docsDir, filePath)}`);

      // Detect empty files
      if (content.trim().length === 0) {
        console.error(`  [ERROR] File is empty`);
        errors++;
      }

      // Detect broken markdown (very basic check for unbalanced backticks or broken links)
      const backticks = (content.match(/`/g) || []).length;
      if (backticks % 2 !== 0) {
        console.warn(`  [WARNING] Unbalanced backticks detected`);
        warnings++;
      }

      // Basic broken link check (looking for []) or [link]()
      if (/\[.*\]\(\)/.test(content)) {
        console.error(`  [ERROR] Empty link target found`);
        errors++;
      }

      // Invalid paths check (placeholder for more complex logic)
      const pathMatches = content.match(/\[.*\]\((.*)\)/g);
      if (pathMatches) {
        pathMatches.forEach(match => {
          const target = match.match(/\[.*\]\((.*)\)/)[1];
          if (target && !target.startsWith('http') && !target.startsWith('#')) {
             const targetPath = path.resolve(path.dirname(filePath), target);
             if (!fs.existsSync(targetPath)) {
                console.warn(`  [WARNING] Possible broken local link: ${target}`);
                warnings++;
             }
          }
        });
      }
    }
  });

  return { errors, warnings };
}

console.log('--- Documentation Lint ---');
const { errors, warnings } = lintDocs(docsDir);
console.log('-------------------------');
console.log(`Summary: ${errors} errors, ${warnings} warnings`);

if (errors > 0) {
  process.exit(1);
}
