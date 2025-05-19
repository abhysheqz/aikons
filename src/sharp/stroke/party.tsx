import React from "react";
const Party: React.FC<
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
      <g stroke="currentColor" strokeWidth={1.5} clipPath="url(#party_svg__a)">
        <path
          strokeLinecap="square"
          d="M8 6 2 22l16-6zM7 11l6 6m-8-1 3 3M16 8l3-3M14.197 2c.4.667.719 2.4-1.197 4M22 9.803c-.667-.4-2.4-.719-4 1.197"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 2v.02M22 6v.02M21 13v.02M11 3v.02"
        />
      </g>
      <defs>
        <clipPath id="party_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Party;
