import React, { useState } from "react";
import { Container, Row, Col, Nav, Card, Button, Pagination, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const recipes = [
  { title: "Italian-style tomato salad", time: "14 minutes", img: "./public/food3.jpg" },
  { title: "Vegetable and shrimp spaghetti", time: "15 minutes", img: "./public/food2.jpg" },
  { title: "Lotus delight salad", time: "20 minutes", img: "./public/food3.jpg" },
  { title: "Snack cakes", time: "21 minutes", img: "./public/food4.jpg" },
  { title: "Salad with cabbage and shrimp", time: "32 minutes", img: "./public/food2.jpg" },
  { title: "Bean, shrimp, and potato salad", time: "32 minutes", img: "./public/food4.jpg" },
  { title: "Sunny-side up fried eggs", time: "32 minutes", img: "./public/food2.jpg" },
  { title: "Lotus delight salad", time: "32 minutes", img: "./public/food4.jpg" },
  { title: "Grilled Chicken", time: "25 minutes", img: "./public/food3.jpg" },
  { title: "Pasta Primavera", time: "30 minutes", img: "./public/food2.jpg" },
  { title: "Beef Steak", time: "45 minutes", img: "./public/food3.jpg" },
  { title: "Sushi Rolls", time: "50 minutes", img: "./public/food4.jpg" },
];

const ITEMS_PER_PAGE = 8;
function RecipeBox() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentRecipes = recipes.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container className="mt-4">
      <Row className="align-items-center mb-4">
        <Col xs="auto">
          <Image src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/434226139_1556003105258122_3740387905416390918_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGKo_D1O7RF2VtWI8-ZsK0hgCc7UvSo_NmAJztS9Kj82d57v-lKQ5sDbMMxhjWjjSOhnwsM4uxQtVNvMBxrMVqO&_nc_ohc=iLJEX3BbSHAQ7kNvgFeSmFD&_nc_oc=AdhGz3IK7fcF3D9aDIiWb8UoHtPXEBPevb4IBgjJLe7JwaaoacioDFqkkFHNaKNuGd8&_nc_zt=24&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=AK88FBuzSo5fzoCxWKlUjYQ&oh=00_AYAR3uniLUiJGJI0Kw5f6-rDC8hcAAaTWPa1FU2ACD0kfg&oe=67C79B69" roundedCircle />
        </Col>
        <Col>
          <h2>Emma Gonzalez's Recipe Box</h2>
          <p>
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times.
          </p>
          <Button variant="pink">Share</Button>
        </Col>
      </Row>
      <Nav variant="tabs" defaultActiveKey="saved">
        <Nav.Item>
          <Nav.Link eventKey="saved">Saved Recipes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="folders">Folders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="recipes">Recipes by Genevieve</Nav.Link>
        </Nav.Item>
      </Nav>
      <Row className="mt-3">
        {currentRecipes.map((recipe, index) => (
          <Col key={index} md={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src={recipe.img} />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <small className="text-muted">{recipe.time}</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, idx) => (
          <Pagination.Item 
            key={idx + 1} 
            active={idx + 1 === currentPage} 
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next 
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </Container>
  );
}

export default RecipeBox;
