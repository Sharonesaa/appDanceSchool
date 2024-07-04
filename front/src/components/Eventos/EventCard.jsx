import React from 'react';
import styles from './EventCard.module.css';

function EventCard({ image, title, date, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDate}>{date}</p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}

export default EventCard;