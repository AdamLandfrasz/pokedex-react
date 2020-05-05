import React, { useContext } from "react";
import Type from "./Type";
import { TypeContext } from "../context/TypeContext";

function TypesList() {
  const [selectedTypes, allTypes] = useContext(TypeContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      {allTypes.types.map((type) => (
        <Type
          key={type.name}
          type={type}
          active={true}
          selected={selectedTypes.selectedTypes.some(
            (selectedType) => selectedType.name === type.name
          )}
        />
      ))}
    </div>
  );
}

export default TypesList;
