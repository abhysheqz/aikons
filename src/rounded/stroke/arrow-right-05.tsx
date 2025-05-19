import React from "react";
const ArrowRight_05: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 6v12M11.503 12.011v.37c-.04 2.972.094 4.004 1.345 3.525l.308-.182.248-.173.536-.413 1-.869 1.023-.864.5-.453.223-.226.262-.38.053-.336-.053-.334-.262-.379-.223-.226-.5-.453-1.023-.864-1-.87-.536-.413-.248-.172-.308-.182c-1.25-.48-1.386.553-1.345 3.524zm0 0H4"
      />
    </svg>
  );
};
export default ArrowRight_05;
