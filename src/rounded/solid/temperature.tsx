import React from "react";
const Temperature: React.FC<
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
        d="M13.146 1.27a18 18 0 0 0-1.12-.02c-.445 0-.867 0-1.172.02a2.8 2.8 0 0 0-.907.19 2.75 2.75 0 0 0-1.488 1.487c-.12.29-.167.59-.189.908-.02.304-.02.676-.02 1.12v7.666a5.75 5.75 0 1 0 7.501 0V4.975c0-.444 0-.816-.021-1.12a2.8 2.8 0 0 0-.189-.908 2.75 2.75 0 0 0-1.488-1.487c-.29-.12-.59-.168-.907-.19M12 7a1 1 0 0 1 1 1v6.438a2.751 2.751 0 1 1-2 0V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Temperature;
