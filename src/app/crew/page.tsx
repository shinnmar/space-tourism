"use client";

import React from "react";
import styles from "../crew/crew.module.scss";
import useBodyClass from "@/hooks/useBodyClass";

const Crew: React.FC = () => {
  useBodyClass("crewPage");
  return (
    <section className={styles.crewPage}>
      <div>Test</div>
    </section>
  );
};

export default Crew;
