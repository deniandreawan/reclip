type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
	logo: (props: IconProps) => (
		<svg
			width="400"
			height="400"
			viewBox="0 0 400 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle cx="100" cy="100" r="100" fill="white" />
			<circle cx="300" cy="100" r="100" fill="white" />
			<circle cx="100" cy="300" r="100" fill="white" />
		</svg>
	),
	google: (props: IconProps) => (
		<svg
			width="22"
			height="22"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath="url(#clip0_229_5144)">
				<path
					d="M23.766 12.5477C23.766 11.732 23.6999 10.9119 23.5588 10.1094H12.24V14.7304H18.7217C18.4528 16.2207 17.5885 17.5391 16.323 18.3769V21.3752H20.19C22.4608 19.2852 23.766 16.1987 23.766 12.5477Z"
					fill="#4285F4"
				></path>
				<path
					d="M12.24 24.2708C15.4764 24.2708 18.2058 23.2082 20.1944 21.3739L16.3274 18.3756C15.2516 19.1075 13.8626 19.522 12.2444 19.522C9.11376 19.522 6.45934 17.4099 5.50693 14.5703H1.51648V17.6613C3.55359 21.7134 7.70278 24.2708 12.24 24.2708Z"
					fill="#34A853"
				></path>
				<path
					d="M5.50253 14.5683C4.99987 13.0779 4.99987 11.4641 5.50253 9.97375V6.88281H1.51649C-0.18551 10.2736 -0.18551 14.2684 1.51649 17.6592L5.50253 14.5683Z"
					fill="#FBBC04"
				></path>
				<path
					d="M12.24 5.01919C13.9508 4.99274 15.6043 5.6365 16.8433 6.8182L20.2694 3.39215C18.1 1.35504 15.2207 0.235065 12.24 0.27034C7.70277 0.27034 3.55359 2.82775 1.51648 6.88434L5.50252 9.97528C6.45052 7.13126 9.10935 5.01919 12.24 5.01919Z"
					fill="#EA4335"
				></path>
			</g>
			<defs>
				<clipPath id="clip0_229_5144">
					<rect
						width="24"
						height="24"
						fill="white"
						transform="translate(0 0.269531)"
					></rect>
				</clipPath>
			</defs>
		</svg>
	),
};
