import React from "react";
const UserFullView: React.FC<
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
      <circle cx={12} cy={5} r={3} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 9c-1 1-1.996 2.788-2 4.5-.005.52.03 1.649.5 2.5h2l1.502 6h4l1.502-6h2c.469-.851.505-1.98.499-2.5C17.999 11.786 17 10 16 9"
      />
    </svg>
  );
};
export default UserFullView;
