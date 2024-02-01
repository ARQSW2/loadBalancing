# LOADBALANCING WITH DOCKER COMPOSE NGINX AND HAPROXY

![DIAGRAM](./diagram.drawio.svg)

# Build de las imagenes
Este paso es necesario tanto en kubernetes como en docker compose

``` bash
docker compose build
``` 

# Docker
``` bash
docker compose up -d
``` 


# Kubernetes

``` bash
kubectl run server1 --image=arqsw2-server --restart=Never --image-pull-policy IfNotPresent --labels="app=nodejs,env=arqsw2"
kubectl run server2 --image=arqsw2-server --restart=Never --image-pull-policy IfNotPresent --labels="app=nodejs,env=arqsw2"
kubectl run server3 --image=arqsw2-server --restart=Never --image-pull-policy IfNotPresent --labels="app=nodejs,env=arqsw2"
``` 