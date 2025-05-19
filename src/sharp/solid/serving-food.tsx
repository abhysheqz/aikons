import React from "react";
const ServingFood: React.FC<
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
        d="M21.75 11.344a8.75 8.75 0 0 0-8-8.719V1.094h-1.5v1.531a8.75 8.75 0 0 0-8 8.719v.75h17.5zm-12.782 3.25a3.25 3.25 0 0 0-2.299.952l-4.358 4.358-1.061-1.06 4.25-4.25H3.25v-1.5h19.5v1.5h-2.108l-3.685 4.054a4.75 4.75 0 0 1-3.219 1.546l-6.098.38-2.33 2.33-1.06-1.06 2.73-2.731 6.665-.417a3.25 3.25 0 0 0 2.202-1.057l2.768-3.045h-1.494l-1.694 1.694a2.75 2.75 0 0 1-1.945.806H9.061v-1.5h3.475c-.116-.57-.62-1-1.225-1zm5.067.871a2.7 2.7 0 0 0-.274-.871H15l-.634.634q-.148.146-.331.237"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ServingFood;
