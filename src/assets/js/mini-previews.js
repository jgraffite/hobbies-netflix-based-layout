
export const buildMiniPreviews = () => {
    var timeout;
    const miniPreviewbox = document.querySelector('#mini-preview');
    document.querySelectorAll('.tv-shows-carousel__slider-wrapper__slider__item').forEach(item => {
        item.addEventListener('mouseover', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                miniPreviewbox.classList.remove('showed');
                const rect = item.getBoundingClientRect();
                const vWidth = window.scrollX;
                const vHeight = window.scrollY;
        
                const left = (rect.left + vWidth);
                const top = (rect.top + vHeight);

                const width = rect.width + (rect.width * 0.5);
                // const right = (left+width);

                // console.log('left = '+left, 'window.screen', window.screen, 'width='+width, '(window.screen.availWidth + width)='+(window.screen.availWidth + width));
                // if (right == window.screen.availWidth) {
                //     left = window.screen.availWidth - (width);
                // }

                miniPreviewbox.style.width = `${width}px`;
    
                miniPreviewbox.classList.add('showed');
                miniPreviewbox.style.top = `${top}px`;
                miniPreviewbox.style.left = `${left}px`;
            }, 500)
        });

        item.addEventListener('mouseleave', () => {
            clearTimeout(timeout);  
        });
    });

    miniPreviewbox.addEventListener('mouseleave', () => {
        miniPreviewbox.classList.remove('showed');
        setTimeout(() => {
            miniPreviewbox.style.top = `-100vw`;
            miniPreviewbox.style.left = `-100vh`;
        }, 500)
    });
}

// (() => {
//     buildMiniPreviews();
// })();