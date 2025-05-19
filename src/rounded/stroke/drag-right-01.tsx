import React from "react";
const DragRight_01: React.FC<
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
        d="M8.667 8.487a3.49 3.49 0 0 1-1.701-2.994A3.5 3.5 0 0 1 10.476 2a3.5 3.5 0 0 1 3.511 3.493c0 1.27-.681 2.383-1.701 2.994"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.012 2.99 1.747 1.441c.255.272.298.477.172.778a.8.8 0 0 1-.212.28L18.012 7m-3.598-2.024h4.416M8.56 21.932l.025-.63a2.92 2.92 0 0 0-.48-1.742c-1.353-2.025-2.386-3.178-3.802-5.153-.112-.156-.217-.322-.261-.509-.342-1.443 1.423-3.322 3.057-1.158l1.595 1.63V6.338c.212-1.646 2.811-1.972 3.25 0v3.738c1.62-.147 8.174.977 6.937 5.46q-.086.317-.17.634c-.208.766-.718 1.884-1.208 2.837-.546 1.06-.402 2.557-.495 2.991"
      />
    </svg>
  );
};
export default DragRight_01;
