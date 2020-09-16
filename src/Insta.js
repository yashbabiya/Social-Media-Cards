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
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import TurnedInNotOutlinedIcon from "@material-ui/icons/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@material-ui/icons/TurnedInOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./styles.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});
var k = "Add a Comment...";

export default function ImgMediaCard() {
  let [j, setj] = useState(<FavoriteBorderIcon />);
  let [sa, setsa] = useState(<TurnedInNotOutlinedIcon />);
  const classes = useStyles();
  function liked() {
    setj(<FavoriteIcon />);
  }
  function saved() {
    setsa(<TurnedInOutlinedIcon />);
  }
  return (
    <div className="insta">
      <Card className={classes.root} style={{ boxShadow: "20px" }}>
        <Typography gutterBottom variant="h5" component="h2">
          <div className="top">
            <div className="lefttop">
              <AccountCircleIcon style={{ fontSize: "40px" }} />
            </div>

            <div className="righttop">
              <MoreHorizIcon />
            </div>
          </div>
        </Typography>

        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="350"
          image="https://i.pinimg.com/736x/ca/b8/73/cab873f7fa3b73a8a72b6cd737e94075.jpg"
          title="Contemplative Reptile"
        />
        <Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <div className="btm">
              <div className="leftbt">
                <span id="like" onClick={liked}>
                  {j}
                </span>

                <span>
                  <ChatBubbleOutlineOutlinedIcon />
                </span>
                <span>
                  <PersonOutlinedIcon />
                </span>
              </div>

              <div className="rightbt" onClick={saved}>
                {sa}
              </div>
            </div>
          </Typography>
          <Typography>
            <div className="type">
              <b>3773 likes</b>
              <br />
              Hey there everyone I'm Yash Babiya !!
            </div>
            <br />
          </Typography>
        </Typography>

        <div className="bottom">
          <input type="text" placeholder={k} />
        </div>
      </Card>
    </div>
  );
}
