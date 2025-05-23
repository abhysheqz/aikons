import React from "react";
const Polygon: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 14.015v-4.03c0-1.226 0-1.84.228-2.39.229-.552.662-.985 1.53-1.852l1.985-1.986c.867-.867 1.3-1.3 1.852-1.529C8.145 2 8.759 2 9.985 2h4.03c1.226 0 1.84 0 2.39.228.552.229.985.662 1.852 1.53l1.986 1.985c.867.867 1.3 1.3 1.529 1.852.228.55.228 1.164.228 2.39v4.03c0 1.226 0 1.84-.228 2.39-.229.552-.662.985-1.53 1.852l-1.985 1.986c-.867.867-1.3 1.3-1.852 1.529-.55.228-1.164.228-2.39.228h-4.03c-1.226 0-1.84 0-2.39-.228-.552-.229-.985-.662-1.852-1.53l-1.986-1.985c-.867-.867-1.3-1.3-1.529-1.852C2 15.855 2 15.241 2 14.015Z"
      />
    </svg>
  );
};
export default Polygon;
