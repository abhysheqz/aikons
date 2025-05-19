import React from "react";
const PoundSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM10.25 10a1.75 1.75 0 1 1 3.5 0 .75.75 0 0 0 1.5 0 3.25 3.25 0 1 0-5.989 1.75h-.76a.75.75 0 0 0 0 1.5h1.604a6 6 0 0 1-.453 1.082c-.411.764-.918 1.3-1.39 1.457A.75.75 0 0 0 8.5 17.25h5.528c.427 0 .848-.1 1.23-.29l.578-.29a.75.75 0 1 0-.671-1.34l-.578.288a1.25 1.25 0 0 1-.56.132h-3.492a7.252 7.252 0 0 0 1.12-2.5h1.345a.75.75 0 0 0 0-1.5h-1A1.75 1.75 0 0 1 10.25 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PoundSquare;
