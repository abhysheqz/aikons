import React from "react";
const TorriGate: React.FC<
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
        d="M3.558 2.103a1 1 0 0 1 1.339.455C6.197 5.196 8.893 7 12 7s5.803-1.804 7.103-4.442a1 1 0 1 1 1.794.884A10 10 0 0 1 17.957 7H21a1 1 0 1 1 0 2h-2v2h2a1 1 0 1 1 0 2h-2v8a1 1 0 1 1-2 0v-8H7v8a1 1 0 1 1-2 0v-8H3a1 1 0 1 1 0-2h2V9H3a1 1 0 1 1 0-2h3.042a10 10 0 0 1-2.939-3.558 1 1 0 0 1 .455-1.339M7 9v2h2V9zm4 0v2h2V9zm4 0v2h2V9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TorriGate;
