import React from "react";
const MouseRightClick_06: React.FC<
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
        d="M3.65 4.414C4.982 2.267 7.202 1 10.5 1s5.518 1.267 6.85 3.414C18.625 6.47 19 9.202 19 12s-.375 5.53-1.65 7.586C16.018 21.733 13.797 23 10.5 23c-3.298 0-5.518-1.267-6.85-3.414C2.375 17.53 2 14.798 2 12s.375-5.53 1.65-7.586m1.7 1.054c-.883 1.423-1.274 3.418-1.34 5.782H9.5V9.937A2 2 0 0 1 8 8V6.5a2 2 0 0 1 1.5-1.937V3.049c-2.092.217-3.352 1.132-4.15 2.42M11.5 3.05v1.514A2 2 0 0 1 13 6.5V8a2 2 0 0 1-1.5 1.937v1.313h5.49c-.066-2.364-.457-4.359-1.34-5.782-.798-1.287-2.059-2.202-4.15-2.419M19.947 1.106a1 1 0 0 1 .447 1.341l-.5 1a1 1 0 1 1-1.788-.894l.5-1a1 1 0 0 1 1.341-.447m-.841 3.947a1 1 0 0 1 1.341-.447l1 .5a1 1 0 1 1-.894 1.788l-1-.5a1 1 0 0 1-.447-1.341"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseRightClick_06;
