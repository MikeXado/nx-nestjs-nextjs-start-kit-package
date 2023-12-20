import { execa } from "execa";
import { logger } from "../utils.js";
import chalk from "chalk";
import {
  TAILWIND_CONFIG,
  TAILWIND_GLOBAL_CSS_CONFIGURATION,
} from "../constants.js";
import { writeFile } from "fs/promises";
import ora from "ora";

export class TailwindManager {
  private highlight = (text: string) => chalk.cyan(text);
  constructor(private destinationUrl: string, private projectName: string) {
    this.destinationUrl = destinationUrl;
    this.projectName = projectName;
  }
  /**
   * Adds Tailwind CSS to the project.
   * @returns {Promise<void>} A promise that resolves when the Tailwind CSS setup is complete.
   */
  async addTailwindCss(): Promise<void> {
    try {
      await execa(
        "npx",
        ["nx", "g", "setup-tailwind", "--project=nx-starter-template-client"],
        {
          cwd: `${this.destinationUrl}/${this.projectName}`,
        }
      );
    } catch (error) {
      logger.error(
        `Error while initializing ${this.highlight("tailwindcss")}}`,
        error
      );
    }
  }

  /**
   * Updates the Tailwind configuration file.
   * @returns {Promise<void>} A promise that resolves when the Tailwind configuration file is updated successfully, or rejects with an error if there was an issue.
   */
  async updateTailwindConfig(): Promise<void> {
    try {
      await writeFile(
        `${this.destinationUrl}/${this.projectName}/apps/nx-starter-template-client/tailwind.config.js`,
        TAILWIND_CONFIG
      );
    } catch (error) {
      logger.error(
        `Error updating ${this.highlight("tailwind.config.js")}`,
        error
      );
    }
  }

  /**
   * Updates the global CSS file with the Tailwind CSS configuration.
   * @returns {Promise<void>} A promise that resolves when the global CSS file is updated successfully, or rejects with an error if there was an issue.
   */
  async updateGlobalCss(): Promise<void> {
    try {
      await writeFile(
        `${this.destinationUrl}/${this.projectName}/apps/nx-starter-template-client/app/global.css`,
        TAILWIND_GLOBAL_CSS_CONFIGURATION
      );
    } catch (error) {
      logger.error(`Error updating ${this.highlight("global.css")}`, error);
    }
  }

  /**
   * Sets up tailwindcss by performing the following steps:
   * 1. Adds tailwindcss to the project.
   * 2. Updates the tailwind configuration.
   * 3. Updates the global CSS.
   *
   * @returns {Promise<void>} A promise that resolves when the tailwindcss setup is complete.
   * @throws {Error} If an error occurs during the setup process.
   */
  async setupTailwind(): Promise<void> {
    try {
      const spinner = ora("Setting up tailwindcss...").start();
      await this.addTailwindCss();
      await this.updateTailwindConfig();
      await this.updateGlobalCss();
      spinner.succeed("tailwindcss setup successfully!");
    } catch (error) {
      logger.error(
        `Error while setting up ${this.highlight("tailwindcss")}`,
        error
      );
    }
  }
}
