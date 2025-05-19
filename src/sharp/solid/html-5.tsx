import React from "react";
const Html_5: React.FC<
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
        d="M21 2.25H4a.75.75 0 0 0-.746.83L4.795 17.46l7.333 4.19a.75.75 0 0 0 .745 0l7.332-4.19 1.54-14.381A.75.75 0 0 0 21 2.25M17 7H8.367l.75 6.014h4.701l-.22 1.32-1.099.548-1.135-.568-.146-.613-1.945.463.362 1.522 2.864 1.432 2.903-1.451.779-4.653h-5.298L10.632 9h5.907z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Html_5;
