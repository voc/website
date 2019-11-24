DOCKER_REPO := docker.pkg.github.com/voc/website/website


.PHONY: build latest

build:
	docker build -t $(DOCKER_REPO):$(build_version) .
	docker push $(DOCKER_REPO):$(build_version)

latest:
	docker tag $(DOCKER_REPO):$(build_version) $(DOCKER_REPO):latest
	docker push $(DOCKER_REPO):latest
