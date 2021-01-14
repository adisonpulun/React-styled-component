import React from "react";
import { SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBinWrap ,SIdebarRoute} from "./SidebarElements";

const Sidebar = ( {isOpen , toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">CocaCola</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBinWrap>
          <SIdebarRoute to="/">Order Now</SIdebarRoute>
      </SideBinWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
