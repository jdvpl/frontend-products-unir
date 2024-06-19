# Stage 1: Builder
FROM node:18-alpine AS builder

WORKDIR /src

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Runner
FROM node:18-alpine AS runner

WORKDIR /src

COPY --from=builder /src/package.json .
COPY --from=builder /src/.next ./.next
COPY --from=builder /src/public ./public
COPY --from=builder /src/messages ./messages

# Install only production dependencies
RUN npm install --production=true --frozen-lockfile

EXPOSE 3000

CMD ["npm", "start"]
