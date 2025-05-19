import React from "react";
const Bitcoin_02: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 8a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 2.75V5.5m-.75-2.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM5.75 2.75V5.5L7 6.5M5 2.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM18.25 2.75V5.5L17 6.5m2-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10.438 17.667v-5.334m1.562 0V11m0 8v-1.333M10.438 15h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 15c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"
      />
    </svg>
  );
};
export default Bitcoin_02;
