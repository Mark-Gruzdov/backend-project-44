# Makefile
install: #установить зависимости
	npm ci

brain-games: #команда запуска игры без глобальной установки
	node bin/brain-games.js

publish: #публикация
	npm publish --dry-run