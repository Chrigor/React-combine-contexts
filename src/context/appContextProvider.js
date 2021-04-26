import { combineContexts } from "./hooks/combineContexts";

import { ColorContextProvider } from "./Colors";

const providers = [ColorContextProvider];

export const AppContextProvider = combineContexts(...providers);
