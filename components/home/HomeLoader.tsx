"use client";

import { useLayoutEffect, useState } from "react";

const html = `<div id="loader"><div id="glassBlob"><svg id="glassArrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E90FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg></div></div>`;

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
