import React from "react";
const MusicNote_03: React.FC<
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
        d="M22 2.765v13.234a4 4 0 1 1-2-3.465V8.662a22.4 22.4 0 0 1-9 2.315V18.5a4.5 4.5 0 1 1-2-3.742V6.948c0-.418 0-.818.04-1.146.045-.363.154-.79.487-1.152.341-.371.775-.512 1.135-.585.336-.069.754-.105 1.2-.143l.052-.004c3.85-.328 6.594-1.583 7.935-2.371l.028-.017c.12-.07.285-.168.437-.232.144-.06.602-.235 1.082.04.474.27.56.743.582.906.022.162.022.353.022.488z"
      />
    </svg>
  );
};
export default MusicNote_03;
