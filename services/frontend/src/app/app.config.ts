import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideNgIconsConfig } from "@ng-icons/core";
import { graphqlProvider } from "../graphql/graphql.provider";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    graphqlProvider,
    provideNgIconsConfig({
      size: "1.5em",
    }),
  ],
};
