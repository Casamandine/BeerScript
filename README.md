# BeerScript  

### Présentation du projet

Notre projet utilise une API recensant des distilleries de bières et leurs bières en ligne.  
[Lien vers le site de l'API](https://brewerydb.com/)  

Ce script permet en quelques commandes de trouver le nom de bières avec leur degrès d'alcool,
mais aussi il permet de répertorier des brasserie avec leur localisation.  

### Les commandes

##### 1. whatsmybeer :  
Cette commande sert à trouver une bière dans l'API à partir de son ID
* whatsmybeer -i [value] ou  whatsmybeer --id [value]  
  `$ whatsmybeer -i c4f2KE` ou 
  `$ whatsmybeer --id c4f2KE `  
  
* whatsmybeer -r [value] ou whatsmybeer --random [value]  
`$ whatsmybeer -r 3` ou `$ whatsmybeer --random 2`  

##### 2. brewery :  
Cette commande nous permet de trouver une distillerie de bière et sa localisation dans l'API à partir de son ID.  

* brewery -i [value] ou brewery --id [value]  
`$ brewery -i DMU2Kf` ou `$ brewery --id DMU2Kf`  

* brewery -r ou brewery --random  
`$ brewery -r` ou `$ brewery --random`

### Les modules utilisés
* Axios
* Inquirer
* Commander
* FileSystem

### Listes d'ID
##### 1. Beer
* 4nRKTH
* o4farp
* 5iehRZ
* yjsHPX
* Y6VFJW


##### 2. Brewery 
* q6vJUK
* VEY3Xa
* AqEUBQ
* yX6twV
* p1tFbP   



