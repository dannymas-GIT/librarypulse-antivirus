# Build stage
FROM node:18-alpine as build

# Add build arguments for better caching
ARG BUILD_VERSION
ARG NODE_ENV=production

# Set working directory
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
COPY .npmrc* ./

# Install dependencies with specific environment
RUN npm ci --only=production

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Add nginx user
RUN adduser -D -H -u 101 -s /sbin/nologin nginx

# Install curl for health checks
RUN apk add --no-cache curl

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create health check endpoint
RUN echo "OK" > /usr/share/nginx/html/health

# Set correct permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Switch to non-root user
USER nginx

# Expose port 80
EXPOSE 80

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 