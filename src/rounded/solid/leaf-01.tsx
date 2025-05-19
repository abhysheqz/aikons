import React from "react";
const Leaf_01: React.FC<
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
        d="M20.724 2.805a.75.75 0 0 0-1.254-.335q-.19.19-.395.405c-1.16 1.207-2.786 2.898-6.181 3.383C9.139 6.794 6.25 9.306 6.25 13c0 .826.148 1.617.42 2.349.903-.423 1.95-.777 3.148-1.077 2.997-.749 5.108-2.63 6.574-4.657a.75.75 0 0 1 1.216.88c-1.607 2.22-3.99 4.373-7.426 5.232-1.12.28-2.056.6-2.836.962A6.74 6.74 0 0 0 13 19.75c2.162 0 5.055-.81 6.924-3.44 1.87-2.633 2.58-6.897.8-13.505"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.67 15.349c-.852.398-1.576.857-2.18 1.388-1.267 1.112-1.955 2.492-2.23 4.14a.75.75 0 1 0 1.48.246c.225-1.352.766-2.404 1.739-3.259.491-.43 1.105-.823 1.867-1.175a6.7 6.7 0 0 1-.676-1.34"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Leaf_01;
