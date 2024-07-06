import React from "react";
import { FormProvider } from "./FormContext";
import App from "./App";

const Main = () => (
    <FormProvider>
        <App />
    </FormProvider>
);

export default Main;
