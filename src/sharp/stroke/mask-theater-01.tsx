import React from "react";
const MaskTheater_01: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 22c4.5 0 9-5 9-12V3h-.5c-2.088 1.228-5.123 2-8.5 2s-6.412-.772-8.5-2H3v7c0 7 4.5 12 9 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6.5 10c.368-.307.904-.5 1.5-.5s1.132.193 1.5.5M12 15.7c1 0 3-.7 3-.7s-.5 3-3 3-3-3-3-3 2 .7 3 .7ZM14.5 10c.368-.307.904-.5 1.5-.5s1.131.193 1.5.5"
      />
    </svg>
  );
};
export default MaskTheater_01;
