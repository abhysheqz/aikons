import React from "react";
const Desert: React.FC<
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
        d="M8 6a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M12 17a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 21a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M4 12a1 1 0 0 1 1 1v1.946l3.53 2.206a1 1 0 0 1-1.06 1.696l-3.53-2.206A2 2 0 0 1 3 14.946V13a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8a1 1 0 0 1 1 1v3.5a2 2 0 0 1-.8 1.6l-3.6 2.7a1 1 0 1 1-1.2-1.6l3.6-2.7V9a1 1 0 0 1 1-1M14.25 6a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Desert;
