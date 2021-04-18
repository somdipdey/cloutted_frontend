import React from "react";
import HotView from "./Views/HotView/HotView";
import NewView from "./Views/NewView/NewView";
import TopView from "./Views/TopView/TopView";
import CommunityView from "./Views/CommunityView/CommunityView";
import MoreView from "./Views/MoreView/MoreView";

const RenderTab = ({ tab }) => {
  if (tab === 0) return <HotView />;
  if (tab === 1) return <NewView />;
  if (tab === 2) return <TopView />;
  if (tab === 3) return <CommunityView />;
  if (tab === 4) return <MoreView />;
  return <div>View not found</div>;
};

function TabView({ tab }) {
  return <RenderTab tab={tab} />;
}

export default TabView;
