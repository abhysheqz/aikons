import React from "react";
const Diploma: React.FC<
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
        d="M1.25 3A.75.75 0 0 1 2 2.25h20a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75h-5.5V14a4.5 4.5 0 1 0-9 0v5.75H2a.75.75 0 0 1-.75-.75zM17 5.25H7v1.5h10z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      <path
        fill="currentColor"
        d="M12 18a4.24 4.24 0 0 0 3-1.24v4.99l-3-1.5-3 1.5v-4.99A4.24 4.24 0 0 0 12 18"
      />
    </svg>
  );
};
export default Diploma;
