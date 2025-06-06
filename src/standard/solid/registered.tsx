import React from "react";
const Registered: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-3 5.5a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-3.25h2.287l1.792 3.585a.75.75 0 1 0 1.342-.67l-1.556-3.111A3.251 3.251 0 0 0 12.5 6.75zm3.5 5H9.75v-3.5h2.75a1.75 1.75 0 1 1 0 3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Registered;
