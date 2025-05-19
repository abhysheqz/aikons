import React from "react";
const Niqab: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.5 5c-1.657 0-3 1.331-3 2.973V18h6V7.973C15.5 6.331 14.157 5 12.5 5Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.302 7.519C18.302 4.47 15.705 2 12.5 2S6.698 4.47 6.698 7.519C6.698 9.617 4.902 15.034 2.5 18c6.004 5.333 13.996 5.333 20 0-2.401-2.966-4.198-8.383-4.198-10.481ZM9.5 8h6M9.5 11h6"
      />
    </svg>
  );
};
export default Niqab;
