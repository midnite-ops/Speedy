export function randomId(){
    const combo = ['0','1','2','3','4','5','6','7','8','9', '$', '@','#']
    let id = '';
    const idLimit = 6;
    for(let i = 0; i <= idLimit; i++){
        const random = Math.floor(Math.random() * combo.length);
        id += combo[random];
    }
    return id
}