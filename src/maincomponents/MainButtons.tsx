import CustomColumn from '../components/CustomColumn.tsx';
import StyledImg from '../components/StyledImg.tsx';
import CustomRow from '../components/CustomRow.tsx';
import CustomButton from '../components/CustomButton.tsx';


function MainButtons() {

	const GoGit = () => {
		window.location.href = 'https://github.com/Bewheneverwhatiwant';
	};

	const GoWeb = () => {
		window.location.href = 'https://leenayeong.vercel.app/';
	};

	const GoMobile = () => {
		window.location.href = 'https://mobile-leenayeong.vercel.app/';
	};

	const GoFree = () => {
		window.location.href = 'https://free-leenayeong.vercel.app/';
	};

	return (

		<CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='1rem'>
			<StyledImg src={'Banner_Left.svg'} $width='20%' />
			<CustomColumn $width='20%' $height='30vh' $minHeight='none' $alignitems='center' $justifycontent='flex-start' $gap='1rem'>
				<CustomButton $backgroundColor='transparent' $width='100%' $height='auto' $padding='0' onClick={GoWeb}>
					<StyledImg src={'MainButton_web.svg'} $width='100%' />
				</CustomButton>
				<CustomButton $backgroundColor='transparent' $width='100%' $height='auto' $padding='0' onClick={GoFree}>
					<StyledImg src={'MainButton_free.svg'} $width='100%' />
				</CustomButton>
			</CustomColumn>
			<CustomColumn $width='20%' $height='30vh' $minHeight='none' $alignitems='center' $justifycontent='flex-end' $gap='1rem'>
				<CustomButton $backgroundColor='transparent' $width='100%' $height='auto' $padding='0' onClick={GoGit}>
					<StyledImg src={'MainButton_github.svg'} $width='100%' />
				</CustomButton>
				<CustomButton $backgroundColor='transparent' $width='100%' $height='auto' $padding='0' onClick={GoMobile}>
					<StyledImg src={'MainButton_mobile.svg'} $width='100%' />
				</CustomButton>
			</CustomColumn>
			<StyledImg src={'Banner_Right.svg'} $width='20%' />
		</CustomRow>
	)
}

export default MainButtons