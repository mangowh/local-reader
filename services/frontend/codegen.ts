import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/",
  documents: ["src/**/*.ts", "src/graphql/**/*.graphql"],
  generates: {
    "src/graphql/graphql.ts": {
      plugins: [
        "fragment-matcher",
        "typescript",
        "typescript-operations",
        "typescript-apollo-angular",
      ],
      config: {
        skipTypename: true,
      },
    },
  },
};

export default config;
