

Inspired from: https://levelup.gitconnected.com/databases-in-a-kubernetes-angular-net-core-microservice-arch-a0c0ae23dca9

## How to run locally:

Install .NET, npm, docker and other dependencies if needed. Dependencies need to be installed such that the dockerfile in DempApp can be run without problems.
Install minikube. Start a session:

`
minikube start
`

In k8s folder: apply all yaml files:

`cd ./k8s`

`kubectl apply -f .`

Start the ingress controller: 

`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.2/deploy/static/provider/cloud/deploy.yaml`

Forard the nodeports: 

`k port-forward svcMongoDbPort:80`

` k port-forward svcMongoDbPort:81`

You are all set! Serve the demoapp-service: 

`minikube service demoapp-service`