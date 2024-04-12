import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "../SideBar/Sidebar.css";
import { Context } from "../../context/context";

const SideBar = () => {
  const [extented, setExented] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt= async (prompt) =>{
    setRecentPrompt(prompt)
    await  onSent(prompt)
  }
  const handlMenu = () => {
   setExented((prev) => !prev);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={handlMenu}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extented ? <p>New Chat</p> : null}
        </div>
        {extented ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)} ...</p>
                </div>
              )
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
