# Use Node 18 Alpine as base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci --quiet

# Copy source files
COPY . .

# Build the app
RUN npm run build

# Install serve to run the built app
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "dist", "-l", "3000"] 