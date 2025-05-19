import React from "react";
const XVariable: React.FC<
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
        d="M9.065 18.476C7.72 20.126 6.063 21.5 4 21.5a1 1 0 1 1 0-2c1.12 0 2.26-.75 3.516-2.289 1.237-1.514 2.398-3.557 3.614-5.704l.028-.05c1.184-2.088 2.422-4.274 3.777-5.933C16.28 3.874 17.937 2.5 20 2.5a1 1 0 1 1 0 2c-1.12 0-2.26.75-3.516 2.289-1.237 1.514-2.398 3.557-3.614 5.704l-.028.05c-1.184 2.088-2.422 4.274-3.777 5.933"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 3.5a1 1 0 0 1 1-1h1.877a4 4 0 0 1 3.772 2.669l4.588 12.997a2 2 0 0 0 1.885 1.334H19a1 1 0 1 1 0 2h-1.878a4 4 0 0 1-3.771-2.669L8.763 5.834A2 2 0 0 0 6.877 4.5H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default XVariable;
