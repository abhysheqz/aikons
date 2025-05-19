import React from "react";
const Yelp: React.FC<
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
        d="M10.347 1.723a1.75 1.75 0 0 1 2.257 1.84l-.717 7.508a.75.75 0 0 1-1.33.4L5.84 5.62a1.75 1.75 0 0 1 .848-2.771zM15.544 8.469a1.75 1.75 0 0 1 2.957-.07l1.183 1.774a1.75 1.75 0 0 1-1.311 2.715l-4.31.359a.75.75 0 0 1-.706-1.133zM13.429 14.514a.75.75 0 0 1 .768-.237l4.08 1.112a1.75 1.75 0 0 1 .94 2.739L18.112 19.6a1.75 1.75 0 0 1-2.993-.326l-1.802-3.964a.75.75 0 0 1 .112-.796M11.78 15.304a.75.75 0 0 1 .469.634l.365 4.387a1.75 1.75 0 0 1-2.393 1.77l-1.996-.798a1.75 1.75 0 0 1-.512-2.933l3.29-2.924a.75.75 0 0 1 .777-.136M3.615 12.086a1.75 1.75 0 0 1 2.684-1.33l4.104 2.61a.75.75 0 0 1-.114 1.326L5.806 16.56a1.75 1.75 0 0 1-2.417-1.761z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Yelp;
