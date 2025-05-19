import React from "react";
const ArtificialIntelligence_08: React.FC<
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
        d="M8.903 5.837c.571-1.45 2.622-1.45 3.194 0l.911 2.31a5.05 5.05 0 0 0 2.846 2.845l2.31.91c1.448.573 1.448 2.624 0 3.195l-2.31.911a5.05 5.05 0 0 0-2.846 2.846l-.91 2.31c-.573 1.448-2.624 1.448-3.195 0l-.911-2.31a5.05 5.05 0 0 0-2.846-2.846l-2.309-.91c-1.45-.573-1.45-2.623 0-3.195l2.31-.911a5.05 5.05 0 0 0 2.845-2.846zM17.465 2.454c.37-.939 1.7-.939 2.07 0l.341.866c.145.368.436.659.804.803l.866.342c.939.37.939 1.7 0 2.07l-.866.342a1.43 1.43 0 0 0-.803.803l-.342.866c-.37.939-1.7.939-2.07 0l-.341-.866a1.43 1.43 0 0 0-.804-.803l-.866-.342c-.939-.37-.939-1.7 0-2.07l.866-.342c.368-.144.659-.435.803-.803z"
      />
    </svg>
  );
};
export default ArtificialIntelligence_08;
