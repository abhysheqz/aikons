import React from "react";
const PinLocation_01: React.FC<
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
        d="M12 2.25a4.75 4.75 0 0 0-1 9.395V18h2v-6.355a4.752 4.752 0 0 0-1-9.395"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.072 20.379 2-5 1.856.742-1.451 3.629h9.046l-1.451-3.629 1.857-.742 2 5A1 1 0 0 1 18 21.75H6a1 1 0 0 1-.928-1.371"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PinLocation_01;
