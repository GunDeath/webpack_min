import * as $ from 'jquery'

function createAnalitics() {
    let counter = 0;
    let isDestroyed = false;

    const listener = () => counter++;

    $(document).on('click', listener)

    return{
        destroy(){
            $(document).off('click', listener);
            isDestroyed = true;
        },
        getClicks(){
            isDestroyed ? console.log(`Analitics destroyed. Total clicks: ${counter}`) : console.log('Analitics in progress');
            return console.log("Count: ", counter)
        }
    }
}

window.analitycs = createAnalitics();