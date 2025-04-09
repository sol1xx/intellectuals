const burgerMenu = document.getElementById('burger-menu')
			const navLinks = document.getElementById('nav-links')
			burgerMenu.addEventListener('click', () => {
				navLinks.classList.toggle('active')
			})
			function toggleDay(dayElement) {
				dayElement.classList.toggle('active')
			}
			// Додаємо обробник події для перемикання темного режиму
			document.addEventListener('DOMContentLoaded', function () {
				const toggleButton = document.getElementById('dark-mode-toggle')
				const body = document.body
				// Перевіряємо, чи збережений темний режим у локальному сховищі
				if (localStorage.getItem('darkMode') === 'enabled') {
					body.classList.add('dark-mode')
				}
				toggleButton.addEventListener('click', function () {
					body.classList.toggle('dark-mode')
					// Зберігаємо вибір користувача в локальному сховищі
					if (body.classList.contains('dark-mode')) {
						localStorage.setItem('darkMode', 'enabled')
					} else {
						localStorage.setItem('darkMode', 'disabled')
					}
				})
				// Додаємо зміни стилів для темного режиму
				const style = document.createElement('style')
				style.innerHTML = `
        .dark-mode {
            background-color: #000000;
            color:rgb(255, 255, 255)
        }
        .dark-mode .box,
        .dark-mode .section,
        .dark-mode .about,
        .dark-mode .about_servers,
        .dark-mode .navbar {
            background-color: #1a1a1a;
            box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
        }
        .dark-mode .day {
            background-color: #fff;
        }
        .dark-mode .day.active {
            background-color: #fff;
        }
        .dark-mode .nav-links li a {
            color:rgb(255, 255, 255);
        }
        .dark-mode .nav-links li a:hover {
            color:rgb(216, 216, 216);
        }
        .dark-mode .btn {
            background-color:rgb(255, 255, 255);
        }
        .dark-mode .btn:hover {
            background-color:rgb(216, 216, 216);
        }
				.dark-mode .description{
					color: #fff;
				}
        .dark-mode .footer {
            background: #181818;
        }
        .dark-mode .footer a {
            color:rgb(0, 0, 0);
        }
        .dark-mode .people-dsserver_column_title:hover {
            color:rgb(216, 216, 216);
        }
    `
				document.head.appendChild(style)
			})
			document.addEventListener('DOMContentLoaded', function () {
		const darkModeToggle = document.getElementById('dark-mode-toggle');
		const body = document.body;
		// Перевіряємо, чи збережений темний режим у локальному сховищі
		if (localStorage.getItem('dark-mode-toggle') === 'enabled') {
			body.classList.add('dark-mode-toggle');
			darkModeToggle.textContent = '🌙'; // Іконка для світлого режиму
		}
		darkModeToggle.addEventListener('click', function () {
			body.classList.toggle('dark-mode-toggle');
			// Змінюємо стікер
			if (body.classList.contains('dark-mode-toggle')) {
				localStorage.setItem('dark-mode-toggle', 'enabled');
				darkModeToggle.textContent = '🌙'; // Світлий режим
			} else {
				localStorage.setItem('dark-mode-toggle', 'disabled');
				darkModeToggle.textContent = '🌞'; // Темний режим
			}
		});
	});
	document.addEventListener('DOMContentLoaded', function () {
        const languageToggle = document.getElementById('language-toggle');
        let currentLang = localStorage.getItem('lang') || 'ua';
    
        const translations = {
            'ua': {
                'aboutdsserver': 'Про сервер',
                'main': 'Розклад розмов',
                'about': 'Про команду',
                'feedback': 'Відгук',
                'footer': 'Контакти',
                'schedule-title': 'Розклад розмов',
                'join-server': 'Приєднатися до серверу',
                'welcome-message': 'Ласкаво просимо на наш Discord-сервер! Тут ви знайдете розклад наших розмов. Приєднуйтесь до нашої спільноти за посиланням нижче.',
                'discord-description': 'Наш Discord сервер — це місце, де гравці можуть збиратися для спілкування, координації та гри в улюблені відеоігри. На сервері є текстові та голосові канали, де користувачі можуть обговорювати стратегії, ділитися новинами та просто весело проводити час. Також доступні боти для музики, розваг і модерації. Сервер може містити різні ролі, системи рівнів і турніри, що робить спільноту ще цікавішою та активнішою.',
                'days': ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота', 'Неділя'],
                'schedule': {
                    'room': 'ROOM I',
                    'moderroom': 'MODER ROOM'
                },
                'intellectuals-server': 'INTELLECTUALS - Про сервер',
                'intellectuals-schedule': 'INTELLECTUALS - Розклад розмов',
                'intellectuals-team': 'INTELLECTUALS - Про команду',
                'contact-email': '📧 Пошта: intellectualsds@gmail.com',
                'contact-owner': '👤 Власник: solix | Адміністратор: vey',
                'leave-feedback': 'Залишити відгук',
                'people': {
                    'solix': 'Лягати спати вчасно - це для слабаків, я просто Бетмен!',
                    'vey': 'Цій країні потрібен новий герой!',
                    'zippoziga': 'Я не корупціонер, я просто забираю свої подарунки.',
                    'denis': 'А зарплата буде?'
                }
            },
            'en': {
                'aboutdsserver': 'About Server',
                'main': 'Conversation Schedule',
                'about': 'About Team',
                'feedback': 'Feedback',
                'footer': 'Contacts',
                'leave-feedback': 'Leave Feedback',
                'schedule-title': 'Conversation Schedule',
                'join-server': 'Join the server',
                'welcome-message': 'Welcome to our Discord server! Here you will find the onversation schedule. Join our community via the link below.',
                'discord-description': 'Our Discord server is a place where players can gather to chat, coordinate, and play their favorite video games. The server has text and voice channels where users can discuss strategies, share news, and just have fun. Music, entertainment, and moderation bots are also available. The server may have different roles, leveling systems, and tournaments, making the community even more exciting and active.',
                'days': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                'schedule': {
                    'room': 'ROOM I',
                    'moderroom': 'MODER ROOM'
                },
                'intellectuals-server': 'INTELLECTUALS - About Server',
                'intellectuals-schedule': 'INTELLECTUALS - Conversation Schedule',
                'intellectuals-team': 'INTELLECTUALS - About Team',
                'contact-email': '📧 Email: intellectualsds@gmail.com',
                'contact-owner': '👤 Owner: solix | Admin: vey',
                'people': {
                    'solix': 'Going to bed on time is for the weak, I’m just Batman!',
                    'vey': 'This country needs a new hero!',
                    'zippoziga': 'I’m not a corrupt official, I’m just taking my gifts.',
                    'denis': 'Will there be a salary?'
                }
            }
        };
    
        function translatePage(lang) {
            // Translate all header links
            document.querySelector('a[href="#aboutdsserver"]').textContent = translations[lang]['aboutdsserver'];
            document.querySelector('a[href="#main"]').textContent = translations[lang]['main'];
            document.querySelector('a[href="#about"]').textContent = translations[lang]['about'];
            document.querySelector('a[href="#feedback"]').textContent = translations[lang]['feedback'];
            document.querySelector('a[href="#footer"]').textContent = translations[lang]['footer'];
            document.querySelector('#main h1').textContent = translations[lang]['intellectuals-schedule'];
            document.querySelector('.btn[href*="discord"]').textContent = translations[lang]['join-server'];
            document.querySelector('.description').textContent = translations[lang]['welcome-message'];
            document.querySelector('#aboutdsserver h1').textContent = translations[lang]['intellectuals-server'];
            document.querySelector('#about h1').textContent = translations[lang]['intellectuals-team'];
            document.querySelector('#footer div:nth-child(1)').innerHTML = translations[lang]['contact-email'];
            document.querySelector('#footer div:nth-child(2)').innerHTML = translations[lang]['contact-owner'];
            document.querySelector('#footer a.btn').textContent = translations[lang]['leave-feedback'];
    
            // Translate Discord description
            document.querySelector('.discord-description').textContent = translations[lang]['discord-description'];
    
            // Translate days of the week
            const dayElements = document.querySelectorAll('.schedule .day h3');
            dayElements.forEach((element, index) => {
                element.textContent = translations[lang]['days'][index];
            });
    
            // Translate schedule
            const gameElements = document.querySelectorAll('.schedule .day p:last-child');
            gameElements.forEach((element) => {
                if (element.textContent.includes('MODER ROOM')) {
                    element.textContent = `🚫 ${translations[lang]['schedule']['moderroom']}`;
                } else {
                    element.textContent = `🎧 ${translations[lang]['schedule']['room']}`;
                }
            });
    
            // Translate team member quotes
            document.querySelector('.people_1 .people-dsserver_column_text').textContent = translations[lang]['people']['solix'];
            document.querySelector('.people_2 .people-dsserver_column_text').textContent = translations[lang]['people']['vey'];
            document.querySelector('.people_3 .people-dsserver_column_text').textContent = translations[lang]['people']['zippoziga'];
            document.querySelector('.people_4 .people-dsserver_column_text').textContent = translations[lang]['people']['denis'];
    
            // Change language toggle icon
            languageToggle.textContent = lang === 'ua' ? '🇺🇦' : '🇺🇸';
        }
    
        // Translate based on current language
        translatePage(currentLang);
    
        // Handle language toggle
        languageToggle.addEventListener('click', function () {
            currentLang = currentLang === 'ua' ? 'en' : 'ua';
            localStorage.setItem('lang', currentLang);
            translatePage(currentLang);
        });
    });

    