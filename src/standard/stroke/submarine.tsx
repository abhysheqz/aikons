import React from "react";
const Submarine: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10.5 12.492 1.223-2.444a1 1 0 0 1 .894-.553h2.763a1 1 0 0 1 .894.553l1.223 2.444"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 9.5v-4a1 1 0 0 1 1-1h2M2 18.5v-5a1 1 0 0 1 1-1h.723a1 1 0 0 1 .515.143L6.5 14l2.262-1.357a1 1 0 0 1 .515-.143H18.5a3.5 3.5 0 1 1 0 7H9.277a1 1 0 0 1-.515-.142L6.5 18l-2.262 1.358a1 1 0 0 1-.515.142H3a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default Submarine;
