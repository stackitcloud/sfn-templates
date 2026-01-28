# Contribute to the STACKIT Functions language templates

Your contribution is welcome! Thank you for your interest in contributing to the STACKIT Functions language templates. We greatly value your feedback, feature requests, additions to the code, bug reports or documentation extensions.
 

### Repository structure

Each language template resides in its own directory (e.g., `go-template`, `js-template`). Each template directory contains a `stackit-functions.yaml` file, a `README.md`, the source code for a basic function, along with language-specific configuration files (e.g., `go.mod`, `package.json`, `pom.xml`, `Cargo.toml`, `pyproject.toml`, `tsconfig.json`), and ignore files (`.funcignore`, `.gitignore`).

 
### Implementing a new resource

To add a new language template, create a new directory (e.g., `new-lang-template`) mirroring the structure of existing templates.

1.  **Scaffold**: Copy the basic structure from an existing template (e.g., `go-template` or `js-template`).
2.  **Implement default function**: Implement a simple 'Hello from STACKIT Functions' function in the new language.
3.  **Configuration**: Ensure to include:
    *   A `stackit-functions.yaml` for function configuration.
    *   A comprehensive `README.md` with setup and usage instructions.
    *   Any necessary build and dependency management files (e.g., `package.json`, `pom.xml`, `Cargo.toml`, `go.mod`, `pyproject.toml`).
    *   Appropriate ignore files (`.funcignore`, `.gitignore`).
4.  **Testing**: Add unit and integration tests for the new template.
5.  **Documentation**: Update the main `README.md` if necessary to reflect the new template.
6.  **CI/CD**: Ensure the new template integrates with existing CI/CD pipelines.
 
 
### Local development

To develop and test templates locally, either:

- Create a subdirectory in the **stackit-fn/templates** folder and copy the language template into the folder
- Install the templates from a repository URL via sfn cli, e.g.: ``sfn templates install --source https://github.com/stackitcloud/sfn-templates --install-name templates``

## Code Contributions

To make your contribution, follow these steps:

1. Check open or recently closed [Pull Requests](https://github.com/stackitcloud/sfn-templates/pulls) and [Issues](https://github.com/stackitcloud/sfn-templates/issues) to make sure the contribution you are making has not been already tackled by someone else.
2. Fork the repo.
3. Make your changes in a branch that is up-to-date with the original repo's `main` branch.
4. Commit your changes including a descriptive message
5. Create a pull request with your changes.
6. The pull request will be reviewed by the repo maintainers. If you need to make further changes, make additional commits to keep commit history. When the PR is merged, commits will be squashed.

> [!TIP]
> 
> To ensure smooth review and integration of your code contributions, follow these guidelines:
>
> **Break down large changes into smaller PRs**: Separate new features or bigger changes into multiple smaller Pull Requests.
> This allows us to provide earlier feedback and makes it easier to review your PR.
> 
> **Create a draft PR for early feedback**: If you want feedback during the implementation process, create a draft PR so we can have a look. 


## Bug Reports

If you would like to report a bug, please open a [GitHub issue](https://github.com/stackitcloud/sfn-templates/issues/new).

To ensure we can provide the best support to your issue, follow these guidelines:

1. Go through the existing issues to check if your issue has already been reported.
2. Make sure you are using the latest version of the provider, we will not provide bug fixes for older versions. Also, latest versions may have the fix for your bug.
3. Please provide as much information as you can about your environment, e.g. your version of Go, your version of the provider, which operating system you are using and the corresponding version.
4. Include in your issue the steps to reproduce it, along with code snippets and/or information about your specific use case. This will make the support process much easier and efficient.
