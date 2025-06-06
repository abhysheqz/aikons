import React from "react";
const Mouse_13: React.FC<
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
        d="m12.875 5.184-1.303 2.084-.686-.412a.75.75 0 0 0-1.037.271l-2 3.5a.75.75 0 0 0 .265 1.016l2.5 1.5a.75.75 0 0 0 1.037-.271l2-3.5a.75.75 0 0 0-.265-1.015l-.527-.317 1.291-2.067c1.661 1.211 2.472 2.682 2.586 4.328.13 1.865-.65 3.803-1.72 5.625-1.072 1.824-2.388 3.452-4.088 4.27-1.762.849-3.796.765-6.113-.55-2.316-1.314-3.417-3.01-3.551-4.947-.13-1.865.65-3.803 1.72-5.625C4.057 7.25 5.373 5.622 7.074 4.803c1.682-.81 3.613-.77 5.802.38"
      />
      <path
        fill="currentColor"
        d="m10.771 8.537-1.255 2.197 1.213.729 1.256-2.198zM13.863 3.603a.75.75 0 0 1 1.014-.25l5.574 3.163L21.55 5.05l1.2.9-1.5 2a.75.75 0 0 1-.978.198L14.75 5.015l-.6.959a10 10 0 0 0-1.275-.79z"
      />
    </svg>
  );
};
export default Mouse_13;
