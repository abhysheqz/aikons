import React from "react";
const Manager: React.FC<
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
        d="M7.948 12.25H8a.75.75 0 0 1 .685.445L12 20.153l3.315-7.458A.75.75 0 0 1 16 12.25h.052c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.343.08 2.242v1.802c0 1.886 0 2.829-.586 3.415s-1.528.585-3.414.585h-9.5c-1.886 0-2.828 0-3.414-.585-.586-.586-.586-1.529-.586-3.415v-1.802c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.362 12.606A.75.75 0 0 1 11 12.25h2a.75.75 0 0 1 .67 1.085l-.898 1.797.472 3.775a.75.75 0 0 1-.033.33l-.5 1.5a.75.75 0 0 1-1.422 0l-.5-1.5a.75.75 0 0 1-.033-.33l.472-3.775-.899-1.797a.75.75 0 0 1 .033-.73"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.75 5.5a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
      />
    </svg>
  );
};
export default Manager;
