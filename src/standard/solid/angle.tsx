import React from "react";
const Angle: React.FC<
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
        d="M12 1a1 1 0 0 1 .832.445l3.988 5.983.024.036 5.988 8.981a1 1 0 0 1-1.664 1.11l-5.34-8.011c-.843.688-1.795 1.172-2.828 1.364V22a1 1 0 1 1-2 0V10.908c-1.033-.192-1.985-.676-2.827-1.364l-5.34 8.01a1 1 0 0 1-1.665-1.109l5.987-8.981.025-.036 3.988-5.983A1 1 0 0 1 12 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.195 11.407a1 1 0 0 1 1.398-.212C8.149 12.34 10.007 13 12 13a1 1 0 1 1 0 2c-2.447 0-4.716-.813-6.593-2.195a1 1 0 0 1-.212-1.398"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Angle;
