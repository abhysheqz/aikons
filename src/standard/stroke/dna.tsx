import React from "react";
const Dna: React.FC<
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
        d="M22 7.714c-1.071 1.072-3.571.715-6.16.447m0 0c-2.59-.268-5.269-.447-6.697.982-1.429 1.428-1.25 4.107-.982 6.696m7.678-7.678c-.268-2.59-.625-5.09.447-6.161m-.447 6.16c.268 2.59.447 5.269-.982 6.697-1.428 1.429-4.107 1.25-6.696.982m0 0c.268 2.59.625 5.09-.447 6.161m.447-6.16c-2.59-.269-5.09-.626-6.161.446M11.5 8.5l4 4M16 4l4 4M4 16l4 4M8.5 11.5l4 4"
      />
    </svg>
  );
};
export default Dna;
