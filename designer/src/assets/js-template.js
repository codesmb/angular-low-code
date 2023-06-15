document.addEventListener('DOMContentLoaded', function() {
    const widgets = {};

    function updateChanges() {
        for (const key in widgets) {
            if (widgets[key].type === 'inputText') {
                widgets[key].elem.value = widgets[key].text;
            }

            if (widgets[key].type === 'image') {
                widgets[key].elem.src = widgets[key].src;
            }
        }
    }

    function createElementInputText(id, text, placeholder, click, callback) {
        const input = document.createElement('input');

        input.setAttribute('type', 'text');
        input.setAttribute('custom-id', id);
        input.setAttribute('value', text);
        if (placeholder) {
            input.setAttribute('placeholder', placeholder);
        }
        
        document.body.appendChild(input);
    
        widgets[id] = {
            type: 'inputText',
            text: text || '',
            click: click,
            callback: callback,
            elem: input
        };
        
        input.addEventListener('click', () => {
            widgets[id].click();
            updateChanges();
        });

        input.addEventListener('input', function() {
            widgets[id].text = this.value;
            widgets[id].callback();
            updateChanges();
        });
    }

    function createElementImage(id, src, click, width, height) {
        const img = document.createElement('img');

        img.setAttribute('custom-id', id);
        img.setAttribute('src', src);

        if (width) {
            img.setAttribute('width', width);
        }

        if (height) {
            img.setAttribute('height', height);
        }
        
        document.body.appendChild(img);

        widgets[id] = {
            type: 'image',
            src: src,
            click: click,
            elem: img
        };

        img.addEventListener('click', () => {
            widgets[id].click();
            updateChanges();
        });
    }

    function createElementButton(id, text, backgroundColor, click) {
        const button = document.createElement('button');

        button.setAttribute('type', 'button');
        button.setAttribute('custom-id', id);
        button.textContent = text || '';

        if (backgroundColor) {
            button.style.backgroundColor = backgroundColor;
        }
        
        document.body.appendChild(button);

        widgets[id] = {
            type: 'button',
            click: click,
            elem: button
        };

        button.addEventListener('click', () => {
            widgets[id].click();
            updateChanges();
        });
    }

//%{content}%
});