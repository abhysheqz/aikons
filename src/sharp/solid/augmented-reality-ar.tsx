import React from "react";
const AugmentedRealityAr: React.FC<
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
        d="M2 2.75a.75.75 0 0 0-.75.75v17c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-17a.75.75 0 0 0-.75-.75zm7.193 5.962a.75.75 0 0 0-1.384 0l-2.5 6 1.384.577 1.808-4.339 1.808 4.339 1.384-.578zm7.308-.462h-3.25V15h1.5v-2.25h.399l2.275 2.73 1.152-.96-1.53-1.837A2.251 2.251 0 0 0 16.5 8.25m0 3h-1.75v-1.5h1.75a.75.75 0 0 1 0 1.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AugmentedRealityAr;
