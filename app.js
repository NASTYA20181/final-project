let text = document.querySelector(".list__text");
        function showFonts() {
            text.innerHTML = '<a href="https://textgenerator.ru/" target="_blank">' + `textgenerator.ru - Створюйте тексти з красивими шрифтами і копіюйте їх онлайн` + '</a>' + '<br>' + '<br>' +
                             '<a href="https://fonts.google.com/" target="_blank">' + `fonts.google.com - бібліотека шрифтів від Google`+ '</a>' + '<br>' + '<br>' +
                             '<a href="https://www.fontsquirrel.com/" target="_blank">' +`fontsquirrel.com - безкоштовні шрифти` + '</a>' + '<br>' + '<br>' +
                             '<a href="https://www.fonts-online.ru/" target="_blank">' +`fonts-online.ru - Велика колекція різноманітних шрифтів` + '</a>' 
        }
        function showEditors() {
            text.innerHTML = '<a href="https://code.visualstudio.com/" target="_blank">' + `Visual Studio Code — редактор вихідного коду, позиціонується як «легкий» редактор коду для кроссплатформенной розробки веб-і хмарних додатків` + '</a>' + '<br>' + '<br>' +
                             '<a href="http://brackets.io/" target="_blank">' + `Brackets — вільний текстовий редактор для веб-розробників. Brackets орієнтований на роботу з HTML, CSS і JavaScript.`+ '</a>' + '<br>' + '<br>' +
                             '<a href="https://atom.io/" target="_blank">' +`Atom — безкоштовний текстовий редактор з підтримкою плагінів, написаних на Node.js, і вбудованих під керуванням Git.` + '</a>' + '<br>' + '<br>' +
                             '<a href="https://www.eclipse.org/" target="_blank">' +`Eclipse — вільна інтегроване середовище розробки модульних кроссплатформенних додатків.` + '</a>'
        }

        function showEducation() {
            text.innerHTML = '<a href="https://codepen.io/" target="_blank">' + `Codepen - інтернет-спільнота, створене для тестування і показу фрагментів на основі HTML, CSS і JavaScript.` + '</a>' + '<br>' + '<br>' +
                             '<a href="https://www.w3schools.com/" target="_blank">' + `W3Schools - це освітній веб-сайт для навчання програмуванню в мережі інтернет.`+ '</a>' + '<br>' + '<br>' +
                             '<a href="https://www.codewars.com/" target="_blank">' +`Codewars - освітнє співтовариство з комп'ютерного програмування.` + '</a>' + '<br>' + '<br>' +
                             '<a href="https://learn.javascript.ru/" target="_blank">' +`learn.javascript.ru - Сучасний підручник JavaScript` + '</a>'
        }

        function showBlogs() {
            text.innerHTML = '<a href="https://twitter.com/css" target="_blank">' + `CSS-Tricks — офіційний акаунт ресурсу CSS-Tricks.com, що об'єднує веб-дизайнерів. (Twitter)` + '</a>' + '<br>' + '<br>' +
                             '<a href="https://twitter.com/CSSInRealLife" target="_blank">' + `CSS {IRL} — поради, лайфхак, хитрості і посилання на тему CSS.`+ '</a>' + '<br>' + '<br>' +
                             '<a href="https://htmlacademy.ru/blog" target="_blank">' +`htmlacademy.ru/blog - Багато корисного матеріалу від відмінного ресурсу дистанційного навчання.` + '</a>'
        }
        
        function showHelp() {
            text.innerHTML = '<a href="https://color.hailpixel.com/" target="_blank">' + `color.hailpixel.com - незвичайний підбір кольорової палітри` + '</a>' + '<br>' + '<br>' +
                             '<a href="https://www.freepik.com/" target="_blank">' + `www.freepik.com - безкоштовні картинки і іконки`+ '</a>' + '<br>' + '<br>' +
                             '<a href="https://adamovna.ru/300saitov-for-designer/" target="_blank">' +`adamovna.ru - 300 корисних сайтів в допомогу дизайнерові` + '</a>'
        }