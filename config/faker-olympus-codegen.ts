

// graphql-codegen --config config/faker-olympus-codegen.ts
import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://faker.graphqleditor.com/a-team/olympus/graphql",
  generates: {
    "src/generated/faker-olympus/": {
      preset: 'client',
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
