# Microservices Architecture: Lumora Jewels

This markdown document provides an overview of the microservices and architecture implemented in the Lumora Jewels deployment. It is intended for developers and architects to understand the service boundaries, responsibilities, and interactions within the system.

## Overview

The Lumora Jewels platform is built using a microservices architecture, where each core business domain is encapsulated in its own service. Services communicate over the network, typically via HTTP APIs, and are orchestrated using Docker Compose for local development and deployment.

## Microservices

### 1. Auth Service
- **Purpose:** Handles user authentication, registration, and token management.
- **Key Components:**
  - Controllers for authentication logic
  - Middleware for request validation
  - Models for user data
- **Dependencies:** Database for storing user credentials

### 2. User Service
- **Purpose:** Manages user profiles and related data.
- **Key Components:**
  - Controllers for user operations
  - Models for user information
- **Dependencies:** Database for user details

### 3. Product Service
- **Purpose:** Manages product catalog, including CRUD operations for products.
- **Key Components:**
  - Controllers for product logic
  - Models for product data
- **Dependencies:** Database for product information

### 4. Category Service
- **Purpose:** Handles product categories and classification.
- **Key Components:**
  - Controllers for category logic
  - Models for category data
- **Dependencies:** Database for category information

### 5. Cart Service
- **Purpose:** Manages user shopping carts, including item addition/removal and cart retrieval.
- **Key Components:**
  - Controllers for cart operations
  - Models for cart data
- **Dependencies:** Database for cart state

### 6. Order Service
- **Purpose:** Handles order placement, tracking, and history.
- **Key Components:**
  - Controllers for order logic
  - Models for order data
- **Dependencies:** Database for order records

### 7. Payment Service
- **Purpose:** Manages payment processing and transaction records.
- **Key Components:**
  - Controllers for payment logic
  - Models for payment data
- **Dependencies:** Database for payment transactions

### 8. Notification Service
- **Purpose:** Sends notifications (e.g., order updates, promotional messages) to users.
- **Key Components:**
  - Controllers for notification logic
  - Models for notification data
- **Dependencies:** Database for notification records

### 9. API Gateway (lumora-api-gateway)
- **Purpose:** Serves as the single entry point for client requests, routing them to appropriate microservices. Handles cross-cutting concerns like authentication, rate limiting, and request aggregation.
- **Key Components:**
  - NGINX configuration for routing
  - Server logic for proxying requests
- **Dependencies:** All backend microservices

## Architectural Principles
- **Service Isolation:** Each service is independently deployable and scalable.
- **Database per Service:** Each microservice manages its own data store, ensuring loose coupling.
- **API Gateway:** Centralized routing and aggregation of requests.
- **Dockerized Deployment:** All services are containerized for consistent environments and easy orchestration.

## Inter-Service Communication
- Services communicate via RESTful APIs exposed over HTTP.
- The API Gateway routes external requests to the appropriate service.
- Internal service-to-service communication may occur directly or via the gateway, depending on the use case.

## Extensibility
- New services can be added by following the established folder and Dockerfile conventions.
- Each service should define its own models, controllers, routes, and configuration.

## Summary
This architecture enables modular development, independent scaling, and clear separation of concerns. Each microservice is responsible for a distinct business capability, and the API Gateway provides a unified interface for clients.
