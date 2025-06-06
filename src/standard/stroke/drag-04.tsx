import React from "react";
const Drag_04: React.FC<
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
        d="M12.016 9.41v3.62l6.226-6.534a1.606 1.606 0 0 1 2.068-.215c.792.543.924 1.651.283 2.362l-3.055 3.39 2.302 2.941c1.42 1.845 1.116 3.008-.202 4l-3.267 2.214c-1.065.813-2.614 1.266-3.871.132L8.87 18.05a2.6 2.6 0 0 1-.835-2.368l1.257-6.527a1.37 1.37 0 0 1 1.35-1.108c.758 0 1.373.611 1.373 1.364"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.512}
        d="M10 3.526C10 4.37 10.688 5 11.5 5a1.501 1.501 0 0 0 0-3c-.812 0-1.5.683-1.5 1.526m0 0h-.591L8.63 3.6m-4.123 5.4a1.47 1.47 0 0 1 1.504 1.465c.013.818-.617 1.522-1.462 1.536A1.533 1.533 0 0 1 3 10.505C2.987 9.687 3.662 9.013 4.507 9m0 0 .091-1.344m1.713-2.983-.331.31-.293.315"
      />
    </svg>
  );
};
export default Drag_04;
