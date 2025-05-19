import React from "react";
const Versus: React.FC<
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
        d="M17.38 3.682 6.32 21.378l-1.697-1.06 11.06-17.696zM3.446 2.66 7 9.765l3.553-7.106 1.789.895L7 14.237 1.658 3.554zm11.551 8.342a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3v2h-3v-1.5h-2v1.5a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-3v-2h3v1.5h2v-1.5a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Versus;
