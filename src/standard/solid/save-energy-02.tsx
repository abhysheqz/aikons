import React from "react";
const SaveEnergy_02: React.FC<
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
        d="M12 1a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M12 12.5a1 1 0 0 1 1 1v7.158C13 22.053 11.773 23 10.5 23S8 22.053 8 20.658v-.448a1 1 0 1 1 2 0v.448c0 .056.023.13.106.204A.6.6 0 0 0 10.5 21a.6.6 0 0 0 .394-.138c.083-.075.106-.148.106-.204V13.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 13.5c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75c0-6.581-4.844-10.75-10.75-10.75S1.25 6.919 1.25 13.5m1.524-.75C3.12 7.497 7.09 4.25 12 4.25s8.88 3.247 9.226 8.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.75 13.5c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75c0-3.139-.514-5.757-1.39-7.62C15 4.049 13.68 2.75 12 2.75S9 4.049 8.14 5.88c-.876 1.863-1.39 4.481-1.39 7.62M18.98 15.424a.75.75 0 0 1 .096 1.056l-1.475 1.77H20a.75.75 0 0 1 .576 1.23l-2.5 3a.75.75 0 0 1-1.152-.96l1.475-1.77H16a.75.75 0 0 1-.576-1.23l2.5-3a.75.75 0 0 1 1.056-.096"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SaveEnergy_02;
