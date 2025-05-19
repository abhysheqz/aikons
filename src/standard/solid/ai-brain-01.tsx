import React from "react";
const AiBrain_01: React.FC<
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
        d="M16.25 19.5a1.75 1.75 0 1 1-3.5 0v-15a1.75 1.75 0 1 1 3.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 .75 4.372.75.75 0 1 0 .5 1.414 3.76 3.76 0 0 0 1.613-1.115 2.251 2.251 0 0 1-.437 4.289.75.75 0 0 0-.5 1.125 2.251 2.251 0 0 1-1.286 3.322 3.26 3.26 0 0 0-1.19-1.757.75.75 0 0 0-.9 1.2c.426.32.7.828.7 1.4M12 21.577a3.251 3.251 0 0 1-5.677-1.388 3.75 3.75 0 0 1-2.909-4.79 3.75 3.75 0 0 1 0-6.798 3.751 3.751 0 0 1 2.909-4.79A3.251 3.251 0 0 1 12 2.423a3.251 3.251 0 0 1 5.677 1.388 3.75 3.75 0 0 1 2.909 4.79 3.75 3.75 0 0 1 0 6.798 3.751 3.751 0 0 1-2.909 4.79A3.251 3.251 0 0 1 12 21.577"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBrain_01;
