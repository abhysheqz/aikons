import React from "react";
const PineTree: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 18h-.856c-1.863 0-2.794 0-3.074-.564-.28-.565.302-1.267 1.467-2.67l1.858-2.237c-1.177 0-1.766 0-2.048-.22a.98.98 0 0 1-.38-.86c.031-.35.438-.76 1.253-1.58l2.295-2.313c-.95 0-1.424 0-1.668-.14a.98.98 0 0 1-.47-1.1c.07-.266.407-.59 1.08-1.236L10.63 2.99C11.318 2.33 11.662 2 12.088 2c.427.001.77.333 1.454.998l2.132 2.07c.68.66 1.02.99 1.088 1.263a.98.98 0 0 1-.464 1.079c-.248.146-.73.146-1.695.146l1.915 2.169c.876.992 1.314 1.488 1.269 1.911a.98.98 0 0 1-.28.586c-.304.307-.979.307-2.329.307l2.017 2.143c1.345 1.43 2.017 2.143 1.746 2.736-.271.592-1.27.592-3.27.592h-.493M12 14v8"
      />
    </svg>
  );
};
export default PineTree;
