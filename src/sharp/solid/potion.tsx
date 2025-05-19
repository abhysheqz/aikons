import React from "react";
const Potion: React.FC<
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
        d="M12.005 1.405a.75.75 0 0 1 .65-.13l5.54 1.487a.75.75 0 0 1 .456 1.097l-.971 1.694.508.132-.376 1.452-.759-.196-.675 2.273-1.438-.428.66-2.222-2.636-.684-.73 2.341-1.432-.447.709-2.272-.7-.18.377-1.453.523.136V2a.75.75 0 0 1 .293-.595"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.008 12c0 .552-.446 1-.995 1h-.01a1 1 0 0 1-.995-1c0-.552.446-1 .996-1h.008c.55 0 .996.448.996 1"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M8.75 15a1.75 1.75 0 1 0 3.5 0z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7.25a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5M5.75 15a6.25 6.25 0 1 1 12.5 0h-4.5a3.25 3.25 0 0 1-6.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Potion;
