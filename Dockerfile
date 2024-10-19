# Stage 1: Build the app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./ 
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine AS runner

# Set NODE_ENV environment variable to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy only the built application and necessary files from the build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Expose the Next.js port (defaults to 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
