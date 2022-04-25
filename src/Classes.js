import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { environment } from "./env";

export default function Classes() {
  const [val, setVal] = useState();
  const getAnswer = async () => {
    const { data } = await axios.get(environment.BaseUrl + "class/list");
    setVal(data['hydra:member']);
  }
  useEffect(() => {
    getAnswer();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {val ? (
        val.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.libelle}</td>
            </tr>
          )
        })) : (
        console.log('hi')
      )}

      <Footer />
    </DashboardLayout>

  )

}
