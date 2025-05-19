import React from "react";
const Limitation: React.FC<
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
        d="M18.633 4.226a1 1 0 0 1 .141 1.407l-4.5 5.5a1 1 0 0 1-1.548-1.266l4.5-5.5a1 1 0 0 1 1.407-.14"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 11.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2.5.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4a9 9 0 0 0-6.065 15.65l1.358-1.358a1 1 0 0 1 1.414 1.414l-2 2.001a1 1 0 0 1-1.309.092A10.99 10.99 0 0 1 1 13C1 6.925 5.925 2 12 2s11 4.925 11 11c0 3.599-1.73 6.794-4.398 8.8a1 1 0 0 1-1.308-.093l-2.001-2a1 1 0 0 1 1.414-1.415l1.358 1.358A9 9 0 0 0 12 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Limitation;
