import React from "react";
import styles from "../destination/destination.module.scss";
import useBodyClass from "@/hooks/useBodyClass";

const Destination: React.FC = () => {
  useBodyClass("destinationPage");
  return (
    <section className={styles.destination}>
      <h2>Destination</h2>
    </section>
  );
};

export default Destination;
