import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
function Dashboard() {
  return (
    <>
      <div className="area">
        <nav class="main-menu">
          <h1>ZenCloud Ascent</h1>
          <ul className="side-links">
            <li class="has-subnav">
              <Link to="/home">
                <i class="fa fa-bars"></i>

                <span class="nav-text">Dashboard</span>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/profile">
                <i class="fa fa-user fa-2x"></i>
                <span class="nav-text">Profile</span>
              </Link>
            </li>
            <li class="has-subnav">
              <Link to="/sales">
                <i class="fa fa-inr"></i>
                <span class="nav-text">My Admissions</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              My classes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Yoga classes are the compass guiding individuals on a journey
              towards holistic well-being, where each pose and breath is a step
              towards balance and tranquility, fostering strength not only in
              the body but also in the mind and spirit.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Dashboard;
