import React from "react";
import "../../assets/Boxl3.css";
import "../../assets/Boxl2.css";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import WbCloudyOutlinedIcon from "@mui/icons-material/WbCloudyOutlined";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import img from '../../assets/server-storage.png'
import Guagechart from "../guagechart/Guagechart";

const L3Box = ({ box }) => {
  const datase = window.innerWidth <= 1004;
  console.log(datase);
  const data = [
    {
      icon: <MonetizationOnOutlinedIcon />,
      title: "COST",
      dollar: <AttachMoneyOutlinedIcon />,
      mainnumber: "24.0K",
      day: "/Day",
      rate: "Run Rate",
      no1: "$0.40",
      lastline1: "/Instance HR",
      no2: "",
      lastline2: "",
      no3: "",
      lastline3: "",
      no4: "",
      lastline4: "",
    },
    {
      icon: <TroubleshootOutlinedIcon fontSize="small" />,
      title: "MONITORING",
      dollar: "",
      mainnumber: "3.4M",
      day: "Requests",
      rate: "Last 5 hours 30 minutes",
      no1: "30.5K",
      lastline1: "TMNG",
      no2: "10.OK",
      lastline2: "SOCL",
      no3: "17.4K",
      lastline3: "REBL",
      no4: "",
      lastline4: "",
    },
    {
      icon: <WbCloudyOutlinedIcon />,
      title: "INVENTORY",
      dollar: "",
      mainnumber: "6.5K",
      day: "current",
      rate: "instances",
      no1: "153",
      lastline1: "LBs",
      no2: "57",
      lastline2: "ASG",
      no3: "132",
      lastline3: "S3",
      no4: "9000",
      lastline4: "EBS",
    },
    {
      icon: <TimelapseOutlinedIcon />,
      title: "UTILIZATION",
      dollar: "",
      mainnumber: "39",
      percentage: "%",
      day: "",
      rate: "Overall",
      no1: <Guagechart filledPercentage={25}/>,
      lastline1: "CPU",
      no2:<Guagechart filledPercentage={50}/>,
      lastline2: "I/O",
      no3:<Guagechart filledPercentage={75}/>,
      lastline3: "DISK",
      no4: "",
      lastline4: "",
    },
    {
      icon: <VerifiedIcon />,
      title: "COMPLIANCE",
      dollar: "",
      mainnumber: "99.82",
      percentage: "%",
      day: "comilance",
      rate: "All Apps",
      no1: "98.4%",
      lastline1: "TMNG",
      no2: "98.1",
      lastline2: "REBL",
      no3: "96.7%",
      lastline3: "SOCL",
    },
    {
      icon: img,
      title: "STORAGE",
      dollar: "",
      mainnumber: "4.15",
      day: "",
      rate: "PB In Use",
      no1: "0.65",
      lastline1: "EBS",
      no2: "1.50",
      lastline2: "S3",
      no3: "0.65",
      lastline3: "Other",
      pb1: "PB",
      pb2: "PB",
      pb3: "PB",
    },
  ];
  const boxData = data[box - 1] || {};

  return (
    <div className="main-content-3">
      <div className="top-content-3">
      {
          boxData.title==="STORAGE"?
          <div className="icon"><img style={{width:"1rem"}} src={boxData.icon} alt="" srcset="" /></div>
          :
        <div className="icon">{boxData.icon}</div>
      }
        <div className="title">{boxData.title}</div>
      </div>

      <div className="bottom-content-3">
        <span>{boxData.dollar}</span>
        <span>
          {boxData.mainnumber}
          <span style={{ fontWeight: "300", marginBottom: "5px" }}>
            {boxData.percentage}
          </span>
        </span>
        <div className="sign-text-con-3">
          <div>{boxData.day}</div>
          <div>{boxData.rate}</div>
        </div>
      </div>
      <div className="bottom-main-content">
        <div className="box-data-content">
          <div>
            <div>
              {boxData.no1}
              <span>{boxData.pb1}</span>
            </div>
            <div className="lastline">{boxData.lastline1}</div>
          </div>
          {boxData.no2 && (
            <div>
              <div>
                {boxData.no2}
                <span>{boxData.pb2}</span>
              </div>
              <div className="lastline">{boxData.lastline2}</div>
            </div>
          )}
          {boxData.no3 && (
            <div>
              <div>
                {boxData.no3}
                <span>{boxData.pb3}</span>
              </div>
              <div className="lastline">{boxData.lastline3}</div>
            </div>
          )}
          {boxData.no4 && (
            <div>
              <div>{boxData.no4}</div>
              <div className="lastline">{boxData.lastline4}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default L3Box;
