import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/",
  documents: ["src/**/*.ts", "src/graphql/schema/**/*.graphql"],
  generates: {
    "src/graphql/graphql.ts": {
      plugins: [
        "fragment-matcher",
        "typescript",
        "typescript-operations",
        "typescript-apollo-angular",
      ],
    },
  },
};

export default config;
