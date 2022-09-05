import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
export default function Faj() {
  const router = useRouter();

  return (
    <div
      className={styles.container}
      onClick={() => {
        router.push("/");
      }}
    >
      duiofdf
    </div>
  );
}
