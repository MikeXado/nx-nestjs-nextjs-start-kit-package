# <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="50" height="40" /> Start template

Welcome to `nx-quickstart`, a comprehensive starter template that integrates Nx, NestJS, Next.js, Prisma, and Typesafe REST using Ts-rest within a monorepo structure. This workspace empowers developers with a smart monorepo setup for efficient development and fast Continuous Integration (CI).

https://github.com/MikeXado/nx-starter-template

# Important
This `nx-quickstart` is under continuous development. Stay up-to-date with our latest updates and get the most out of it!

## Key features
1. Build on top of Nx
2. Next JS integration
3. Nest JS integration
4. Prisma integration
5. Typesafe backend access using [Ts-Rest](https://ts-rest.com/)
6. Typesafe and validation out of the box of enviroment variables using `@t3-oss/env-core`

## Start the app
```bash
 npx nx-quickstart@latest init
```

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to set up CI](https://nx.dev/recipes/ci)

## Contributing

We welcome contributions! Please read the [CONTRIBUTING.md](https://github.com/MikeXado/nx-starter-template/blob/main/CONTRIBUTING.md) file for details on how to contribute to this project.

## License

This project is licensed under the [License Name] - see the [LICENSE](https://github.com/MikeXado/nx-starter-template/blob/main/LICENSE) file for details.

## Contact
Email: [mike.gurin21@gmail.com](mailto:mike.gurin21@gmail.com)


