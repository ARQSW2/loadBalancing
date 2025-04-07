# Sistema de Load Balancing con Docker Compose

## Descripción General
Esta solución implementa un **sistema de balanceo de carga** utilizando dos tecnologías diferentes (Nginx y HAProxy) para distribuir peticiones HTTP entre tres servidores backend idénticos.

## Componentes Principales

### 🚦 Balanceadores de Carga
| Componente | Puerto | Configuración | Función |
|------------|--------|---------------|---------|
| **Nginx**  | 8080   | `nginx.conf`  | Balancea tráfico usando algoritmo Round-Robin con peso|
| **HAProxy**| 8081   | `haproxy.cfg` | Balancea tráfico usando algoritmo Round-Robin |

### ⚙️ Backend Servers
- Tres instancias idénticas (`server1`, `server2`, `server3`)
- Imagen base: `arqsw2-server` (construida desde `./server/Dockerfile`)
- Red: `internal` (aislada)

### 🌐 Redes Docker
   
   - `loadBalancer`: Red puente para exponer Nginx y HAProxy.
   
   - `internal`: Red privada donde los balanceadores comunican con los servidores backend.

![DIAGRAM](./diagram.drawio.svg)

```mermaid
%% Diagrama C4 Nivel 2 (Contenedor)
C4Container
    title Diagrama de Contenedores - Sistema de Load Balancing

    Person(usuario, "Usuario", "Accede a los servicios a través del navegador")

    Container_Boundary(sistema, "Sistema de Balanceo") {
        Container(nginx, "Nginx", "Balanceador", "Balanceador en puerto 8080")
        Container(haproxy, "HAProxy", "Balanceador", "Balanceador en puerto 8081")
        
        Container_Boundary(backend, "Backend Servers") {
            Container(server1, "Server 1", "Node.js", "Instancia backend 1")
            Container(server2, "Server 2", "Node.js", "Instancia backend 2")
            Container(server3, "Server 3", "Node.js", "Instancia backend 3")
        }
    }

    Rel(usuario, nginx, "HTTP requests", "8080")
    Rel(usuario, haproxy, "HTTP requests", "8081")
    Rel(nginx, server1, "Proxy requests", "HTTP")
    Rel(nginx, server2, "Proxy requests", "HTTP")
    Rel(nginx, server3, "Proxy requests", "HTTP")
    Rel(haproxy, server1, "Proxy requests", "HTTP")
    Rel(haproxy, server2, "Proxy requests", "HTTP")
    Rel(haproxy, server3, "Proxy requests", "HTTP")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

# Build de las imagenes
Este paso es necesario tanto en kubernetes como en docker compose

``` bash
docker compose build
``` 

# Docker
``` bash
docker compose up -d
``` 


