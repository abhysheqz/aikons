import React from "react";
const GameController_01: React.FC<
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
        d="M11 13h2M12 9V3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.153 20.923c1.861-.588 2.407-4.164 1.218-7.986s-3.662-6.443-5.524-5.854c-.905.286-1.839 1.619-2.196 2.173a.52.52 0 0 1-.438.244h-2.426a.52.52 0 0 1-.438-.244c-.357-.554-1.291-1.887-2.196-2.173-1.862-.59-4.335 2.032-5.524 5.854s-.643 7.397 1.218 7.986c1.284.406 3.847-.77 5.391-4.28.169-.381.539-.643.956-.643l3.613.003c.417 0 .786.262.954.644 1.545 3.508 4.108 4.682 5.392 4.276Z"
      />
    </svg>
  );
};
export default GameController_01;
