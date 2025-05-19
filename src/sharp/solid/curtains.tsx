import React from "react";
const Curtains: React.FC<
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
        d="M2 2.25h20v1.5H2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.672 14.55q.132-.312.257-.652c.446-1.22.821-2.757.821-4.368h-1.5c0 1.389-.325 2.748-.73 3.852-.3.819-.627 1.457-.867 1.843-.218.06-.468.126-.468.126l-.935.238V3h9.5c0 2.221-.556 4.73-1.623 6.882-.995 2.008-2.478 3.785-4.455 4.67"
      />
      <path
        fill="currentColor"
        d="M19.348 15.225a10.4 10.4 0 0 1-.868-1.843c-.404-1.104-.73-2.463-.73-3.852h-1.5c0 1.61.375 3.148.821 4.367q.125.34.258.653c-1.978-.883-3.46-2.661-4.456-4.67C11.806 7.729 11.25 5.22 11.25 3h9.5v12.59l-.935-.239zM16.055 15.59q.553.307 1.162.535c.51.189 2.219.678 2.219.678l1.314.335V21a.75.75 0 0 1-.75.75h-4.75v-.837c0-1.39 0-3.454.805-5.324M7.945 15.59a8.5 8.5 0 0 1-1.162.535c-.51.189-2.219.678-2.219.678l-1.314.335V21c0 .414.336.75.75.75h4.75v-.837c0-1.39 0-3.454-.805-5.324"
      />
    </svg>
  );
};
export default Curtains;
