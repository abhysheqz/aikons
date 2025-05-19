import React from "react";
const Agreement_02: React.FC<
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
        d="M18.501 6.25h4v8h-2.587a1.42 1.42 0 0 0-.413-.946l-6-6.036h-1l-1.234 1.241a1.99 1.99 0 0 1-2.664.149L7.501 7.77l3.52-3.521h4.48z"
      />
      <path
        fill="currentColor"
        d="M1.501 7.25h4.864a1.25 1.25 0 0 0 .352 1.495l1.102.887a3.24 3.24 0 0 0 4.334-.241l.732-.737 5.616 5.65a1.424 1.424 0 0 1 0 2.012 1.41 1.41 0 0 1-2 0l-.5-.503a1.43 1.43 0 0 1 0 2.011 1.41 1.41 0 0 1-2 0l-1-1.006a1.43 1.43 0 0 1 0 2.012 1.41 1.41 0 0 1-2 0l-1.5-1.509a1.43 1.43 0 0 1 0 2.012 1.41 1.41 0 0 1-2 0l-4-4.083h-2z"
      />
    </svg>
  );
};
export default Agreement_02;
