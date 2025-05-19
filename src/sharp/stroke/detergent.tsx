import React from "react";
const Detergent: React.FC<
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
        d="M12.5 4.5h-4V2h4zM18 22V10.523A6.05 6.05 0 0 0 12.5 4.5h-4v.066a5 5 0 0 1-.76 2.65l-.828 1.325A6 6 0 0 0 6 11.72V22z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.011 8.514c.67 1.174.649 2.455-.048 2.862-.696.406-1.804-.216-2.474-1.39s-.649-2.455.048-2.861c.696-.407 1.804.215 2.474 1.389Z"
      />
    </svg>
  );
};
export default Detergent;
