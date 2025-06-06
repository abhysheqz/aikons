import React from "react";
const ThreeFinger_01: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.164 10.185c.238 0 .43-.188.43-.419V2.49a1.239 1.239 0 0 1 2.478 0v8.394c0 .231.192.419.43.419s.43-.188.43-.42V4.606a1.239 1.239 0 1 1 2.478 0V12c0 .231.192.419.43.419s.43-.188.43-.419v-1.958c0-.293 0-.44.117-.53s.237-.058.478.004c1.189.31 1.884 1.531 1.884 2.678v1.498c0 1.065 0 1.9-.042 2.574-.042.685-.13 1.256-.326 1.787-.238.641-.815 1.373-1.202 1.829-.238.28-.37.783-.37 1.118a1.75 1.75 0 0 1-1.75 1.75H9.847c-.988 0-1.686-.789-1.826-1.62-.13-.774-.417-1.523-.802-2.03L3.54 14.04a1.5 1.5 0 0 1-.233-.474 2.5 2.5 0 0 1-.056-.47c.012-.307.119-.612.32-.865a1.43 1.43 0 0 1 2.143-.121l1.803 1.815a.44.44 0 0 0 .47.098.42.42 0 0 0 .27-.389V3.99a1.239 1.239 0 0 1 2.478 0v5.777c0 .231.192.419.43.419"
      />
    </svg>
  );
};
export default ThreeFinger_01;
