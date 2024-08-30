import React, { useRef } from "react";
import Tree from "react-d3-tree";
import { renderCustomNode } from "./customeNode";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeData } from "../store/slice/AllEmployeeSlice";

// Tree component for a vertical layout
const VerticalTree = () => {
  const treeContainer = useRef(null);
  const addedEmployee = useSelector((state) => state.AddEmployee.value);
  const employeeData = useSelector((state) => state.employees.data);
  const dispatch = useDispatch();
  console.log(addedEmployee);

  // Function to handle tree node click
  const handleNodeClick = (nodeData) => {
    console.log("Clicked node:", nodeData);
  };

  // Setting up the container dimensions
  const treeContainerStyle = {
    width: "100vw",
    height: "100vh",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
  };

  React.useEffect(() => {
    dispatch(fetchEmployeeData());
  }, [dispatch, addedEmployee]);

  return (
    <div style={treeContainerStyle} ref={treeContainer}>
      {employeeData.length !== 0 && (
        <Tree
          data={employeeData}
          orientation="vertical"
          translate={{ x: 700, y: 200 }}
          pathFunc="step"
          onClick={handleNodeClick}
          renderCustomNodeElement={renderCustomNode}
          zoomable={true}
          collapsible={true}
          separation={{ siblings: 5, nonSiblings: 3 }}
          nodeSize={{ x: 150, y: 300 }}
        />
      )}
    </div>
  );
};

export default VerticalTree;
