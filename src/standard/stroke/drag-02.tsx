import React from "react";
const Drag_02: React.FC<
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
        d="m13.96 21.883 1.491-1.412s3.584-1.34 4.69-2.345c.867-.786.95-2.023.525-3.085-.583-1.456-1.241-2.707-3.228-4.118l3.188-3.58a1.48 1.48 0 0 0-.104-2.072 1.47 1.47 0 0 0-2.09.102l-5.86 6.546V9.125c-.057-.765-.729-1.357-1.539-1.357-.852 0-1.543.654-1.543 1.461v6.537L8 17.178"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.512}
        d="M10 3.409c0 .843.688 1.474 1.5 1.474a1.501 1.501 0 0 0 0-3c-.812 0-1.5.683-1.5 1.526m0 0h-.591l-.779.073m-4.123 5.4a1.47 1.47 0 0 1 1.504 1.465c.013.818-.617 1.522-1.462 1.536A1.533 1.533 0 0 1 3 10.388c-.013-.818.662-1.493 1.507-1.506m0 0 .091-1.344m1.713-2.983-.331.31-.293.315"
      />
    </svg>
  );
};
export default Drag_02;
