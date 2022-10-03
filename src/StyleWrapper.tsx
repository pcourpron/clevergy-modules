import styled from "styled-components";

export const StyleWrapper = styled.div`
  @charset "UTF-8";
  @import url(https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap);
  /*
! tailwindcss v3.1.6 | MIT License | https://tailwindcss.com
*/
  *,
  :after,
  :before {
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
  }
  :after,
  :before {
    --tw-content: "";
  }
  html {
    -webkit-text-size-adjust: 100%;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    line-height: 1.5;
    tab-size: 4;
  }
  body {
    line-height: inherit;
    margin: 0;
  }
  hr {
    border-top-width: 1px;
    color: inherit;
    height: 0;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      Liberation Mono, Courier New, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: initial;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    border-collapse: collapse;
    border-color: inherit;
    text-indent: 0;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }
  button,
  select {
    text-transform: none;
  }
  [type="button"],
  [type="reset"],
  [type="submit"],
  button {
    -webkit-appearance: button;
    background-color: initial;
    background-image: none;
  }
  :-moz-focusring {
    outline: auto;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  progress {
    vertical-align: initial;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  summary {
    display: list-item;
  }
  blockquote,
  dd,
  dl,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  p,
  pre {
    margin: 0;
  }
  fieldset {
    margin: 0;
  }
  fieldset,
  legend {
    padding: 0;
  }
  menu,
  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  textarea {
    resize: vertical;
  }
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: #9ca3af;
    opacity: 1;
  }
  input::placeholder,
  textarea::placeholder {
    color: #9ca3af;
    opacity: 1;
  }
  [role="button"],
  button {
    cursor: pointer;
  }
  :disabled {
    cursor: default;
  }
  audio,
  canvas,
  embed,
  iframe,
  img,
  object,
  svg,
  video {
    display: block;
    vertical-align: middle;
  }
  img,
  video {
    height: auto;
    max-width: 100%;
  }
  *,
  :after,
  :before {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
  }
  ::-webkit-backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
  }
  ::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
  }
  .clevergy-pointer-events-none {
    pointer-events: none;
  }
  .clevergy-fixed {
    position: fixed;
  }
  .clevergy-absolute {
    position: absolute;
  }
  .clevergy-relative {
    position: relative;
  }
  .clevergy-bottom-0 {
    bottom: 0;
  }
  .clevergy-top-\[0\] {
    top: 0;
  }
  .clevergy-left-0 {
    left: 0;
  }
  .clevergy-right-0 {
    right: 0;
  }
  .clevergy-top-\[15px\] {
    top: 15px;
  }
  .clevergy-right-\[15px\] {
    right: 15px;
  }
  .clevergy-top-0 {
    top: 0;
  }
  .clevergy-left-\[138px\] {
    left: 138px;
  }
  .clevergy-top-\[8px\] {
    top: 8px;
  }
  .clevergy-left-\[8px\] {
    left: 8px;
  }
  .clevergy-top-\[30px\] {
    top: 30px;
  }
  .clevergy-left-\[33px\] {
    left: 33px;
  }
  .clevergy-top-\[163px\] {
    top: 163px;
  }
  .clevergy-left-\[155px\] {
    left: 155px;
  }
  .clevergy-top-\[150px\] {
    top: 150px;
  }
  .clevergy-left-\[178px\] {
    left: 178px;
  }
  .clevergy-top-\[25px\] {
    top: 25px;
  }
  .clevergy-top-1 {
    top: 0.25rem;
  }
  .clevergy-right-\[-16px\] {
    right: -16px;
  }
  .clevergy-z-\[1001\] {
    z-index: 1001;
  }
  .clevergy-z-\[1000\] {
    z-index: 1000;
  }
  .clevergy-z-\[-1\] {
    z-index: -1;
  }
  .clevergy-z-\[9999\] {
    z-index: 9999;
  }
  .clevergy-float-right {
    float: right;
  }
  .clevergy-m-auto {
    margin: auto;
  }
  .clevergy-mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .clevergy-my-10 {
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
  }
  .clevergy-mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .clevergy-mx-8 {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .clevergy-mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .clevergy-my-2 {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
  .clevergy-my-4 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .clevergy-mr-1 {
    margin-right: 0.25rem;
  }
  .clevergy-mb-6 {
    margin-bottom: 1.5rem;
  }
  .clevergy-mt-\[-10px\] {
    margin-top: -10px;
  }
  .clevergy-mt-px {
    margin-top: 1px;
  }
  .clevergy-mt-4 {
    margin-top: 1rem;
  }
  .clevergy-ml-\[4\%\] {
    margin-left: 4%;
  }
  .clevergy-mb-1 {
    margin-bottom: 0.25rem;
  }
  .clevergy-mb-4 {
    margin-bottom: 1rem;
  }
  .clevergy-mr-2 {
    margin-right: 0.5rem;
  }
  .clevergy-ml-1 {
    margin-left: 0.25rem;
  }
  .clevergy-mt-6 {
    margin-top: 1.5rem;
  }
  .clevergy-ml-4 {
    margin-left: 1rem;
  }
  .clevergy-mt-\[-15px\] {
    margin-top: -15px;
  }
  .clevergy-ml-\[-9px\] {
    margin-left: -9px;
  }
  .clevergy-mt-\[50px\] {
    margin-top: 50px;
  }
  .clevergy-mt-1 {
    margin-top: 0.25rem;
  }
  .clevergy-ml-3 {
    margin-left: 0.75rem;
  }
  .clevergy-mb-2 {
    margin-bottom: 0.5rem;
  }
  .clevergy-ml-2 {
    margin-left: 0.5rem;
  }
  .clevergy-mt-2 {
    margin-top: 0.5rem;
  }
  .clevergy-mt-\[72px\] {
    margin-top: 72px;
  }
  .clevergy-mb-10 {
    margin-bottom: 2.5rem;
  }
  .clevergy-block {
    display: block;
  }
  .clevergy-flex {
    display: flex;
  }
  .clevergy-grid {
    display: grid;
  }
  .clevergy-hidden {
    display: none;
  }
  .clevergy-h-screen {
    height: 100vh;
  }
  .clevergy-h-full {
    height: 100%;
  }
  .clevergy-h-\[200px\] {
    height: 200px;
  }
  .clevergy-h-\[80px\] {
    height: 80px;
  }
  .clevergy-h-\[100px\] {
    height: 100px;
  }
  .clevergy-h-\[209px\] {
    height: 209px;
  }
  .clevergy-h-\[40px\] {
    height: 40px;
  }
  .clevergy-h-\[60px\] {
    height: 60px;
  }
  .clevergy-h-\[55\%\] {
    height: 55%;
  }
  .clevergy-h-auto {
    height: auto;
  }
  .clevergy-h-\[45\%\] {
    height: 45%;
  }
  .clevergy-h-2 {
    height: 0.5rem;
  }
  .clevergy-h-\[50px\] {
    height: 50px;
  }
  .clevergy-h-3 {
    height: 0.75rem;
  }
  .clevergy-h-\[45px\] {
    height: 45px;
  }
  .clevergy-h-fit {
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
  }
  .clevergy-h-\[30px\] {
    height: 30px;
  }
  .clevergy-min-h-\[579px\] {
    min-height: 579px;
  }
  .clevergy-w-full {
    width: 100%;
  }
  .clevergy-w-\[95\%\] {
    width: 95%;
  }
  .clevergy-w-\[230px\] {
    width: 230px;
  }
  .clevergy-w-\[209px\] {
    width: 209px;
  }
  .clevergy-w-\[40px\] {
    width: 40px;
  }
  .clevergy-w-\[60px\] {
    width: 60px;
  }
  .clevergy-w-\[400\%\] {
    width: 400%;
  }
  .clevergy-w-\[300\%\] {
    width: 300%;
  }
  .clevergy-w-2 {
    width: 0.5rem;
  }
  .clevergy-w-10 {
    width: 2.5rem;
  }
  .clevergy-w-\[175px\] {
    width: 175px;
  }
  .clevergy-w-\[100vw\] {
    width: 100vw;
  }
  .clevergy-w-\[50px\] {
    width: 50px;
  }
  .clevergy-w-\[45px\] {
    width: 45px;
  }
  .clevergy-w-\[240px\] {
    width: 240px;
  }
  .clevergy-w-7 {
    width: 1.75rem;
  }
  .clevergy-w-\[74px\] {
    width: 74px;
  }
  .clevergy-min-w-\[45px\] {
    min-width: 45px;
  }
  .clevergy-grow {
    flex-grow: 1;
  }
  .clevergy-translate-y-\[40\%\] {
    --tw-translate-y: 40%;
  }
  .clevergy-translate-y-\[0\%\],
  .clevergy-translate-y-\[40\%\] {
    -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  .clevergy-translate-y-\[0\%\] {
    --tw-translate-y: 0%;
  }
  .clevergy-translate-x-\[-48\%\] {
    --tw-translate-x: -48%;
    -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  @-webkit-keyframes clevergy-pulse {
    50% {
      opacity: 0.5;
    }
  }
  @keyframes clevergy-pulse {
    50% {
      opacity: 0.5;
    }
  }
  .clevergy-animate-pulse-slow {
    -webkit-animation: clevergy-pulse 2s linear 2;
    animation: clevergy-pulse 2s linear 2;
  }
  .clevergy-appearance-none {
    -webkit-appearance: none;
    appearance: none;
  }
  .clevergy-auto-cols-auto {
    grid-auto-columns: auto;
  }
  .clevergy-grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .clevergy-grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .clevergy-grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .clevergy-grid-cols-granularity {
    grid-template-columns: 75px 65px 85px;
  }
  .clevergy-grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .clevergy-flex-col {
    flex-direction: column;
  }
  .clevergy-items-start {
    align-items: flex-start;
  }
  .clevergy-items-end {
    align-items: flex-end;
  }
  .clevergy-items-center {
    align-items: center;
  }
  .clevergy-items-baseline {
    align-items: baseline;
  }
  .clevergy-justify-start {
    justify-content: flex-start;
  }
  .clevergy-justify-end {
    justify-content: flex-end;
  }
  .clevergy-justify-center {
    justify-content: center;
  }
  .clevergy-justify-between {
    justify-content: space-between;
  }
  .clevergy-gap-4 {
    gap: 1rem;
  }
  .clevergy-gap-1 {
    gap: 0.25rem;
  }
  .clevergy-gap-2 {
    gap: 0.5rem;
  }
  .clevergy-overflow-hidden {
    overflow: hidden;
  }
  .clevergy-overflow-x-hidden {
    overflow-x: hidden;
  }
  .clevergy-overflow-y-scroll {
    overflow-y: scroll;
  }
  .clevergy-whitespace-nowrap {
    white-space: nowrap;
  }
  .clevergy-rounded-lg {
    border-radius: 0.5rem;
  }
  .clevergy-rounded {
    border-radius: 0.25rem;
  }
  .clevergy-rounded-xl {
    border-radius: 0.75rem;
  }
  .clevergy-rounded-full {
    border-radius: 9999px;
  }
  .clevergy-border {
    border-width: 1px;
  }
  .clevergy-border-2 {
    border-width: 2px;
  }
  .clevergy-border-8 {
    border-width: 8px;
  }
  .clevergy-border-4 {
    border-width: 4px;
  }
  .clevergy-border-transparent {
    border-color: transparent;
  }
  .clevergy-border-blueStreak {
    --tw-border-opacity: 1;
    border-color: rgb(36 110 184 / var(--tw-border-opacity));
  }
  .clevergy-border-cadmium {
    --tw-border-opacity: 1;
    border-color: rgb(0 102 51 / var(--tw-border-opacity));
  }
  .clevergy-border-darkOrange {
    --tw-border-opacity: 1;
    border-color: rgb(255 144 42 / var(--tw-border-opacity));
  }
  .clevergy-border-red {
    --tw-border-opacity: 1;
    border-color: rgb(238 82 83 / var(--tw-border-opacity));
  }
  .clevergy-border-darkGrey {
    --tw-border-opacity: 1;
    border-color: rgb(179 179 179 / var(--tw-border-opacity));
  }
  .clevergy-border-acidGreen {
    --tw-border-opacity: 1;
    border-color: rgb(242 243 170 / var(--tw-border-opacity));
  }
  .clevergy-border-borderGrey {
    --tw-border-opacity: 1;
    border-color: rgb(222 224 235 / var(--tw-border-opacity));
  }
  .clevergy-border-seaGreen {
    border-color: #3ba9a0b2;
  }
  .clevergy-bg-lightGrey {
    --tw-bg-opacity: 1;
    background-color: rgb(247 247 247 / var(--tw-bg-opacity));
  }
  .clevergy-bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  .clevergy-bg-black {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  }
  .clevergy-bg-grey {
    --tw-bg-opacity: 1;
    background-color: rgb(249 249 249 / var(--tw-bg-opacity));
  }
  .clevergy-bg-offGreen {
    --tw-bg-opacity: 1;
    background-color: rgb(246 249 246 / var(--tw-bg-opacity));
  }
  .clevergy-bg-lightAcidGreen {
    --tw-bg-opacity: 1;
    background-color: rgb(223 235 231 / var(--tw-bg-opacity));
  }
  .clevergy-bg-seaGreen {
    background-color: #3ba9a0b2;
  }
  .clevergy-bg-gray-500 {
    --tw-bg-opacity: 1;
    background-color: rgb(107 114 128 / var(--tw-bg-opacity));
  }
  .clevergy-bg-darkGrey {
    --tw-bg-opacity: 1;
    background-color: rgb(179 179 179 / var(--tw-bg-opacity));
  }
  .clevergy-bg-darkerGrey {
    --tw-bg-opacity: 1;
    background-color: rgb(224 229 235 / var(--tw-bg-opacity));
  }
  .clevergy-bg-contain {
    background-size: contain;
  }
  .clevergy-bg-center {
    background-position: 50%;
  }
  .clevergy-bg-no-repeat {
    background-repeat: no-repeat;
  }
  .clevergy-p-3 {
    padding: 0.75rem;
  }
  .clevergy-p-2 {
    padding: 0.5rem;
  }
  .clevergy-p-px {
    padding: 1px;
  }
  .clevergy-p-1 {
    padding: 0.25rem;
  }
  .clevergy-py-2 {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
  .clevergy-px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .clevergy-py-10 {
    padding-bottom: 2.5rem;
    padding-top: 2.5rem;
  }
  .clevergy-py-6 {
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }
  .clevergy-px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .clevergy-px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .clevergy-py-3 {
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;
  }
  .clevergy-px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .clevergy-py-\[10px\] {
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .clevergy-px-\[27px\] {
    padding-left: 27px;
    padding-right: 27px;
  }
  .clevergy-py-4 {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  .clevergy-py-1 {
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
  }
  .clevergy-pb-2 {
    padding-bottom: 0.5rem;
  }
  .clevergy-pb-3 {
    padding-bottom: 0.75rem;
  }
  .clevergy-pb-0 {
    padding-bottom: 0;
  }
  .clevergy-pt-1 {
    padding-top: 0.25rem;
  }
  .clevergy-pb-5 {
    padding-bottom: 1.25rem;
  }
  .clevergy-text-center {
    text-align: center;
  }
  .clevergy-font-mulish {
    font-family: Mulish;
  }
  .clevergy-text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  .clevergy-text-\[33px\] {
    font-size: 33px;
  }
  .clevergy-text-\[12px\] {
    font-size: 12px;
  }
  .clevergy-text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  .clevergy-text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .clevergy-text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .clevergy-text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  .clevergy-text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  .clevergy-text-\[34px\] {
    font-size: 34px;
  }
  .clevergy-text-\[20px\] {
    font-size: 20px;
  }
  .clevergy-text-\[0px\] {
    font-size: 0;
  }
  .clevergy-text-\[14px\] {
    font-size: 14px;
  }
  .clevergy-text-\[11px\] {
    font-size: 11px;
  }
  .clevergy-font-semibold {
    font-weight: 600;
  }
  .clevergy-font-bold {
    font-weight: 700;
  }
  .clevergy-font-\[500\] {
    font-weight: 500;
  }
  .clevergy-capitalize {
    text-transform: capitalize;
  }
  .clevergy-leading-\[0px\] {
    line-height: 0px;
  }
  .clevergy-leading-\[33px\] {
    line-height: 33px;
  }
  .clevergy-leading-\[30px\] {
    line-height: 30px;
  }
  .clevergy-text-lightSeaGreen {
    --tw-text-opacity: 1;
    color: rgb(59 169 160 / var(--tw-text-opacity));
  }
  .clevergy-text-darkGrey {
    --tw-text-opacity: 1;
    color: rgb(179 179 179 / var(--tw-text-opacity));
  }
  .clevergy-text-blueStreak {
    --tw-text-opacity: 1;
    color: rgb(36 110 184 / var(--tw-text-opacity));
  }
  .clevergy-text-cadmium {
    --tw-text-opacity: 1;
    color: rgb(0 102 51 / var(--tw-text-opacity));
  }
  .clevergy-text-darkOrange {
    --tw-text-opacity: 1;
    color: rgb(255 144 42 / var(--tw-text-opacity));
  }
  .clevergy-text-red {
    --tw-text-opacity: 1;
    color: rgb(238 82 83 / var(--tw-text-opacity));
  }
  .clevergy-text-onyx {
    --tw-text-opacity: 1;
    color: rgb(64 64 64 / var(--tw-text-opacity));
  }
  .clevergy-text-grey-p2 {
    --tw-text-opacity: 1;
    color: rgb(115 115 115 / var(--tw-text-opacity));
  }
  .clevergy-text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  .clevergy-text-seaGreen {
    color: #3ba9a0b2;
  }
  .clevergy-text-lightBlue {
    --tw-text-opacity: 1;
    color: rgb(82 159 250 / var(--tw-text-opacity));
  }
  .clevergy-text-houseGreen {
    --tw-text-opacity: 1;
    color: rgb(17 136 100 / var(--tw-text-opacity));
  }
  .clevergy-text-houseRed {
    --tw-text-opacity: 1;
    color: rgb(236 85 82 / var(--tw-text-opacity));
  }
  .clevergy-text-green-500 {
    --tw-text-opacity: 1;
    color: rgb(34 197 94 / var(--tw-text-opacity));
  }
  .clevergy-opacity-\[0\.7\] {
    opacity: 0.7;
  }
  .clevergy-opacity-0 {
    opacity: 0;
  }
  .clevergy-shadow {
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
      0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .clevergy-outline-none {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .clevergy-transition-all {
    transition-duration: 0.15s;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  .clevergy-duration-500 {
    transition-duration: 0.5s;
  }
  clevergy-consumption {
    display: block;
    width: 100%;
  }
  input[type="range" i]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #fff;
    border-radius: 100%;
    cursor: pointer;
    -webkit-filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.1));
    filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.1));
    height: 24px;
    overflow: visible;
    width: 24px;
  }
  .slider-container:after {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #fff;
    clear: both;
    content: "";
    -webkit-filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.1));
    filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.1));
    height: 0;
    left: 50%;
    position: absolute;
    top: 100%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    width: 0;
  }
  .onboarding-images {
    -webkit-animation: onboarding-entry 1s ease forwards;
    animation: onboarding-entry 1s ease forwards;
    -webkit-animation-delay: 1.5s;
    animation-delay: 1.5s;
  }
  @-webkit-keyframes onboarding-entry {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    to {
      -webkit-transform: translate(-25%);
      transform: translate(-25%);
    }
  }
  @keyframes onboarding-entry {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    to {
      -webkit-transform: translate(-25%);
      transform: translate(-25%);
    }
  }
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon:before,
  .react-datepicker__year-read-view--down-arrow {
    border-color: #ccc;
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: "";
    display: block;
    height: 9px;
    position: absolute;
    top: 6px;
    width: 9px;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle {
    margin-left: -4px;
    position: absolute;
    width: 0;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle:after,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle:before,
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle:after,
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle:before {
    border: 8px solid transparent;
    box-sizing: initial;
    content: "";
    height: 0;
    left: -8px;
    position: absolute;
    width: 1px;
    z-index: -1;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle:before,
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle:before {
    border-bottom-color: #aeaeae;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle {
    margin-top: -8px;
    top: 0;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle:after,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle:before {
    border-bottom-color: #f0f0f0;
    border-top: none;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle:after {
    top: 0;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle:before {
    border-bottom-color: #aeaeae;
    top: -1px;
  }
  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle {
    bottom: 0;
    margin-bottom: -8px;
  }
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle:after,
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle:before {
    border-bottom: none;
    border-top-color: #fff;
  }
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle:after {
    bottom: 0;
  }
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle:before {
    border-top-color: #aeaeae;
    bottom: -1px;
  }
  .react-datepicker-wrapper {
    border: 0;
    display: inline-block;
    padding: 0;
    width: 100%;
  }
  .react-datepicker {
    background-color: #fff;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    color: #000;
    display: inline-block;
    font-family: Helvetica Neue, helvetica, arial, sans-serif;
    font-size: 0.8rem;
    position: relative;
  }
  .react-datepicker--time-only .react-datepicker__triangle {
    left: 35px;
  }
  .react-datepicker--time-only .react-datepicker__time-container {
    border-left: 0;
  }
  .react-datepicker--time-only .react-datepicker__time,
  .react-datepicker--time-only .react-datepicker__time-box {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
  .react-datepicker__triangle {
    left: 50px;
    position: absolute;
  }
  .react-datepicker-popper {
    z-index: 1;
  }
  .react-datepicker-popper[data-placement^="bottom"] {
    padding-top: 10px;
  }
  .react-datepicker-popper[data-placement="bottom-end"]
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement="top-end"]
    .react-datepicker__triangle {
    left: auto;
    right: 50px;
  }
  .react-datepicker-popper[data-placement^="top"] {
    padding-bottom: 10px;
  }
  .react-datepicker-popper[data-placement^="right"] {
    padding-left: 8px;
  }
  .react-datepicker-popper[data-placement^="right"]
    .react-datepicker__triangle {
    left: auto;
    right: 42px;
  }
  .react-datepicker-popper[data-placement^="left"] {
    padding-right: 8px;
  }
  .react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
    left: 42px;
    right: auto;
  }
  .react-datepicker__header {
    background-color: #f0f0f0;
    border-bottom: 1px solid #aeaeae;
    border-top-left-radius: 0.3rem;
    padding: 8px 0;
    position: relative;
    text-align: center;
  }
  .react-datepicker__header--time {
    padding-bottom: 8px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .react-datepicker__header--time:not(.react-datepicker__header--time--only) {
    border-top-left-radius: 0;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 0.3rem;
  }
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__year-dropdown-container--select {
    display: inline-block;
    margin: 0 2px;
  }
  .react-datepicker-time__header,
  .react-datepicker-year-header,
  .react-datepicker__current-month {
    color: #000;
    font-size: 0.944rem;
    font-weight: 700;
    margin-top: 0;
  }
  .react-datepicker-time__header {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .react-datepicker__navigation {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    height: 32px;
    justify-content: center;
    overflow: hidden;
    padding: 0;
    position: absolute;
    text-align: center;
    text-indent: -999em;
    top: 2px;
    width: 32px;
    z-index: 1;
  }
  .react-datepicker__navigation--previous {
    left: 2px;
  }
  .react-datepicker__navigation--next {
    right: 2px;
  }
  .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
    right: 85px;
  }
  .react-datepicker__navigation--years {
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 0;
  }
  .react-datepicker__navigation--years-previous {
    top: 4px;
  }
  .react-datepicker__navigation--years-upcoming {
    top: -4px;
  }
  .react-datepicker__navigation:hover :before {
    border-color: #a6a6a6;
  }
  .react-datepicker__navigation-icon {
    font-size: 20px;
    position: relative;
    top: -1px;
    width: 0;
  }
  .react-datepicker__navigation-icon--next {
    left: -2px;
  }
  .react-datepicker__navigation-icon--next:before {
    left: -7px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .react-datepicker__navigation-icon--previous {
    right: -2px;
  }
  .react-datepicker__navigation-icon--previous:before {
    right: -7px;
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
  }
  .react-datepicker__month-container {
    float: left;
  }
  .react-datepicker__year {
    margin: 0.4rem;
    text-align: center;
  }
  .react-datepicker__year-wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 180px;
  }
  .react-datepicker__year .react-datepicker__year-text {
    display: inline-block;
    margin: 2px;
    width: 4rem;
  }
  .react-datepicker__month {
    margin: 0.4rem;
    text-align: center;
  }
  .react-datepicker__month .react-datepicker__month-text,
  .react-datepicker__month .react-datepicker__quarter-text {
    display: inline-block;
    margin: 2px;
    width: 4rem;
  }
  .react-datepicker__input-time-container {
    clear: both;
    float: left;
    margin: 5px 0 10px 15px;
    text-align: left;
    width: 100%;
  }
  .react-datepicker__input-time-container .react-datepicker-time__caption,
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container {
    display: inline-block;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input {
    display: inline-block;
    margin-left: 10px;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input {
    width: auto;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"]::-webkit-inner-spin-button,
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"] {
    -moz-appearance: textfield;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__delimiter {
    display: inline-block;
    margin-left: 5px;
  }
  .react-datepicker__time-container {
    border-left: 1px solid #aeaeae;
    float: right;
    width: 85px;
  }
  .react-datepicker__time-container--with-today-button {
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    display: inline;
    position: absolute;
    right: -72px;
    top: 0;
  }
  .react-datepicker__time-container .react-datepicker__time {
    background: #fff;
    border-bottom-right-radius: 0.3rem;
    position: relative;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    border-bottom-right-radius: 0.3rem;
    margin: 0 auto;
    overflow-x: hidden;
    text-align: center;
    width: 85px;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    box-sizing: initial;
    height: calc(195px + 0.85rem);
    list-style: none;
    margin: 0;
    overflow-y: scroll;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    height: 30px;
    padding: 5px 10px;
    white-space: nowrap;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: #216ba5;
    color: #fff;
    font-weight: 700;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected:hover {
    background-color: #216ba5;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled {
    color: #ccc;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled:hover {
    background-color: initial;
    cursor: default;
  }
  .react-datepicker__week-number {
    color: #ccc;
    display: inline-block;
    line-height: 1.7rem;
    margin: 0.166rem;
    text-align: center;
    width: 1.7rem;
  }
  .react-datepicker__week-number.react-datepicker__week-number--clickable {
    cursor: pointer;
  }
  .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    background-color: #f0f0f0;
    border-radius: 0.3rem;
  }
  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }
  .react-datepicker__day-names {
    margin-bottom: -8px;
  }
  .react-datepicker__day,
  .react-datepicker__day-name,
  .react-datepicker__time-name {
    color: #000;
    display: inline-block;
    line-height: 1.7rem;
    margin: 0.166rem;
    text-align: center;
    width: 1.7rem;
  }
  .react-datepicker__month--in-range,
  .react-datepicker__month--in-selecting-range,
  .react-datepicker__month--selected,
  .react-datepicker__quarter--in-range,
  .react-datepicker__quarter--in-selecting-range,
  .react-datepicker__quarter--selected {
    background-color: #216ba5;
    border-radius: 0.3rem;
    color: #fff;
  }
  .react-datepicker__month--in-range:hover,
  .react-datepicker__month--in-selecting-range:hover,
  .react-datepicker__month--selected:hover,
  .react-datepicker__quarter--in-range:hover,
  .react-datepicker__quarter--in-selecting-range:hover,
  .react-datepicker__quarter--selected:hover {
    background-color: #1d5d90;
  }
  .react-datepicker__month--disabled,
  .react-datepicker__quarter--disabled {
    color: #ccc;
    pointer-events: none;
  }
  .react-datepicker__month--disabled:hover,
  .react-datepicker__quarter--disabled:hover {
    background-color: initial;
    cursor: default;
  }
  .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text,
  .react-datepicker__year-text {
    cursor: pointer;
  }
  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    background-color: #f0f0f0;
    border-radius: 0.3rem;
  }
  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    font-weight: 700;
  }
  .react-datepicker__day--highlighted,
  .react-datepicker__month-text--highlighted,
  .react-datepicker__quarter-text--highlighted,
  .react-datepicker__year-text--highlighted {
    background-color: #3dcc4a;
    border-radius: 0.3rem;
    color: #fff;
  }
  .react-datepicker__day--highlighted:hover,
  .react-datepicker__month-text--highlighted:hover,
  .react-datepicker__quarter-text--highlighted:hover,
  .react-datepicker__year-text--highlighted:hover {
    background-color: #32be3f;
  }
  .react-datepicker__day--highlighted-custom-1,
  .react-datepicker__month-text--highlighted-custom-1,
  .react-datepicker__quarter-text--highlighted-custom-1,
  .react-datepicker__year-text--highlighted-custom-1 {
    color: #f0f;
  }
  .react-datepicker__day--highlighted-custom-2,
  .react-datepicker__month-text--highlighted-custom-2,
  .react-datepicker__quarter-text--highlighted-custom-2,
  .react-datepicker__year-text--highlighted-custom-2 {
    color: green;
  }
  .react-datepicker__day--in-range,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--selected,
  .react-datepicker__month-text--in-range,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__year-text--in-range,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--selected {
    background-color: #216ba5;
    border-radius: 0.3rem;
    color: #fff;
  }
  .react-datepicker__day--in-range:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--selected:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__year-text--in-range:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--selected:hover {
    background-color: #1d5d90;
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: #2579ba;
    border-radius: 0.3rem;
    color: #fff;
  }
  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover,
  .react-datepicker__quarter-text--keyboard-selected:hover,
  .react-datepicker__year-text--keyboard-selected:hover {
    background-color: #1d5d90;
  }
  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range),
  .react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range) {
    background-color: rgba(33, 107, 165, 0.5);
  }
  .react-datepicker__month--selecting-range
    .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range),
  .react-datepicker__month--selecting-range
    .react-datepicker__month-text--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range),
  .react-datepicker__month--selecting-range
    .react-datepicker__quarter-text--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range),
  .react-datepicker__month--selecting-range
    .react-datepicker__year-text--in-range:not(.react-datepicker__day--in-selecting-range, .react-datepicker__month-text--in-selecting-range, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__year-text--in-selecting-range) {
    background-color: #f0f0f0;
    color: #000;
  }
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    color: #ccc;
    cursor: default;
  }
  .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__year-text--disabled:hover {
    background-color: initial;
  }
  .react-datepicker__month-text.react-datepicker__month--in-range:hover,
  .react-datepicker__month-text.react-datepicker__month--selected:hover,
  .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,
  .react-datepicker__month-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__month--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__month--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--selected:hover {
    background-color: #216ba5;
  }
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover {
    background-color: #f0f0f0;
  }
  .react-datepicker__input-container {
    display: inline-block;
    position: relative;
    width: 100%;
  }
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view,
  .react-datepicker__year-read-view {
    border: 1px solid transparent;
    border-radius: 0.3rem;
    position: relative;
  }
  .react-datepicker__month-read-view:hover,
  .react-datepicker__month-year-read-view:hover,
  .react-datepicker__year-read-view:hover {
    cursor: pointer;
  }
  .react-datepicker__month-read-view:hover
    .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-read-view:hover
    .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover
    .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view:hover
    .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__year-read-view:hover
    .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__year-read-view:hover
    .react-datepicker__year-read-view--down-arrow {
    border-top-color: #b3b3b3;
  }
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__year-read-view--down-arrow {
    right: -16px;
    top: 0;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  .react-datepicker__month-dropdown,
  .react-datepicker__month-year-dropdown,
  .react-datepicker__year-dropdown {
    background-color: #f0f0f0;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    left: 25%;
    position: absolute;
    text-align: center;
    top: 30px;
    width: 50%;
    z-index: 1;
  }
  .react-datepicker__month-dropdown:hover,
  .react-datepicker__month-year-dropdown:hover,
  .react-datepicker__year-dropdown:hover {
    cursor: pointer;
  }
  .react-datepicker__month-dropdown--scrollable,
  .react-datepicker__month-year-dropdown--scrollable,
  .react-datepicker__year-dropdown--scrollable {
    height: 150px;
    overflow-y: scroll;
  }
  .react-datepicker__month-option,
  .react-datepicker__month-year-option,
  .react-datepicker__year-option {
    display: block;
    line-height: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .react-datepicker__month-option:first-of-type,
  .react-datepicker__month-year-option:first-of-type,
  .react-datepicker__year-option:first-of-type {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
  .react-datepicker__month-option:last-of-type,
  .react-datepicker__month-year-option:last-of-type,
  .react-datepicker__year-option:last-of-type {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    -webkit-user-select: none;
    user-select: none;
  }
  .react-datepicker__month-option:hover,
  .react-datepicker__month-year-option:hover,
  .react-datepicker__year-option:hover {
    background-color: #ccc;
  }
  .react-datepicker__month-option:hover
    .react-datepicker__navigation--years-upcoming,
  .react-datepicker__month-year-option:hover
    .react-datepicker__navigation--years-upcoming,
  .react-datepicker__year-option:hover
    .react-datepicker__navigation--years-upcoming {
    border-bottom-color: #b3b3b3;
  }
  .react-datepicker__month-option:hover
    .react-datepicker__navigation--years-previous,
  .react-datepicker__month-year-option:hover
    .react-datepicker__navigation--years-previous,
  .react-datepicker__year-option:hover
    .react-datepicker__navigation--years-previous {
    border-top-color: #b3b3b3;
  }
  .react-datepicker__month-option--selected,
  .react-datepicker__month-year-option--selected,
  .react-datepicker__year-option--selected {
    left: 15px;
    position: absolute;
  }
  .react-datepicker__close-icon {
    background-color: initial;
    border: 0;
    cursor: pointer;
    display: table-cell;
    height: 100%;
    outline: 0;
    padding: 0 6px 0 0;
    position: absolute;
    right: 0;
    top: 0;
    vertical-align: middle;
  }
  .react-datepicker__close-icon:after {
    background-color: #216ba5;
    border-radius: 50%;
    color: #fff;
    content: "×";
    cursor: pointer;
    display: table-cell;
    font-size: 12px;
    height: 16px;
    line-height: 1;
    padding: 2px;
    text-align: center;
    vertical-align: middle;
    width: 16px;
  }
  .react-datepicker__today-button {
    background: #f0f0f0;
    border-top: 1px solid #aeaeae;
    clear: left;
    cursor: pointer;
    font-weight: 700;
    padding: 5px 0;
    text-align: center;
  }
  .react-datepicker__portal {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2147483647;
  }
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__time-name {
    line-height: 3rem;
    width: 3rem;
  }
  @media (max-height: 550px), (max-width: 400px) {
    .react-datepicker__portal .react-datepicker__day,
    .react-datepicker__portal .react-datepicker__day-name,
    .react-datepicker__portal .react-datepicker__time-name {
      line-height: 2rem;
      width: 2rem;
    }
  }
  .react-datepicker__portal .react-datepicker-time__header,
  .react-datepicker__portal .react-datepicker__current-month {
    font-size: 1.44rem;
  }
  .react-datepicker-popper {
    inset: unset !important;
    right: 0 !important;
  }
  .react-datepicker-popper .react-datepicker__triangle {
    left: auto !important;
    right: 12px !important;
    -webkit-transform: translateZ(0) !important;
    transform: translateZ(0) !important;
  }
  #datetime::-webkit-calendar-picker-indicator {
    bottom: 0;
    height: 26px;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
  }
  .clevergy-modal::-webkit-scrollbar {
    display: none;
  }
  .lds-ellipsis {
    display: inline-block;
    height: 10px;
    position: relative;
    width: 65px;
  }
  .lds-ellipsis div {
    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    background: #3ba9a0b2;
    border-radius: 50%;
    height: 7px;
    position: absolute;
    width: 7px;
  }
  .lds-ellipsis div:first-child {
    -webkit-animation: lds-ellipsis1 0.6s infinite;
    animation: lds-ellipsis1 0.6s infinite;
    left: 8px;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
  }
  .lds-ellipsis div:nth-child(2),
  .lds-ellipsis div:nth-child(3) {
    -webkit-animation: lds-ellipsis2 0.6s infinite;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
  }
  .lds-ellipsis div:nth-child(4) {
    -webkit-animation: lds-ellipsis3 0.6s infinite;
    animation: lds-ellipsis3 0.6s infinite;
    left: 56px;
  }
  @-webkit-keyframes lds-ellipsis1 {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis1 {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes lds-ellipsis3 {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    to {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    to {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }
  @-webkit-keyframes lds-ellipsis2 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    to {
      -webkit-transform: translate(24px);
      transform: translate(24px);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    to {
      -webkit-transform: translate(24px);
      transform: translate(24px);
    }
  }
`;
