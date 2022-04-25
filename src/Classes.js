import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { environment } from "./env";

export default function Classes() {
  const [val, setVal] = useState();
  const getAnswer = async () => {
    const {data} = await axios.get(environment.BaseUrl + "class/list");
    setVal(data['hydra:member'][0].libelle);
  }
  console.log(val);
  useEffect(() => {
    getAnswer();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div>{val}</div>;
      <Footer />
      </DashboardLayout>

      ) 

}
