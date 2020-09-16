import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@material-ui/icons/TurnedInOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RepeatIcon from "@material-ui/icons/Repeat";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import "./styles.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

export default function ImgMediaCard() {
  var [follow, setflw] = useState(0);
  var [like, setlike] = useState(0);
  function followed() {
    setflw(1);
  }
  function liked() {
    setlike(1);
  }
  return (
    <div className="twit">
      <Card style={{ width: "flex" }}>
        <Typography gutterBottom variant="h5" component="h2">
          <div className="top">
            <div className="lefttop">
              <AccountCircleIcon style={{ fontSize: "40px" }} />
            </div>

            <div className="righttop">
              <ExpandMoreIcon />
            </div>
          </div>
        </Typography>

        <Typography>
          <div className="type">
            Hey there everyone I'm Yash Babiya , I am learning react js.
          </div>
          <br />
        </Typography>
        <Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <div className="btm">
              <ChatBubbleOutlineOutlinedIcon style={{ fontSize: "20px" }} />
              <span>37</span>
              <RepeatIcon style={{ fontSize: "20px" }} onClick={followed} />
              <span>{follow}</span>
              <FavoriteBorderIcon
                style={{ fontSize: "20px" }}
                onClick={liked}
              />
              <span>{like}</span>
              <ArrowUpwardOutlinedIcon style={{ fontSize: "20px" }} />
              <span></span>
            </div>
          </Typography>
        </Typography>
      </Card>
    </div>
  );
}
