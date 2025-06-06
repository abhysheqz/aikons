import React from "react";
const RemoteControl: React.FC<
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
        d="M16.44 1.385c-1.003-.135-2.282-.135-3.884-.135h-1.112c-1.602 0-2.881 0-3.884.135-1.037.14-1.89.435-2.565 1.11s-.97 1.528-1.11 2.565C3.75 6.063 3.75 7.342 3.75 8.944v6.112c0 1.602 0 2.881.135 3.884.14 1.037.435 1.89 1.11 2.565s1.528.97 2.565 1.11c1.003.135 2.282.135 3.884.135h1.112c1.602 0 2.881 0 3.884-.135 1.037-.14 1.89-.435 2.565-1.11s.97-1.528 1.11-2.565c.135-1.003.135-2.282.135-3.884V8.944c0-1.602 0-2.881-.135-3.884-.14-1.037-.435-1.89-1.11-2.565s-1.528-.97-2.565-1.11M7.923 14.254A.75.75 0 0 0 8 15.75h2a.75.75 0 0 0 0-1.5H8zM7.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H8a.747.747 0 0 1-.75-.75M14 14.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM13.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 4.25a3.75 3.75 0 1 0 0 7.501 3.75 3.75 0 0 0 0-7.501M9.75 8a2.25 2.25 0 0 1 4.5-.015V8a2.25 2.25 0 0 1-4.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RemoteControl;
