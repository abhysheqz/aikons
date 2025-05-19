import React from "react";
const Medal_06: React.FC<
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
        d="M15.929 2.621a1 1 0 0 0-1.857-.742l-1 2.5a1 1 0 1 0 1.857.742zm-5.51-.765a1 1 0 0 0-1.838.788l2.431 5.673q-.736.1-1.418.342L6.406 1.827a1 1 0 0 0-1.812.846l3.222 6.905a7.25 7.25 0 1 0 8.367 0l3.223-6.905a1 1 0 1 0-1.812-.846L14.406 8.66a7 7 0 0 0-1.204-.31zM9.75 15.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Medal_06;
