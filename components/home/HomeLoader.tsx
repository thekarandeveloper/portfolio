"use client";

import { useLayoutEffect, useState } from "react";

const html = `<div id="loader"><div id="blobWrap"><div id="blobPink"></div><div id="blobBlue"></div></div><div id="blobLine"></div></div>`;

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
