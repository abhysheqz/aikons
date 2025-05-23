import React from "react";
const Ramadhan_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 15.703V22h12v-6.297c0-.455.16-.893.427-1.262 1.158-1.603 1.573-2.955 1.573-4.117 0-4.303-6.472-6.018-8-8.324-1.528 2.306-8 4.021-8 8.324 0 1.162.415 2.514 1.573 4.117.267.368.427.807.427 1.262"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.493 12.432A3.229 3.229 0 1 1 11.06 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.5 8.999h.009"
      />
      <path
        fill="currentColor"
        d="M11.103 18.864a.75.75 0 1 0 .795 1.272zm4.934-1.506.416-.624zm-1.084-.016-.398-.636zm3.963 1.034-2.463-1.642-.832 1.248 2.463 1.642zM9.663 16.58l-3.498 1.75.67 1.34 3.499-1.748zm4.892.126-1.953 1.22.796 1.273 1.952-1.22zm-1.953 1.22-1.5.938.796 1.272 1.5-.937zm.796 0-2.025-1.265-.795 1.272 2.024 1.265zm-3.064-.004a.25.25 0 0 1 .244.011l.795-1.272a1.75 1.75 0 0 0-1.71-.081zm6.12-1.188a1.75 1.75 0 0 0-1.899-.028l.795 1.272a.25.25 0 0 1 .271.004z"
      />
    </svg>
  );
};
export default Ramadhan_02;
