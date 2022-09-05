import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
export default function Home() {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    console.log("inside useeffect");
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("../ckeditor5-build-with-htmlembed-master")
    };
    setEditorLoaded(true);
  }, []);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Ckeditor 5</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        onClick={() => {
          router.push("/faj");
        }}
      >
        {" "}
        go to faj{" "}
      </div>
      <h1>Ckeditor5 Nextjs</h1>
      {editorLoaded ? (
        <CKEditor className="mt-3 wrap-ckeditor" editor={ClassicEditor} />
      ) : (
        "loading..."
      )}
    </div>
  );
}
