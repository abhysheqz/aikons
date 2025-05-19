import React from "react";
const Patient: React.FC<
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
        d="M20 22v-3c0-2.828 0-4.243-.879-5.121-.878-.88-2.293-.88-5.121-.88h-4c-2.828 0-4.243 0-5.121.88C4 14.757 4 16.172 4 18.999c0 .933 0 1.399.152 1.766a2 2 0 0 0 1.083 1.083C5.602 22 6.068 22 7 22M9.5 13l3 9M7 13.5V22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 19h2.5a1.5 1.5 0 0 1 0 3h-2M15.5 6.5v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0"
      />
    </svg>
  );
};
export default Patient;
