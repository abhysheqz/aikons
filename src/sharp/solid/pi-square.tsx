import React from "react";
const PiSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM9 10c0-.448.431-.982 1.185-1l-.802 5.77q0 .001-.002.005a.1.1 0 0 1-.036.034.3.3 0 0 1-.205.044.3.3 0 0 1-.127-.048.1.1 0 0 1-.032-.036l-.043-.116-1.876.694.043.117c.288.777 1.005 1.273 1.78 1.372 1.113.143 2.308-.556 2.48-1.79L12.203 9h1.425l-.953 6.862 1.981.276L15.65 9H17V7h-6.778C8.544 7 7 8.247 7 10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PiSquare;
