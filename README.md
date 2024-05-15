# Setup node

Run command

```
npm init
```

to initialize npm project (package.json).

# Install node and typescript

```
npm i -D typescript ts-node
```

# Setup Typescript config

Typescript has been installed on the project, now we need to use it for setting up the configuration:

```
./node_modules/.bin/tsc --init
```

# Create Typescript file

```
echo 'console.log("Hi")' > index.ts
```

# Run created script

```
node --loader ts-node/esm index.ts
```
