import React from "react";
const Amie: React.FC<
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
        d="M8.5 2.25A6.25 6.25 0 0 0 3.321 12 6.25 6.25 0 0 0 12 20.679 6.25 6.25 0 0 0 20.679 12 6.25 6.25 0 0 0 12 3.321 6.22 6.22 0 0 0 8.5 2.25m3.5 5A2.25 2.25 0 0 0 9.75 9.5v5a2.25 2.25 0 0 0 4.5 0v-5A2.25 2.25 0 0 0 12 7.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Amie;
