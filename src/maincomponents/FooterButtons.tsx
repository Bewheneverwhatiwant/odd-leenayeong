import { useState } from 'react';

import Modal from '../components/Modal.tsx';
import StyledImg from '../components/StyledImg.tsx';
import CustomRow from '../components/CustomRow.tsx';
import CustomButton from '../components/CustomButton.tsx';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const ButtonGroup = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5rem;
  z-index: 10;
`;

function FooterButtons() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const handleShareMeClick = () => {
		const textToCopy = "https://odd-nayeong.vercel.app/";

		navigator.clipboard.writeText(textToCopy).then(() => {
			alert("링크가 클립보드에 복사되었습니다!");
		}).catch((err) => {
			console.error("텍스트 복사 실패:", err);
			alert("링크 복사에 실패했습니다.");
		});
	};

	return (

		<FooterWrapper>
			<StyledImg src={'Banner_Footer_3.svg'} $width="100%" />

			<ButtonGroup>
				<CustomRow
					$width="100%"
					$height='auto'
					$alignitems="center"
					$justifycontent="space-between"
				>
					<CustomButton $width="auto" $backgroundColor="transparent" $padding="0" onClick={openModal}>
						<StyledImg src={'Button_ReadMe.svg'} $width="auto" />
					</CustomButton>

					<CustomButton $width="auto" $backgroundColor="transparent" $padding="0" onClick={handleShareMeClick}>
						<StyledImg src={'Button_ShareMe.svg'} $width="auto" />
					</CustomButton>
				</CustomRow>
			</ButtonGroup>

			<Modal isOpen={isModalOpen} onClose={closeModal} />
		</FooterWrapper>
	);
}

export default FooterButtons;
