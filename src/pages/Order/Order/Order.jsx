import { useState } from "react";
import orderCover from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderPanel from "../OrderPanel/OrderPanel";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drink = menu.filter((item) => item.category === "drinks");

  return (
    <div className="text-center">
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={orderCover} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drink</Tab>
        </TabList>
        <TabPanel>
          <OrderPanel items={salad}></OrderPanel>
        </TabPanel>
        <TabPanel>
          <OrderPanel items={pizza}></OrderPanel>
        </TabPanel>
        <TabPanel>
          <OrderPanel items={soup}></OrderPanel>
        </TabPanel>
        <TabPanel>
          <OrderPanel items={dessert}></OrderPanel>
        </TabPanel>
        <TabPanel>
          <OrderPanel items={drink}></OrderPanel>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
