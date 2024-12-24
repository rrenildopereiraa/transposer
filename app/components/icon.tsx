import React from "react";

type IconProps = {
  name: "copy" | "convert";
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className = "dim-6 fs-0" }) => {
  const icons = {
    copy: (
      <svg
        className={className}
        color="currentColor"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    ),
    convert: (
      <svg
        className={className}
        color="currentColor"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 21L13 11M18 6L15.5 8.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M9.5 2L10.4453 4.55468L13 5.5L10.4453 6.44532L9.5 9L8.55468 6.44532L6 5.5L8.55468 4.55468L9.5 2Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M19 10L19.5402 11.4598L21 12L19.5402 12.5402L19 14L18.4598 12.5402L17 12L18.4598 11.4598L19 10Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    ),
    reset: (
      <svg
        className={className}
        color="currentColor"
        fill="none"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          stroke="currentColor"></path>
      </svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;
