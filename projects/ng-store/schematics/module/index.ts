import {
  Rule,
  Tree,
  SchematicsException,
  apply,
  url,
  move,
  chain,
  mergeWith,
  // SchematicContext,
  // applyTemplates,
  template,
} from '@angular-devkit/schematics';

import {
  virtualFs,
  workspaces,
  normalize,
  strings,
} from '@angular-devkit/core';
// import { Schema as ModuleSchema } from './schema';

// Read the contents of the workspace configuration file, angular.json
function createHost(tree: Tree): workspaces.WorkspaceHost {
  return {
    async readFile(path: string): Promise<string> {
      const data = tree.read(path);
      if (!data) {
        throw new SchematicsException('File not found.');
      }
      return virtualFs.fileBufferToString(data);
    },
    async writeFile(path: string, data: string): Promise<void> {
      return tree.overwrite(path, data);
    },
    async isDirectory(path: string): Promise<boolean> {
      return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
    },
    async isFile(path: string): Promise<boolean> {
      return tree.exists(path);
    },
  };
}

export function storeModule(options: any): Rule {
  console.log(options);

  return async (tree: Tree) => {
    const host = createHost(tree);

    const { workspace } = await workspaces.readWorkspace('/', host);

    if (!options.project) {
      options.project = workspace.extensions.defaultProject;
    }

    const project = workspace.projects.get(options.project);

    if (!project) {
      throw new SchematicsException(`Invalid project name: ${options.project}`);
    }

    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/app/store`;
    }

    const templateSource = apply(url('./files'), [
      template({
        ...options,
        ...strings,
      }),
      move(normalize(options.path as string)),
    ]);

    // Import to store module

    importToStoreModule(tree, options.name, project);

    return chain([mergeWith(templateSource)]) as Rule;
  };

  function importToStoreModule(
    tree: Tree,
    moduleName: string,
    project: workspaces.ProjectDefinition
  ) {
    const content: Buffer | null = tree.read(
      `${project.sourceRoot}/app/store/store.module.ts`
    );

    let strContent: string = '';
    if (content) strContent = content.toString();

    // const appendIndex = strContent.indexOf('imports: [');
    const content2Append = `imports: [\n ${
      moduleName.charAt(0).toUpperCase() + moduleName.slice(1)
    }Module, \n`;
    let updatedContent = strContent.replace('imports: [', content2Append);
    updatedContent = updatedContent.replace(
      "import { NgModule } from '@angular/core';",
      `import { NgModule } from '@angular/core'; \n import { ${
        moduleName.charAt(0).toUpperCase() + moduleName.slice(1)
      }Module } from './${moduleName}/${moduleName}.module'; \n`
    );

    tree.overwrite(
      `${project.sourceRoot}/app/store/store.module.ts`,
      updatedContent
    );
  }
}
