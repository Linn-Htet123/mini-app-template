#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// KBZ Logo
const kbzLogo = `
                                                      
       ,--.                                    ,----, 
   ,--/  /|            ,---,.                .'   .\`| 
,---,': / '          ,'  .'  \\            .'   .'   ; 
:   : '/ /         ,---.' .' |          ,---, '    .' 
|   '   ,          |   |  |: |          |   :     ./  
'   |  /           :   :  :  /          ;   | .'  /   
|   ;  ;           :   |    ;           \`---' /  ;    
:   '   \\          |   :     \\            /  ;  /     
|   |    '         |   |   . |           ;  /  /--,   
'   : |.  \\        '   :  '; |          /  /  / .\`|   
|   | '_\\.'        |   |  | ;         ./__;       :   
'   : |            |   :   /          |   :     .'    
;   |,'            |   | ,'           ;   |  .'       
'---'              \`----'             \`---'           

        KBZ mini app teamplate (React JS + TS)

`;

console.log(kbzLogo);

// Project name and template URL
const projectName = process.argv[2] || "mini-app-template";
const templateUrl = "https://github.com/Linn-Htet123/mini-app-template";

// Clone the template
execSync(`npx degit ${templateUrl} ${projectName}`, { stdio: "inherit" });
console.log(`Project ${projectName} created successfully!`);

// Path to index.html
const indexPath = path.join(projectName, "index.html");

// Read index.html content
let content = fs.readFileSync(indexPath, "utf8");

// Replace the title with the project name
content = content.replace(
  /<title>.*<\/title>/,
  `<title>${projectName}</title>`
);

// Write the updated content back to index.html
fs.writeFileSync(indexPath, content);
