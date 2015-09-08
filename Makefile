MAKEFLAGS = -j1
NODE_CWD = ./node_modules/.bin

JSPM_BUNDLE_CMD = ${NODE_CWD}/jspm bundle
CHOKIDAR_CMD = ${NODE_CWD}/chokidar
BROWSER_SYNC_CMD = ${NODE_CWD}/browser-sync

APP_FOLDER_NAME = accountingGame


.PHONY: build clean jspm copy

default: build

#

build: clean copy jspm

jspm:
	cp -f config.js config.js.old
	${JSPM_BUNDLE_CMD} ${APP_FOLDER_NAME} bundle.app.js --inject

	# Copy all to output
	mv bundle.app.js bundle.app.js.map out
	cp config.js out/config.js
	cp --parents jspm_packages/system.js out

	mv config.js.old config.js

copy:
	cp -r ${APP_FOLDER_NAME}/assets out/assets
	cp index.html out/index.html

clean:
	rm -rf out
	mkdir out

serve:
	${CHOKIDAR_CMD} '${APP_FOLDER_NAME}.js' '${APP_FOLDER_NAME}/**/*.js' '${APP_FOLDER_NAME}/**/*.css' -c '${MAKE} jspm' &
	${CHOKIDAR_CMD} 'index.html' -c '${MAKE} copy' &
	${CHOKIDAR_CMD} '${APP_FOLDER_NAME}/assets/**/*' -c '${MAKE} copy' &
	${BROWSER_SYNC_CMD} start --config bs-config.js
