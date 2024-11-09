import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack, CircularProgress, Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useListMovie from "../../../hooks/useListMovie";

export default function HomePage() {
 const navigate = useNavigate();
 const { data, isLoading, error } = useListMovie();

  if (isLoading) {
    return (
      <Stack alignItems="center" justifyContent="center" minHeight="60vh">
        <CircularProgress />
      </Stack>
    );
  }

  if (error) {
    return (
      <Stack alignItems="center" justifyContent="center" minHeight="60vh">
        <Alert severity="error">{error}</Alert>
      </Stack>
    );
  }


  const handleDetail = (id) => {
    navigate(`/movie-details/${id}`); 
  };

  return (
    <Stack
      sx={{
        padding: { xs: 2, md: 4 }, // Thêm padding responsive
       
        minHeight: "100vh",
      }}
    >
      <Stack
        spacing={4} // Tăng khoảng cách giữa các card
        direction="row"
        flexWrap="wrap"
        useFlexGap
        justifyContent="center"
      >
        {data && data.length > 0 ? (
          //render data
          data.map((movie) => (
            <Card
              key={movie.maPhim}
              sx={{
                maxWidth: 345,
                width: "100%",
                flex: {
                  xs: "1 1 100%",
                  sm: "1 1 45%",
                  md: "0 0 30%",
                },
                margin: 1,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                },
                borderRadius: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={movie.hinhAnh}
                  alt={movie.tenPhim}
                  sx={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-image.jpg";
                  }}
                />
                <CardContent sx={{ minHeight: 150 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      fontWeight: "bold",
                      mb: 2,
                    }}
                  >
                    {movie.tenPhim}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      lineHeight: 1.6,
                    }}
                  >
                    {movie.moTa || "Chưa có mô tả"}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "100%" }}
                onClick={() => handleDetail(movie.maPhim)}
              >
                Xem chi tiết
              </Button>
            </Card>
          ))
        ) : (
          <Alert
            severity="info"
            sx={{
              width: "100%",
              maxWidth: 500,
              margin: "20px auto",
            }}
          >
            Không có phim nào
          </Alert>
        )}
      </Stack>
    </Stack>
  );
}
