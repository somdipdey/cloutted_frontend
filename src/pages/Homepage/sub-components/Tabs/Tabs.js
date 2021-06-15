import React from "react";
import "./Tabs.scss";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";

const Tab = ({ name, setTab, idx, isActive }) => (
  <div
    className={`Tabs__tab${isActive ? " Tabs__tab--active" : ""}`}
    onClick={() => setTab(idx)}
  >
    <p className="Tabs__tabLabel">{name}</p>
  </div>
);

const tabList = [
  { title: "Hot" },
  { title: "New Discoveries" },
  { title: "Top" },
  { title: "Cloutted Communities" },
];

function Tabs({ tabNo, setTab, tabTitles }) {
  const tabs = tabTitles ?? tabList;
  return (
    <div className="Tabs">
      {tabs.map(({ title }, idx) => (
        <Tab name={title} isActive={tabNo === idx} setTab={setTab} idx={idx} />
      ))}
      {/* <div className="Tabs__more" onClick={() => setTab(4)}>
        <MoreVertRoundedIcon color={tabNo === 3 ? `#ddd` : `#333`} />
      </div> */}
    </div>
  );
}

export default Tabs;
