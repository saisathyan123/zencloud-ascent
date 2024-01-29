import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img from "../assets/images/download.jpeg";

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [admissionDetails, setAdmissionDetails] = useState([]);
  useEffect(() => {
    const formdata = JSON.parse(localStorage.getItem("user"));

    setAdmissionDetails(formdata);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleEdit = (index) => {
    console.log("Editing item at index:", index);
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li onClick={() => handleOptionClick(1)}>Dashboard</li>
            <li onClick={() => handleOptionClick(1)}>Profile</li>
            <li onClick={() => handleOptionClick(1)}>Home</li>
            <li onClick={() => handleOptionClick(1)}>Settings</li>
            <li onClick={() => handleOptionClick(1)}>Logout</li>
          </ul>
        </div>

        <Card className="carddash" sx={{ maxWidth: 310, maxHeight: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={img}
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                My Classes
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize={11}>
                Yoga classes are the compass guiding individuals on a journey
                towards holistic well-being, where each pose and breath is a
                step towards balance and tranquility, fostering strength not
                only in the body but also in the mind and spirit.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              view
            </Button>
          </CardActions>
        </Card>
        <Card className="carddash2" sx={{ maxWidth: 310, maxHeight: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={img}
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Beginner Programs
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize={11}>
                Yoga is a way to produce a chemistry of blissfulness. Once you
                are blissful by your own nature, you can deal with outside
                situations effortlessly
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              view
            </Button>
          </CardActions>
        </Card>

        <Card className="carddash3" sx={{ maxWidth: 310, maxHeight: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={img}
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Advanced Programs
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize={11}>
                Yoga means union. To be in a state of yoga means to be complete
                within yourself.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              view
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
