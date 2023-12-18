# Makefile
install: #установить зависимости
	npm ci

brain-games: #команда запуска игры без глобальной установки
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js
	
brain-calc:
	node bin/brain-calc.js

publish: #публикация
	npm publish --dry-run

lint: #проверка линтером
	npx eslint .