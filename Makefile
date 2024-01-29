# Makefile
install: #установить зависимости
	npm ci

#команды запуска игр без глобальной установки

brain-games:
	node bin/brain-games.js

brain-even: #проверка на четность
	node bin/brain-even.js

brain-calc: #калькулятор
	node bin/brain-calc.js
	
brain-gcd: #наибольший общий делитель
	node bin/brain-gcd.js

brain-progression: #арифметическая прогрессия
	node bin/brain-progression.js

brain-prime: #простое ли число
	node bin/brain-prime.js

publish: #публикация
	npm publish --dry-run

lint: #проверка линтером
	npx eslint .