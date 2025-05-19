import React from "react";
const Mouse_11: React.FC<
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
        d="M12.5 1C9.202 1 6.982 2.267 5.65 4.414 4.375 6.47 4 9.202 4 12s.375 5.53 1.65 7.586C6.982 21.733 9.202 23 12.5 23s5.518-1.267 6.85-3.414C20.625 17.53 21 14.798 21 12s-.375-5.53-1.65-7.586C18.018 2.267 15.797 1 12.5 1M6.01 11.25c.066-2.364.457-4.359 1.34-5.782.798-1.287 2.058-2.202 4.15-2.419v1.514A2 2 0 0 0 10 6.5V8a2 2 0 0 0 1.5 1.937v1.313zm12.98 0c-.066-2.364-.457-4.359-1.34-5.782-.798-1.287-2.058-2.202-4.15-2.419v1.514A2 2 0 0 1 15 6.5V8a2 2 0 0 1-1.5 1.937v1.313zM13 6.5h-1V8h1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mouse_11;
