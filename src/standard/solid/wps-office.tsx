import React from "react";
const WpsOffice: React.FC<
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
        d="M1.25 5.92c0-.646.535-1.17 1.194-1.17h6.69c.452 0 .865.25 1.068.646l1.377 2.697-1.336 2.615-1.848-3.62H4.113l4.32 8.812 5.365-10.504a1.2 1.2 0 0 1 1.069-.646h6.689c.66 0 1.194.524 1.194 1.17v.467c0 .175-.04.348-.118.506L16.9 18.587a1.2 1.2 0 0 1-1.077.663h-.478c-.452 0-.866-.25-1.068-.646l-1.855-3.632 1.336-2.615 1.81 3.543 4.32-8.811h-4.282L9.724 18.604a1.2 1.2 0 0 1-1.068.646h-.478c-.46 0-.878-.258-1.077-.663L1.368 6.893a1.15 1.15 0 0 1-.118-.506z"
      />
    </svg>
  );
};
export default WpsOffice;
