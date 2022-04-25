import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import useFetch from "react-fetch-hook"
import { environment } from "./env";


function Classes() {
  const { data } = useFetch(environment.BaseUrl + "class/list");
  if (data) console.log(data[0]);

}
export default Classes;
