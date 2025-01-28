# Étape 2: Serveur pour servir l'application en production
FROM nginx:stable-alpine

WORKDIR .

COPY . .

RUN ls -la
# Copie les fichiers construits dans le conteneur Nginx
COPY . /usr/share/nginx/html

# Copier le fichier de configuration Nginx personnalisé 
COPY nginx.conf /etc/nginx/nginx.conf

# Exposition du port
EXPOSE 80

# Lancer le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]