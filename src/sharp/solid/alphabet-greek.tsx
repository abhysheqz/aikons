import React from "react";
const AlphabetGreek: React.FC<
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
        d="M12 4c-3.737 0-7.006 3.558-7.006 8.264 0 1.372.57 2.96 1.475 4.444.9 1.478 2.063 2.74 3.107 3.474A1 1 0 0 1 9 22H2v-3h2v1h2.426a15.7 15.7 0 0 1-1.665-2.251c-1.011-1.66-1.767-3.612-1.767-5.485C2.994 6.737 6.894 2 12 2s9.007 4.737 9.007 10.264c0 1.873-.757 3.826-1.768 5.485A15.7 15.7 0 0 1 17.575 20H20v-1h2v3h-7a1 1 0 0 1-.575-1.818c1.043-.734 2.206-1.996 3.106-3.474.905-1.484 1.476-3.072 1.476-4.444C19.008 7.558 15.738 4 12 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlphabetGreek;
