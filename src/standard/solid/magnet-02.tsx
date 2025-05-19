import React from "react";
const Magnet_02: React.FC<
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
        d="M4 6.25a.75.75 0 0 0-.75.75v2.25h5.5V7A.75.75 0 0 0 8 6.25zm4.75 4.5h-5.5V14a8.75 8.75 0 1 0 17.5 0v-3.25h-5.5V14a3.25 3.25 0 0 1-6.5 0zm6.5-1.5h5.5V7a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75zM12.773 1.364a.75.75 0 0 1 .238 1.034L11.853 4.25H13.5a.75.75 0 0 1 .636 1.148l-1.875 3a.75.75 0 1 1-1.272-.795l1.158-1.853H10.5a.75.75 0 0 1-.636-1.147l1.875-3a.75.75 0 0 1 1.034-.239"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Magnet_02;
