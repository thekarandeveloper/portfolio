"use client";

import { useLayoutEffect, useState } from "react";

const html = `<div id="loader"><div id="blob"></div></div>`;

export function HomeLoader() {
  const [hide, setHide] = useState(false);

  useLayoutEffect(() => {
    if (sessionStorage.getItem("loader_seen")) {
      setHide(true);
    }
  }, []);

  if (hide) return null;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
