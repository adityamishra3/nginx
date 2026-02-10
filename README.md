# Nginx Load Balancer with Docker Compose

This project demonstrates a simple Nginx load balancer setup using Docker Compose to distribute traffic among multiple Node.js application instances.

## How to Replicate This Repo

To get this running on your local machine, follow these steps.

### Prerequisites

- Docker Desktop

### Steps

1.  **Clone this repository:**
    ```bash
    git clone https://github.com/adityamishra3/nginx.git
    cd your-repo-name
    ```

2.  **Generate SSL Certificates:**

    This setup uses SSL. You'll need to generate a self-signed certificate and key.

    ```bash
    mkdir certs
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./certs/nginx.key -out ./certs/nginx.crt
    ```
    You can fill in the prompts with any information you like.

3.  **Run the application:**
    ```bash
    docker-compose up --build
    ```
    This command will build the Docker images for the Node.js apps and start all the services defined in the `docker-compose.yaml` file.

You can now access the load-balanced application at `https://localhost:8443`. Requests will be distributed among the three Node.js app instances. HTTP requests to `http://localhost:8080` will be automatically redirected to HTTPS.

## A Note on Scaling

> I'm putting this together in the hope that one day my app will have enough users to actually need a load balancer. When I'm swimming in venture capital and scaling to the moon, I'll look back at this humble repo and smile. Until then, a guy can dream.
