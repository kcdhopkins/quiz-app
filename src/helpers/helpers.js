export const randomizer = arr =>{
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomIndexItem = arr.splice(randomIndex, 1);
    return randomIndexItem;
}