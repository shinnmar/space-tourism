"use client";

import React from "react";
import styles from "../technology/technology.module.scss";
import useBodyClass from "@/hooks/useBodyClass";

const Technology: React.FC = () => {
  useBodyClass("technologyPage");
  return (
    <section className={styles.technology}>
      <div>Test</div>
    </section>
  );
};

export default Technology;
