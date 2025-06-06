import React from "react";
const Bug_02: React.FC<
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
        d="m15.88 5.109 1.269-1.617-1.523-1.242-1.443 1.838A5.8 5.8 0 0 0 12 3.666c-.786 0-1.53.154-2.22.437l-1.396-1.84L6.84 3.479 8.095 5.13a7.8 7.8 0 0 0-1.189 1.252l.286.212C8.612 7.622 10.256 8.2 12.001 8.2c1.741 0 3.382-.576 4.802-1.602l.288-.22a7.7 7.7 0 0 0-1.212-1.27"
      />
      <path
        fill="currentColor"
        d="m18.126 8.104-.117.09-.022.016c-1.467 1.063-3.162 1.753-4.986 1.94v2.65h-2v-2.65c-1.824-.187-3.52-.877-4.987-1.94l-.01-.007-.13-.097q-.195.42-.354.867c-.253-.087-.511-.276-.744-.592-.338-.46-.576-1.14-.576-1.933H2.25c0 1.182.351 2.29.966 3.126.453.616 1.074 1.109 1.811 1.325q-.136.838-.144 1.71H3.225v1.987h1.816c.108.64.27 1.26.48 1.85-.57.256-1.055.679-1.427 1.185-.615.835-.967 1.943-.967 3.125h1.95c0-.793.238-1.473.577-1.933.223-.303.47-.49.714-.581C7.634 20.34 9.625 21.75 12 21.75s4.366-1.41 5.632-3.508c.244.091.491.277.714.581.339.46.576 1.14.576 1.933h1.95c0-1.182-.35-2.29-.965-3.125-.373-.506-.858-.93-1.428-1.184.21-.59.372-1.211.48-1.851h1.816v-1.988h-1.658a11.4 11.4 0 0 0-.144-1.709c.736-.216 1.358-.71 1.811-1.325.615-.836.966-1.944.966-3.126H19.8c0 .794-.238 1.474-.576 1.933-.233.316-.49.505-.744.592a10 10 0 0 0-.354-.869"
      />
    </svg>
  );
};
export default Bug_02;
