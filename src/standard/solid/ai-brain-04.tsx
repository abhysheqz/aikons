import React from "react";
const AiBrain_04: React.FC<
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
        d="M1.25 12a3.75 3.75 0 0 0 2.164 3.399 3.751 3.751 0 0 0 2.909 4.79 3.251 3.251 0 0 0 6.427-.689v-15a3.25 3.25 0 0 0-6.427-.69A3.75 3.75 0 0 0 3.414 8.6 3.75 3.75 0 0 0 1.25 12M20 3.25a1.75 1.75 0 0 0-1.649 2.338l-.662.662H15.5a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 .53-.22l.882-.881q.277.1.588.101a1.75 1.75 0 1 0 0-3.5m-1.582 8a1.75 1.75 0 1 1 0 1.5H15.5a.75.75 0 0 1 0-1.5zM20 20.75a1.75 1.75 0 0 1-1.649-2.338l-.662-.662H15.5a.75.75 0 0 1 0-1.5H18a.75.75 0 0 1 .53.22l.882.881q.277-.1.588-.101a1.75 1.75 0 1 1 0 3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBrain_04;
