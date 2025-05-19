import React from "react";
const Target_02: React.FC<
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
        d="M12 8a4 4 0 1 0 4 4 1 1 0 1 1 2 0 6 6 0 1 1-6-6 1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1c.752 0 1.488.076 2.199.22a1 1 0 1 1-.398 1.96A9 9 0 1 0 20.82 10.2a1 1 0 1 1 1.96-.398c.144.711.22 1.447.22 2.199 0 6.075-4.925 11-11 11S1 18.075 1 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 7.586V5a1 1 0 0 1 .293-.707l2.987-2.987a1.01 1.01 0 0 1 1.704.517l.366 1.828 1.828.365a1.01 1.01 0 0 1 .516 1.705L19.71 8.705a1 1 0 0 1-.714.295h-2.582l-3.707 3.707a1 1 0 1 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Target_02;
