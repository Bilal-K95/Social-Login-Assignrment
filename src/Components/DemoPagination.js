import React, { useState, useEffect } from "react";
import {
  Container,
  Pagination,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import axios from "axios";
import Nav from "./Nav";

export default function DemoPagination() {
  const [page, SetPage] = useState(1);
  const [posts, setPost] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
      .then((res) => {
        setPost(res.data);
      });
  }, [page]);
  return (
    <div>
      <Container component={Box} py={3}>
        <Nav />
        <TextField
          label="Search input"
          size="small"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          style={{
            position: "relative",
            margin: "-52px 80%",
            width: "200px",
            height: "40px",
            backgroundColor: "white",
          }}
        />
        <Grid container spacing={2}>
          {posts
            .filter((post) => {
              if (search === "") {
                return post;
              } else if (
                post.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return post;
              }
            })
            .map((post) => (
              <Grid item sm={3} key={post.id}>
                <Card align="left" style={{ height: "250px" }}>
                  <CardContent>
                    <Typography>
                      {post.id}. {post.title}
                    </Typography>
                    <Typography>{post.body}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
        <Typography align="center" mt={4}>
          {page}
        </Typography>
        <Pagination
          count={10}
          color="secondary"
          variant="outlined"
          shape="rounde"
          defaultPage={1}
          showFirstButton={true}
          showLastButton={true}
          onChange={(event, value) => SetPage(value)}
          style={{ margin: "10px 400px", width: "800px" }}
        />
      </Container>
    </div>
  );
}
