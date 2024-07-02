import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import styles from "../styles/CustomCard.module.css";

interface CustomCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <Card className={`${styles.card}`}>
      <CardBody className={`${styles.cardBody}`}>
        <Image
          alt={imageAlt}
          className={`${styles.cardImage}`}
          src={imageSrc}
          width="100%"
          height="auto"
        />
      </CardBody>
      <CardHeader className={`${styles.cardHeader}`}>
        <h4 className={`${styles.cardTitle}`}>{title}</h4>
        <p className={`${styles.cardDescription}`}>{description}</p>
      </CardHeader>
    </Card>
  );
};

export default CustomCard;
