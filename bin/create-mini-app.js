#!/usr/bin/env node

import { execSync } from "child_process";
import path from "path";

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
const projectName = process.argv[2] || "mini-app-template";
const templateUrl = "https://github.com/Linn-Htet123/mini-app-template";

execSync(`npx degit ${templateUrl} ${projectName}`, { stdio: "inherit" });
console.log(`Project ${projectName} created successfully!`);
