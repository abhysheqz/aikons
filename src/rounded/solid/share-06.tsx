import React from "react";
const Share_06: React.FC<
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
        d="M11.75 4.282a8.75 8.75 0 1 0 7.968 7.968 2.25 2.25 0 0 1-1.218-2V8.682l-5.659 5.659a2.25 2.25 0 1 1-3.182-3.182L15.32 5.5H13.75a2.25 2.25 0 0 1-2-1.218"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.334 4.252-.584-.002h-4a1 1 0 1 1 0-2h4.062c.654 0 1.241 0 1.717.064.52.07 1.052.232 1.489.668.436.437.598.97.668 1.489.064.476.064 1.063.064 1.717v4.062a1 1 0 1 1-2 0v-4q0-.327-.002-.584l-7.79 7.791a1 1 0 0 1-1.415-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Share_06;
