import React from "react";
const Hold_05: React.FC<
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
        d="M7.805 14.77 9.644 4.233a1.244 1.244 0 1 1 2.451.43l-.95 5.4a.45.45 0 0 0 .888.154l1.3-7.42a1.274 1.274 0 1 1 2.508.444l-1.305 7.34a.45.45 0 0 0 .886.158l.976-5.479a1.234 1.234 0 1 1 2.43.439l-.99 5.401a.45.45 0 1 0 .886.163l.634-3.456a1.314 1.314 0 0 1 2.59.453l-1.8 10.835a3.75 3.75 0 0 1-3.7 3.153l-7.638.002a3.75 3.75 0 0 1-3.315-1.998c-.73-1.382-2.398-4.564-3.337-6.357a1.523 1.523 0 0 1 2.513-1.686l2.348 2.776a.45.45 0 0 0 .786-.215"
      />
    </svg>
  );
};
export default Hold_05;
