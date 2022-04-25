import axios from "axios";
import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
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
      <Grid container spacing={3}>
        {val ? (
          val.map((item) => {
            return (
              <><Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    icon="school"
                    title={item.libelle}
                    eleves={281}
                    percentage={{
                      color: "success",
                      amount: "+55%",
                      label: "than lask week"
                    }} />
                </MDBox>
              </Grid></>
            )
          })) : (
          console.log('hi')
        )}
      </Grid>
      <Footer />
    </DashboardLayout>

  )

}
