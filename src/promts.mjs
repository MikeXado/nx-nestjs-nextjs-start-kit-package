import inquirer from "inquirer";

export const projectNameAnswer = await inquirer.prompt({
  type: "input",
  name: "projectName",
  message: "Enter the project folder name (will also be set in package.json):",
  validate: (input) => {
    if (!input.trim()) {
      return "Please enter a valid project folder name";
    }
    return true;
  },
});

export const destinationAnswer = await inquirer.prompt({
  type: "input",
  name: "destinationDir",
  message: "Enter the directory path where you want to clone the repository:",
  default: process.cwd(),
});

export const ormAnswer = await inquirer.prompt([
  {
    type: "list",
    name: "database",
    message: "Choose a database:",
    choices: ["Prisma", "TypeORM"],
  },
]);
