import React from "react";
const Location_05: React.FC<
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
        d="M12 1.25c-4.3 0-7.75 3.58-7.75 7.95 0 2.672 1.426 4.805 2.959 6.33 1.537 1.527 3.259 2.522 4.037 2.931.475.25 1.033.25 1.508 0 .778-.409 2.5-1.404 4.037-2.932 1.533-1.524 2.959-3.658 2.959-6.329 0-4.37-3.45-7.95-7.75-7.95M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 18a1 1 0 0 1 1 1c0 .246.225.737 1.205 1.227.92.46 2.26.773 3.795.773s2.876-.313 3.795-.773C16.775 19.737 17 19.246 17 19a1 1 0 1 1 2 0c0 1.411-1.118 2.42-2.31 3.016-1.252.626-2.912.984-4.69.984s-3.438-.358-4.69-.984C6.118 21.42 5 20.41 5 19a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Location_05;
