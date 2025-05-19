import React from "react";
const ThreeDMove: React.FC<
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
        fillRule="evenodd"
        d="m12.75 13.308 5.174 4.702-1.346 1.48-4.827-4.388-4.828 4.388-1.345-1.48 5.173-4.702V6.75h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.212 15.001a.75.75 0 0 1 .686.371l3.5 6a.75.75 0 0 1-.71 1.125l-6-.5a.75.75 0 0 1-.62-1.057l2.5-5.5A.75.75 0 0 1 4.211 15M19.288 15.001a.75.75 0 0 0-.686.371l-3.5 6a.75.75 0 0 0 .71 1.125l6-.5a.75.75 0 0 0 .62-1.057l-2.5-5.5a.75.75 0 0 0-.644-.439M11.796 1a.75.75 0 0 1 .611.323l3.46 5a.75.75 0 0 1-.62 1.177l-7-.031a.75.75 0 0 1-.608-1.186l3.54-4.968A.75.75 0 0 1 11.797 1"
      />
    </svg>
  );
};
export default ThreeDMove;
