
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>___  ___                    _ _           _     
|  \/  |                   | | |         | |    
| .  . |_   _ _ __ __ _  __| | |     __ _| |__  
| |\/| | | | | '__/ _` |/ _` | |    / _` | '_ \ 
| |  | | |_| | | | (_| | (_| | |___| (_| | |_) |
\_|  |_/\__,_|_|  \__,_|\__,_\_____/\__,_|_.__/ 
                                                
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
