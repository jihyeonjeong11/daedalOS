import { memo } from "react";

export const Search = memo(() => (
  <svg
    style={{
      border: "1px solid transparent",
      borderRight: 0,
      borderTop: 0,
      height: "17px",
      marginLeft: "-1px",
    }}
    viewBox="3 -1 30 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 0q1.516 0 2.922.391T26.547 1.5t2.227 1.727 1.727 2.227 1.109 2.625.391 2.922-.391 2.922-1.109 2.625-1.727 2.227-2.227 1.727-2.625 1.109-2.922.391q-1.953 0-3.742-.656t-3.289-1.891L1.703 31.705q-.297.297-.703.297t-.703-.297T0 31.002t.297-.703l12.25-12.266q-1.234-1.5-1.891-3.289T10 11.002q0-1.516.391-2.922T11.5 5.455t1.727-2.227 2.227-1.727T18.079.392t2.922-.391zm0 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T30 11t-.711-3.5-1.93-2.859-2.859-1.93T21 2t-3.5.711-2.859 1.93-1.93 2.859T12 11t.711 3.5 1.93 2.859 2.859 1.93T21 20z"
      stroke="#FFF"
      strokeWidth="1"
    />
  </svg>
));

export const RightArrow = memo(() => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="m257.5 977.5 465-465.5-465-465.5 45-45 511 510.5-511 510.5z" />
  </svg>
));

export const Open = memo(() => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M768 128h192v192h-64v-82.5l-228 228-45.5-45.5 228-228H768v-64zm0 384 64-64v384H0V256h640l-64 64H64v448h704V512z" />
  </svg>
));

export const OpenFolder = memo(() => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M768 0q13 0 24.75 5t20.5 13.75T827 39.25 832 64v464q0 15.5 4.75 27t11.75 21.75 15.5 20.5T879.5 620t11.75 29 4.75 39v144q0 13-5 24.75t-13.75 20.5-20.5 13.75-24.75 5H384v64q0 19.5-10.75 35.5T344.5 1019q-11.5 5-24.5 5-26.5 0-45.5-19L128 858.5V0h640zM320 784q0-22.5 4.75-38.75t11.75-29T352 693.5t15.5-20.25 11.75-22T384 624V301.5l-192-192V832l128 128V784zm512-96q0-15.5-4.75-27t-11.75-21.75-15.5-20.5T784.5 596t-11.75-29-4.75-39V64H237.5l192 192q9 9 13.75 20.75T448 301.5V624q0 22.5-4.75 38.75t-11.75 29T416 714.5t-15.5 20.25-11.75 22T384 784v48h448V688z" />
  </svg>
));

export const Games = memo(() => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path d="M939.5 276.5q41 41 62.75 93.25T1024 480q0 17.5-1 42t-4.25 53-9.5 58.75T993 693q-15 43-35 70.25t-41.5 42.5T873 826.5t-41 5.5q-16.5 0-30.25-5.75t-26-14.75-23-20.75T731.5 767t-20.75-23-21.25-19.75T666.25 710t-26.75-6h-255q-14.5.5-26.75 6t-23.25 14.25T313.25 744t-20.75 23-21.25 23.75-23 20.75-26 14.75T192 832q-19 0-41-5.5t-43.5-20.75-41.5-42.5T31 693q-10-29-16.25-59.25T5.25 575 1 522t-1-42q0-58 21.75-110.25T84.5 276.5q40.5-41 93-62.75T288 192h448q58 0 110.25 21.75t93.25 62.75zm-7 395.5q9.5-26.5 15-55t8.25-54.75 3.5-47.75.75-34.5q0-46.5-17.75-87.25t-48-71-71-48T736 256H288q-46.5 0-87.25 17.75t-71 48-48 71T64 480q0 13 .75 34.5t3.5 47.75T76.5 617t15 55q12.5 36 27.5 55.5t29.25 28.5 26 10.5T192 768q11 0 24.25-13.25T244 725q12-14 25.75-28.75t30.5-27T337.5 649t45.5-9h258q25 1 45.5 9t37.25 20.25 30.5 27T780 725q14.5 16.5 27.75 29.75T832 768q6 0 17.75-1.5t26-10.5T905 727.5t27.5-55.5zM256 448h64v64h-64v64h-64v-64h-64v-64h64v-64h64v64zm576 64q13.5 0 25 5t20.25 13.75T891 551t5 25-5 25-13.75 20.25T857 635t-25 5-25-5-20.25-13.75T773 601t-5-25 5-25 13.75-20.25T807 517t25-5zM704 384q13.5 0 25 5t20.25 13.75T763 423t5 25-5 25-13.75 20.25T729 507t-25 5-25-5-20.25-13.75T645 473t-5-25 5-25 13.75-20.25T679 389t25-5z" />
  </svg>
));