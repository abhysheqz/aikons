import React from "react";
const MouseLeftClick_05: React.FC<
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
      <path fill="currentColor" d="M2.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.125 9.786C4.037 10.546 4 11.293 4 12c0 2.798.375 5.53 1.65 7.586C6.982 21.733 9.202 23 12.5 23s5.518-1.267 6.85-3.414C20.625 17.53 21 14.798 21 12s-.375-5.53-1.65-7.586C18.018 2.267 15.797 1 12.5 1c-1.649 0-3.014.383-4.13 1.034.522.433.945.981 1.229 1.606a5.7 5.7 0 0 1 1.901-.577v1.5A2 2 0 0 0 10 6.5V8a2 2 0 0 0 1.5 1.937v1.313H6.015q.026-.645.104-1.292a4.54 4.54 0 0 1-1.994-.172M13.5 11.25h5.49c-.066-2.364-.457-4.359-1.34-5.782-.798-1.287-2.058-2.202-4.15-2.419v1.514A2 2 0 0 1 15 6.5V8a2 2 0 0 1-1.5 1.937zM12 8V6.5h1V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MouseLeftClick_05;
