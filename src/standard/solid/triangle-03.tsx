import React from "react";
const Triangle_03: React.FC<
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
        d="M2.25 5.414c0-1.56 1.885-2.34 2.987-1.238l14.586 14.586c1.103 1.103.322 2.988-1.237 2.988H4A1.75 1.75 0 0 1 2.25 20zM11 2.25h2.5a.75.75 0 0 1 .53 1.28l-.73.73 1.804 1.826a2.1 2.1 0 0 1 1.75-.02l1.83-1.82-.714-.716a.75.75 0 0 1 .53-1.28H21a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.28.53l-.725-.724-1.822 1.813c.123.268.191.567.191.881s-.068.613-.191.88l1.822 1.814.725-.724a.75.75 0 0 1 1.28.53V13a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.53-1.28l.715-.715-1.83-1.821a2.114 2.114 0 0 1-2.795-2.771L12.24 5.32l-.71.71a.75.75 0 0 1-1.28-.531V3a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Triangle_03;
