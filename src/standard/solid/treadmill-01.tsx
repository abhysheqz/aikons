import React from "react";
const Treadmill_01: React.FC<
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
        d="M21.948 1.606a1 1 0 0 1 .447 1.341L21.25 5.235a3 3 0 0 1-1.426 1.382l-3.174 7.537 1.116-.276h.003c1.283-.313 2.387-.028 3.227.616.816.625 1.338 1.552 1.583 2.477.244.92.24 1.932-.113 2.757-.372.87-1.142 1.522-2.276 1.522H19v.25a1 1 0 1 1-2 0v-.25H7.664l-.957.957a1 1 0 0 1-1.675-.957h-2.1a1.6 1.6 0 0 1-1.24-.567 1.92 1.92 0 0 1-.438-1.119c-.047-.71.296-1.672 1.3-1.918h.002l11.672-2.891 3.029-7.193-2.415.878a1 1 0 1 1-.684-1.88l4.752-1.727a1 1 0 0 0 .552-.493l1.144-2.287a1 1 0 0 1 1.342-.447M19 16.5a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Treadmill_01;
