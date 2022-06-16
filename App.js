import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Routes from "./src/routes";
import GlobalContextProvider from "./src/contexts/globalContext";
import useCachedResources from "./src/hooks/useCachedResources";

export default function App() {
  const areCachedResourcesLoaded = useCachedResources();

  return (
    areCachedResourcesLoaded && (
      <GlobalContextProvider>
        <Routes />
        <StatusBar style="auto" />
      </GlobalContextProvider>
    )
  );
}
