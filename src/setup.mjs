import { writeFile, readFile } from "fs/promises";
import simpleGit from "simple-git";
import { destinationAnswer, ormAnswer, projectNameAnswer } from "./promts.mjs";
import { projectBranchChoices } from "./constants.mjs";

class ProjectSetup {
  constructor() {
    this.projectName = projectNameAnswer.projectName;
    this.destinationDir = destinationAnswer.destinationDir;
    this.branch = projectBranchChoices[ormAnswer.database];
    this.repositoryURL = "https://github.com/MikeXado/nx-starter-template.git";
    this.git = simpleGit();
  }

  /**
   * Clones the repository from the specified URL to the destination directory.
   * @async
   * @function cloneRepository
   * @throws {Error} If there is an error cloning the repository.
   * @returns {Promise<void>} A promise that resolves when the repository is cloned successfully.
   */
  async cloneRepository() {
    try {
      await this.git.clone(
        this.repositoryURL,
        `${this.destinationDir}/${this.projectName}`,
        ["--branch", this.branch]
      );
      console.log("Repository cloned successfully!");
    } catch (err) {
      console.error("Error cloning repository:", err);
    }
  }

  /**
   * Updates the package.json file with the project name.
   * @returns {Promise<void>} A promise that resolves when the package.json file is updated.
   */
  async updatePackageJson() {
    const packageJsonPath = `${this.destinationDir}/${this.projectName}/package.json`;
    try {
      const packageJsonContent = await readFile(packageJsonPath, "utf-8");
      const packageJson = JSON.parse(packageJsonContent);
      packageJson.name = this.projectName;
      await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log("Package.json updated with project name:", this.projectName);
    } catch (error) {
      console.error("Error setting up project:", error);
    }
  }

  /**
   * Performs the setup process.
   * @returns {Promise<void>} A promise that resolves when the setup is complete.
   */
  async setup() {
    await this.cloneRepository();
    await this.updatePackageJson();
  }
}

const projectSetup = new ProjectSetup();
projectSetup.setup();
