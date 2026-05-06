"use client";

import { useLayoutEffect, useState } from "react";

const html = `<div id="loader">
  <div class="figma-canvas-bg"></div>

  <!-- Top toolbar -->
  <div class="figma-topbar">
    <div class="figma-tb-dots">
      <div class="figma-tb-dot" style="background:#FF5F57;"></div>
      <div class="figma-tb-dot" style="background:#FFBD2E;"></div>
      <div class="figma-tb-dot" style="background:#28CA41;"></div>
    </div>
    <div class="figma-tb-logo">
      <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5C19 22.9772 23.4772 18.5 29 18.5C34.5228 18.5 39 22.9772 39 28.5C39 34.0228 34.5228 38.5 29 38.5C23.4772 38.5 19 34.0228 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 41.9772 4.47715 37.5 10 37.5H19V47.5C19 53.0228 14.5228 57.5 9 57.5C3.47715 57.5 0 53.0228 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0.5V18.5H29C34.5228 18.5 39 14.0228 39 8.5C39 2.97715 34.5228 0.5 29 0.5H19Z" fill="#FF7262"/>
        <path d="M0 8.5C0 14.0228 4.47715 18.5 10 18.5H19V0.5H10C4.47715 0.5 0 2.97715 0 8.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 34.0228 4.47715 38.5 10 38.5H19V18.5H10C4.47715 18.5 0 22.9772 0 28.5Z" fill="#FF7262"/>
      </svg>
    </div>
    <div class="figma-tb-menu">
      <span class="figma-tb-item">File</span>
      <span class="figma-tb-item">Edit</span>
      <span class="figma-tb-item">View</span>
      <span class="figma-tb-item active">Insert</span>
      <span class="figma-tb-item">Frame</span>
    </div>
    <div class="figma-tb-right">
      <span class="figma-tb-btn">100%</span>
      <div class="figma-tb-avatar">NT</div>
      <span class="figma-share-btn">Share</span>
    </div>
  </div>

  <!-- Left layers panel -->
  <div class="figma-left-panel" id="figmaPanel">
    <p class="figma-panel-title">Layers</p>
    <div class="figma-layer" id="layer1">
      <span class="figma-layer-icon">▣</span>
      <span class="figma-layer-name">nikunj-portfolio</span>
    </div>
    <div class="figma-layer layer-indent" id="layer2">
      <span class="figma-layer-icon">▣</span>
      <span class="figma-layer-name">Hero</span>
    </div>
    <div class="figma-layer layer-indent2 selected" id="layer3">
      <span class="figma-layer-icon">T</span>
      <span class="figma-layer-name">Nikunj Tyagi</span>
    </div>
    <div class="figma-layer layer-indent2" id="layer4">
      <span class="figma-layer-icon">T</span>
      <span class="figma-layer-name">Product Designer</span>
    </div>
    <div class="figma-layer layer-indent2" id="layer5">
      <span class="figma-layer-icon">T</span>
      <span class="figma-layer-name">Tagline</span>
    </div>
    <div class="figma-layer layer-indent2" id="layer6">
      <span class="figma-layer-icon">☁</span>
      <span class="figma-layer-name">Floating elements</span>
    </div>
  </div>

  <!-- Main canvas -->
  <div class="figma-main" id="figmaMain">
    <div class="figma-frame-wrap">
      <!-- Figma cursor -->
      <div class="fi-cursor" id="fiCursor" style="position:fixed;left:30%;top:35%;">
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
          <path d="M0 0L0 20L5 15L9 23L11 22L7 14L14 14Z" fill="white" stroke="#1E1E1E" stroke-width="1"/>
        </svg>
        <div class="fi-cursor-label" id="fiCursorLabel">Nikunj Tyagi</div>
      </div>

      <!-- The frame -->
      <div class="figma-frame-outline" id="figmaFrame">
        <span class="figma-frame-tag" id="figmaFrameTag">nikunj-portfolio / Hero</span>
        <div class="f-handle fh-tl" id="fhTl"></div>
        <div class="f-handle fh-tr" id="fhTr"></div>
        <div class="f-handle fh-bl" id="fhBl"></div>
        <div class="f-handle fh-br" id="fhBr"></div>
        <div class="f-handle fh-tm"></div>
        <div class="f-handle fh-bm"></div>
        <div class="f-handle fh-lm"></div>
        <div class="f-handle fh-rm"></div>
        <!-- Frame content -->
        <div class="frame-inner" id="figmaFrameContent">
          <div class="fi-name">
            <span class="fi-accent" id="fiNameText"></span><span class="fi-name-cursor" id="fiNameCursor"></span>
          </div>
          <p class="fi-role" id="fiRole">Product Designer · UI/UX · Figma</p>
          <p class="fi-tagline" id="fiTagline">"Turning complex into obvious."</p>
        </div>
      </div>
    </div>
  </div>

  <p class="figma-hint" id="figmaHint">designing since 2023 ✦</p>
</div>`;

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
