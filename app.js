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
        function getRandomInRange(min, max) {
            let result = Math.floor(Math.random() * (max - min + 1)) + min;
            switch (result) {
                case 1:
                  alert( '1' );
                  break;
                case 2:
                  alert( '2' );
                  break;
                case 3:
                  alert( '3' );
                  break;
                case 4:
                  alert( '4' );
                  break;
                case 5:
                  alert( '5' );
                  break;
                case 6:
                  alert( '6' );
                  break;
                case 7:
                  alert( '7' );
                  break;
                case 8:
                  alert( '8' );
                  break;
                case 9:
                  alert( '9' );
                  break;
                case 10:
                  alert( '10' );
                  break;
                case 11:
                  alert( '11' );
                  break;
                case 12:
                  alert( '12' );
                  break;
                case 13:
                  alert( '13' );
                  break;
                case 14:
                  alert( '14' );
                  break;
                case 15:
                  alert( '15' );
                  break;
                case 16:
                  alert( '16' );
                  break;
                case 17:
                  alert( '17' );
                  break;
                case 18:
                  alert( '18' );
                  break;
                case 19:
                  alert( '19' );
                  break;
                case 20:
                  alert( '20' );
                  break;
            }
        }
