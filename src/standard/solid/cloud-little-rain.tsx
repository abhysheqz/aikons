import React from "react";
const CloudLittleRain: React.FC<
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
        d="M12.001 12.5a1 1 0 0 1 1 1V15a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1M9 15.5a1 1 0 0 1 1 1V18a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1V18a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m-8.5 3a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m5.5 0a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1m5.5 0a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 13a5.75 5.75 0 0 1 4.603-5.635 6.252 6.252 0 0 1 12.394.938 5.251 5.251 0 0 1 1.434 9.974A2.5 2.5 0 0 0 17.5 17v-.5a2.5 2.5 0 0 0-2.999-2.45v-.55a2.5 2.5 0 0 0-5 0v.55A2.5 2.5 0 0 0 6.5 16.5v.5c-.876 0-1.647.45-2.094 1.133A5.75 5.75 0 0 1 1.25 13"
      />
    </svg>
  );
};
export default CloudLittleRain;
