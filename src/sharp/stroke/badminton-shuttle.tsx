import React from "react";
const BadmintonShuttle: React.FC<
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
        strokeWidth={1.5}
        d="M16.104 4.222C17.545 3.53 20 4 21 5l-4.783 10.694c-.208.435-.312.653-.36.855-.05.202-.063.76-.09 1.877C15.722 20.353 14.48 22 12 22m4.107-17.778c-2.053-2.963-6.157-2.963-8.21 0C6.456 3.53 4.001 4 3.001 5l4.783 10.694c.209.435.313.653.361.855.049.202.062.76.089 1.877C8.28 20.353 9.522 22 12 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 17h8M8 4l3 13m5-13-3 13M5.999 11.5c1.2 1.333 2.8 1.333 4 0 1.2 1.333 2.8 1.333 4 0 1.2 1.333 2.8 1.333 4 0"
      />
    </svg>
  );
};
export default BadmintonShuttle;
