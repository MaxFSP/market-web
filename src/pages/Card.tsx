import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
interface Iprops {
  itemId: number;
  description: string;
  quantity: number;
}
export default function BasicCard({ itemId, description, quantity }: Iprops) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await axios.post(`http://localhost:3000/list`, {
      itemId: itemId,
      userId: localStorage.getItem("userId"),
      quantity: quantity,
    });
  };

  return (
    <Card
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Item {itemId}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Buy
        </Button>
      </CardContent>
    </Card>
  );
}
