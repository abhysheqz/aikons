import React from "react";
const GameController_02: React.FC<
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
        d="M17.5 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM10.5 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 16.004h3M15.473 18c1.534 2.456 3.578 3.272 4.68 2.923 1.861-.588 2.407-4.164 1.218-7.986s-3.662-6.443-5.524-5.854c-.905.286-1.839 1.619-2.196 2.173a.52.52 0 0 1-.438.244h-2.426a.52.52 0 0 1-.438-.244c-.357-.554-1.291-1.887-2.196-2.173-1.862-.59-4.335 2.032-5.524 5.854s-.643 7.397 1.218 7.986c1.102.349 3.146-.467 4.68-2.923"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v6"
      />
    </svg>
  );
};
export default GameController_02;
