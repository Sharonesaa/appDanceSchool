import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './PackCard.module.css';

function PackCard({ title, description, image, price }) {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={image} className={styles.cardImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className={styles.price}>{price}</div>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default PackCard;
