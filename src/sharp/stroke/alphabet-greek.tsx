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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.998 18.95v1.968h5.997c.01 0 .014-.012.006-.018-2.335-1.52-5.017-5.39-5.017-8.536-.165-2.43 1.382-6.938 4.575-8.435.99-.68 3.72-1.725 6.996.061 3.194 1.741 4.379 5.54 4.379 7.525.174 1.369-.35 4.923-3.243 7.878l-.854.879-.896.71a.01.01 0 0 0 .006.017l6.055-.058v-2.003"
      />
    </svg>
  );
};
export default AlphabetGreek;
