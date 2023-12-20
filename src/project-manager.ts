import inquirer from "inquirer";
import { SetupTemplate } from "./setup.js";

export class projectManager {
  public async setupProject() {
    const options = await inquirer.prompt([
      {
        type: "input",
        name: "proceed",
        message: "Do you want to proceed? (y/n)",
        validate: (input: string) => {
          if (input.trim() !== "y" && input.trim() !== "n") {
            return "Please enter a valid answer";
          } else if (input.trim() === "n") {
            process.exit(0);
          } else if (input.trim() === "y") {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "projectName",
        message: "Enter the project name:",
        validate: (input: string) => {
          if (!input.trim()) {
            return "Please enter a valid project folder name";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "destinationDir",
        message:
          "Enter the directory path where you want to clone the repository:",
        default: process.cwd(),
      },
      {
        type: "list",
        name: "database",
        message: "Choose a database:",
        choices: ["Prisma", "TypeORM"],
      },
      {
        type: "input",
        name: "shadcn",
        message: "Do you want to install 'shadcn'? (y/n)",
      },
      {
        type: "input",
        name: "tailwind",
        message: "Do you want to install 'tailwind'? (y/n)",
        when: (answers: any) => answers.shadcn === "n",
      },
    ]);

    const setup = new SetupTemplate(options);
    setup.main();
  }
}

const project = new projectManager();
project.setupProject();
