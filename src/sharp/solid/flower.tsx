import React from "react";
const Flower: React.FC<
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
        d="M12 2.25c-2.353 0-4.267 1.797-4.67 4.011a4.75 4.75 0 0 0-3.079 8.613A4.75 4.75 0 0 0 12 20.211a4.75 4.75 0 0 0 7.749-5.337 4.75 4.75 0 0 0-3.079-8.613C16.267 4.047 14.353 2.25 12 2.25m0 13.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flower;
