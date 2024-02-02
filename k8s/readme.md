# Kubernetes

Crear el namespace 
``` bash
docker compose build
kubectl create ns arqsw2
``` 

Como correr los pods solos 

``` bash
kubectl run server1 --image=arqsw2-server --restart=Never --image-pull-policy IfNotPresent --labels="app=nodejs,env=arqsw2"
kubectl run server2 --image=arqsw2-server --restart=Never --image-pull-policy IfNotPresent --labels="app=nodejs,env=arqsw2"
kubectl run server3 --image=arqsw2-server --restart=Never --image-pull-policy IfNotPresent --labels="app=nodejs,env=arqsw2"
``` 

Como correr el maniesto con los pods sueltos
``` bash
kubectl apply -f .\k8s\manifest.yaml -n arqsw2
```

Como correr el maniesto con deployment
``` bash
kubectl apply -f .\k8s\manifestv2.yaml -n arqsw2
```

# Limpieza
Todo el namespace

``` bash
kubectl delete ns arqsw2
```

``` bash
kubectl delete -f .\k8s\manifest.yaml -n arqsw2

kubectl delete -f .\k8s\manifestv2.yaml -n arqsw2
```