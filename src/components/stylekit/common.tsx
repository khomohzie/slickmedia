import styled from "styled-components";

type ButtonProps = {
	marginTop?: string;
};

export const Input = styled.input`
	width: 100%;
	padding: 10px 16px;
	border: 1px solid #000000;
	border-radius: 2px;
	box-sizing: border-box;
`;

export const BtnContinue = styled.button<ButtonProps>`
	color: #f6f7f0;
	padding: 10px 48px;
	margin: ${(props) => (props.marginTop ? props.marginTop : "auto")} auto auto;
	grid-column: 1/-1;
	background: #4a8700;
	border: none;
	border-radius: 4px;
	font-size: 12px;
	letter-spacing: 0.04rem;
	cursor: pointer;

	:not(:disabled):hover {
		transform: scale(1.1);
		transition: all 0.2s linear;
	}

	:disabled {
		background: #a3d36c;
	}
`;

export const Select = styled.select`
	width: 100%;
	padding: 10px 16px;
	border: 2px solid #949291;
	border-radius: 4px;
	outline-color: #598c07;
	background: #f6f7f0;
	color: #3e4e54;
	box-sizing: border-box;

	option {
		color: #3e4e54;
	}
`;
