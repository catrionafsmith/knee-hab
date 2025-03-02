import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Layout from "./Layout";
import '@mantine/core/styles.css';
import { mantineTheme } from "./theme";
import React from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <MantineProvider theme={mantineTheme}>
      <Layout/>
    </MantineProvider>
  );
}
