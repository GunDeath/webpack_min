import * as $ from 'jquery'

function createAnalitics(): object {
    let counter = 0;
    let isDestroyed: boolean = false;

    const listener = (): number => counter++;

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

window['analytics'] = createAnalitics();