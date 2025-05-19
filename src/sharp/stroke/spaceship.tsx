import React from "react";
const Spaceship: React.FC<
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
        d="M17 5.5c2.989.789 5 2.261 5 3.947 0 2.517-4.477 4.557-10 4.557S2 11.964 2 9.447C2 7.761 4.011 6.29 7 5.501"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17.005v4m4-5 2 5m-10-5-2 5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.01 8.992c-.004-3.758-3.198-5.986-5.999-5.986-3.51 0-6 2.954-6.003 5.986a.01.01 0 0 0 .006.01c4.952 1.878 10.224.754 11.99 0a.01.01 0 0 0 .006-.01Z"
      />
    </svg>
  );
};
export default Spaceship;
