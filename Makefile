all:
	npx next build
	rm -rf ./docs
	mv out docs
	cp CNAME docs
	touch docs/.nojekyll

preview:
	npx next dev
