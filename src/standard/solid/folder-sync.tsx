import React from "react";
const FolderSync: React.FC<
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
        d="M17.25 14.75c-1.27 0-2.338.943-2.51 2.142a1 1 0 0 1-1.884.305l-1-2a1 1 0 1 1 1.789-.894l.067.135a4.56 4.56 0 0 1 3.538-1.688c1.226 0 2.339.491 3.15 1.286a1 1 0 1 1-1.4 1.428 2.5 2.5 0 0 0-1.75-.714m3.34 2.013a1 1 0 0 1 1.055.54l1 2a1 1 0 1 1-1.79.894l-.067-.135a4.56 4.56 0 0 1-3.538 1.688 4.5 4.5 0 0 1-3.15-1.286 1 1 0 1 1 1.4-1.428 2.5 2.5 0 0 0 1.75.714c1.271 0 2.339-.943 2.51-2.142a1 1 0 0 1 .83-.845"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.391 6.244 9.898 2.945a1.75 1.75 0 0 0-1.396-.695H3A1.75 1.75 0 0 0 1.25 4v15A2.75 2.75 0 0 0 4 21.75h9.67a6 6 0 0 1-.444-.393 2.25 2.25 0 0 1-.454-2.58 2.25 2.25 0 0 1-1.034-1.02l-1-2a2.25 2.25 0 0 1 2.966-3.045A5.8 5.8 0 0 1 17.25 11.5c1.567 0 2.99.63 4.025 1.643h1.475V8.994A2.75 2.75 0 0 0 20 6.244z"
      />
    </svg>
  );
};
export default FolderSync;
