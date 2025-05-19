import React from "react";
const InternetAntenna_03: React.FC<
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
        d="M12 3a9 9 0 0 0-9 9c0 2.028.67 3.896 1.8 5.4a1 1 0 0 1-1.6 1.202A10.96 10.96 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.476-.819 4.763-2.2 6.602a1 1 0 0 1-1.6-1.202A8.96 8.96 0 0 0 21 12a9 9 0 0 0-9-9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7a5 5 0 0 0-3.727 8.333 1 1 0 1 1-1.49 1.334 7 7 0 1 1 10.435 0 1 1 0 1 1-1.49-1.334A5 5 0 0 0 12 7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 11a1 1 0 0 1 1 1v9h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-9a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InternetAntenna_03;
