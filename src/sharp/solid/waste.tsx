import React from "react";
const Waste: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.282 1.25h6.468a1 1 0 0 1 .949.684l.772 2.316h1.779v2h-20v-2h7.532zm.103 3h5.978l-.334-1h-4.81zM17.25 20.875a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75M13.5 19a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.75 4.25a.75.75 0 0 0-.749.797l1 16a.75.75 0 0 0 .749.703h7.027a5.25 5.25 0 0 1 7.14-7.273l.582-9.43a.75.75 0 0 0-.749-.797z"
      />
    </svg>
  );
};
export default Waste;
