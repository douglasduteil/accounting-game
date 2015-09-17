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

save-last-config:
	cp -f config.js config.js.old

jspm: save-last-config jspm-app jspm-vendor move-app-bundle move-vendor-bundle
	cp config.js out/config.js
	cp --parents jspm_packages/system.js out
	mv config.js.old config.js

jspm-app:
	${JSPM_BUNDLE_CMD} ${APP_FOLDER_NAME} \
 	 - '[npm:**/*]' - '[github:**/*]'\
	 bundle.app.js --inject

move-app-bundle:
	mv bundle.app.js bundle.app.js.map out

jspm-vendor:
	${JSPM_BUNDLE_CMD} '${APP_FOLDER_NAME}/**/*'\
	 - '[${APP_FOLDER_NAME}/**/*]'\
	 - '[~/**/*!github:systemjs/plugin-text@0.0.2]' bundle.vendor.js --inject

move-vendor-bundle:
	mv bundle.vendor.js bundle.vendor.js.map out

copy:
	cp -r ${APP_FOLDER_NAME}/assets out/assets
	cp index.html out/index.html

clean:
	rm -rf out
	mkdir out

serve:
	${CHOKIDAR_CMD} '${APP_FOLDER_NAME}.js' '${APP_FOLDER_NAME}/**/*' -c '${MAKE} jspm-app move-app-bundle' &
	${CHOKIDAR_CMD} 'index.html' -c '${MAKE} copy' &
	${CHOKIDAR_CMD} '${APP_FOLDER_NAME}/assets/**/*' -c '${MAKE} copy' &
	${BROWSER_SYNC_CMD} start --config bs-config.js
