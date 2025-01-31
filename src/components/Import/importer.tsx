import React from "react";

import { LocalIPFSView } from "../LocalStorage/LocalIPFSView";

import { IPFSImporter } from "./IPFSImporter";
import { PinataImport } from "./PinataImport";



interface importerProps {}

export const Importer: React.FC<importerProps> = ({}) => {
  return (
    <>
        <hr></hr>
        <IPFSImporter/>
        <PinataImport></PinataImport>
        <LocalIPFSView/>
    </>
  );
};
