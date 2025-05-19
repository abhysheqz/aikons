import React from "react";
const WebflowEllipse: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m6.48 7.947.195-.98-1.96-.393-.197.98c-.154.772-.51 2.053-1.062 3.323-.267.616-.569 1.2-.898 1.711l-1.082-5.047-1.942-.053c-.236.863-.714 2.25-1.367 3.552a12 12 0 0 1-.958 1.616L8.347 7.87l-1.98.282 1.355 9.481 1.291-.775c1.262-.757 2.243-2.278 2.942-3.671q.15-.3.289-.602l1.116 5.208 1.263-1.011c1.192-.954 2.064-2.468 2.668-3.857a19.6 19.6 0 0 0 1.188-3.728"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WebflowEllipse;
