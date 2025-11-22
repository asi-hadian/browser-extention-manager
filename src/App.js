import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ExtentionCard from "./components/extentions/extentionCard/ExtentionCard";
import ExtentionList from "./components/extentions/extentionList/ExtentionList";
import Navbar from "./components/layout/navbar/Navbar";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => setData(response.data.data))
      .catch((error) => console.error("خطا در دریافت داده‌ها:", error));
  }, []);

  const handleToggle = (id) => {
    const updated = data.map((item) =>
      item.id === id ? { ...item, isActive: !item.isActive } : item
    );
    setData(updated);
  };
  const handleRemove = (id) => {
    const updated = data.filter((item) => item.id !== id);
    setData(updated);
  };

  const showAll = () => {
    setFilter("all");
  };

  const showActive = () => {
    setFilter("Active");
  };

  const showInactive = () => {
    setFilter("Inactive");
  };

  const filterData = data.filter((item) => {
    if (filter === "Active") return item.isActive;
    if (filter === "Inactive") return !item.isActive;
    return true;
  });

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <div className={isLightMode ? "appLight" : "appDark"}>
      <Navbar onThemeToggle={toggleTheme} isLightMode={isLightMode} />
      <ExtentionList
        AllBtn={showAll}
        ActiveBtn={showActive}
        InactiveBtn={showInactive}
      />
      <div className="extentionCards">
        {filterData.map((item) => (
          <ExtentionCard
            key={item.id}
            logo={item.logo}
            name={item.name}
            description={item.description}
            isActive={item.isActive}
            onToggle={() => handleToggle(item.id)}
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
