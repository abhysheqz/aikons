import React from "react";
const FlowerPot: React.FC<
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
        d="M12 9c0-4.5 2-5 4-5 0 3-1.5 5-4 5m0 0c0-4.5-2-5-4-5 0 3 1.5 5 4 5M10 4s.5-1.5 2-2c1.5.5 2 2 2 2M12 9v6M12 13c.25-.667 1.2-2 3-2M15.84 20.415l.902-4.205a1 1 0 0 0-.978-1.21H8.237a1 1 0 0 0-.978 1.209l.899 4.204a2 2 0 0 0 1.956 1.582h3.77a2 2 0 0 0 1.956-1.58"
      />
    </svg>
  );
};
export default FlowerPot;
