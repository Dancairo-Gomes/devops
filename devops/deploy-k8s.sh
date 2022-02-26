#!/bin/bash

kubectl apply -f ./kubernetes/mysql-configmap.yaml
kubectl apply -f ./kubernetes/mysql-deployment.yaml
kubectl apply -f ./kubernetes/service-db.yaml
sleep 30
kubectl apply -f ./kubernetes/api-configmap.yaml
kubectl apply -f ./kubernetes/webapi-deployment.yaml
kubectl apply -f ./kubernetes/service-api.yaml
