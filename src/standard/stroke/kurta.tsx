import React from "react";
const Kurta: React.FC<
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
        d="M7 16H4.17a1 1 0 0 1-.987-1.156L4.31 7.701a2 2 0 0 1 1.343-1.585L9 5V2.934c0-.4.458-.656.82-.488.573.267 1.376.554 2.18.554s1.607-.287 2.18-.554c.363-.168.82.089.82.488V5l3.347 1.116A2 2 0 0 1 19.69 7.7l1.127 7.143A1 1 0 0 1 19.83 16H17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m9 5 2.051.684a3 3 0 0 0 1.898 0L15 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.505 10-.914 10.917A1 1 0 0 0 7.587 22h8.826a1 1 0 0 0 .997-1.083L16.5 10M12 13.5V6M12 9h1.5M12 11.5h1.5"
      />
    </svg>
  );
};
export default Kurta;
