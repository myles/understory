.PHONY: clean/astro
clean/astro:
	rm -fr ./.astro

.PHONY: clean/dist
clean/dist:
	rm -fr ./dist

.PHONY: clean/node_modules
clean/node_modules:
	rm -fr ./node_modules

.PHONY: clean
clean: clean/astro clean/dist clean/node_modules

.PHONY: setup
setup:
	npm ci
	npm run astro -- sync

.PHONY: prettier
prettier:
	npm run prettier

.PHONY: prettier/fix
prettier/fix:
	npm run prettier:write

.PHONY: lint
lint: prettier

.PHONY: lint/fix
lint/fix: prettier/fix

.PHONY: test
test:
	npm run test

.PHONY: check
check:
	npm run check

.PHONY: build
build:
	npm run build

.PHONY: ci
ci: lint test check build
	say "All checks passed for CI!"
