import React from "react";
const Location_04: React.FC<
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
        d="M7.976 17.53a1 1 0 0 1-.756 1.196c-.868.195-1.51.429-1.91.657q-.119.069-.188.12l.06.042c.282.187.756.395 1.431.584 1.338.376 3.242.621 5.387.621s4.05-.245 5.387-.62c.675-.19 1.15-.398 1.431-.585l.06-.042a2 2 0 0 0-.189-.12c-.4-.228-1.041-.462-1.909-.657a1 1 0 0 1 .44-1.952c.961.217 1.82.505 2.462.873.572.327 1.318.92 1.318 1.857 0 .825-.586 1.382-1.076 1.707-.527.35-1.225.627-1.997.844-1.558.437-3.653.695-5.927.695s-4.369-.258-5.927-.695c-.772-.217-1.47-.494-1.997-.844C3.586 20.886 3 20.33 3 19.504c0-.937.746-1.53 1.318-1.857.643-.368 1.5-.656 2.462-.873a1 1 0 0 1 1.196.756"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25c-3.05 0-5.948 1.855-7.158 4.766-1.127 2.71-.515 5.019.75 6.986 1.034 1.606 2.54 3.04 3.885 4.318q.384.364.744.712l.002.002a2.56 2.56 0 0 0 3.555 0q.34-.327.701-.668l.001-.001c1.36-1.288 2.887-2.736 3.93-4.362 1.264-1.969 1.875-4.28.75-6.987C17.949 3.105 15.05 1.25 12 1.25M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Location_04;
