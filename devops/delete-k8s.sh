#!/bin/bash

kubectl delete -f ./kubernetes/mysql-configmap.yaml
kubectl delete -f ./kubernetes/mysql-deployment.yaml
kubectl delete -f ./kubernetes/service-db.yaml
kubectl delete -f ./kubernetes/api-configmap.yaml
kubectl delete -f ./kubernetes/webapi-deployment.yaml
kubectl delete -f ./kubernetes/service-api.yaml
