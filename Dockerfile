# Gunakan image Node.js sebagai base image
FROM node:14-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file ke dalam container
COPY . .

# Build aplikasi Vue.js
RUN npm run build

# Stage baru untuk menjalankan aplikasi menggunakan serve
FROM node:14-alpine

# Install serve secara global
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy hasil build dari stage sebelumnya ke direktori kerja
COPY --from=build /app/dist /app

# Expose port 80
EXPOSE 80

# Command untuk menjalankan aplikasi
CMD ["serve", "-s", ".", "-l", "80"]
