import React from "react";
const Developer: React.FC<
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
        d="m14 7.998 2 2-2 1.999M8 7.998l-2 2 2 1.999"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 6.999-2 5.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.122 17.635c-3.35-1.328-5.445-3.737-5.622-7.322C2.5 5.78 6.023 2 10.645 2c4.512.085 7.945 3.485 8.072 7.941l2.731 3.984c.035.05.081.097.028.125l-1.791.943-.451 2.44c-.387 1.762-1.5 2.626-3.719 2.558V22m-9.505-.006v-5.439"
      />
    </svg>
  );
};
export default Developer;
