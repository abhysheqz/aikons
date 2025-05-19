import React from "react";
const RainDrop: React.FC<
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
        d="M11.346 1.271a1.64 1.64 0 0 1 1.808 0c.933.61 2.993 2.06 4.829 4.083 1.822 2.008 3.517 4.684 3.517 7.734a9.25 9.25 0 0 1-18.5 0c0-3.05 1.695-5.726 3.517-7.734 1.836-2.022 3.896-3.473 4.829-4.083"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RainDrop;
