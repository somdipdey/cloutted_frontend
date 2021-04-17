import React from "react";
import HotView from "./Views/HotView/HotView";

const NewComponent = () => <div> This is new component </div>;
const TopComponent = () => <div> This is top component </div>;
const MoreComponent = () => <div> This is More component </div>;

const RenderTab = ({ tab }) => {
  if (tab === 0) return <HotView />;
  if (tab === 1) return <NewComponent />;
  if (tab === 2) return <TopComponent />;
  if (tab === 3) return <MoreComponent />;
  return <div>View not found</div>;
};

function TabView({ tab }) {
  return <RenderTab tab={tab} />;
}

export default TabView;
