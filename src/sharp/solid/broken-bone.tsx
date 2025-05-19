import React from "react";
const BrokenBone: React.FC<
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
        d="M3.477 20.702c.68.24 1.398.108 1.954-.293.203.67.693 1.23 1.373 1.47 1.148.407 2.404-.25 2.806-1.468.313-.953.011-1.966-.685-2.557l-.677-.548L10 12l-2 1-1.327-2-1.733 5.087-.815.087c-.88.046-1.693.65-2.001 1.586-.402 1.218.204 2.535 1.353 2.941M21.7 6.097c-.372-.617-1.02-.99-1.718-1.064a2.08 2.08 0 0 0-.104-1.955c-.63-1.043-2.043-1.389-3.157-.773-.85.47-1.281 1.363-1.158 2.224l.135.795L11 7.981 13 9v2l4.738-2.47.442.378c.72.565 1.771.67 2.642.19 1.114-.615 1.507-1.959.878-3.001"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 3v3H8V3zM4 7h3v2H4zM18 15h-3v-2h3zm-6 4v-3h2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BrokenBone;
