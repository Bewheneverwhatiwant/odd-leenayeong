import { useState } from 'react';

import Modal from '../components/Modal.tsx';
import Modal_copy from '../components/Modal_copy.tsx';

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
	const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const openCopyModal = () => setIsCopyModalOpen(true);
	const closeCopyModal = () => setIsCopyModalOpen(false);

	const handleShareMeClick = () => {
		const textToCopy = "https://odd-nayeong.vercel.app/";

		navigator.clipboard.writeText(textToCopy).then(() => {
			setIsCopyModalOpen(true);
		}).catch((err) => {
			console.error("텍스트 복사 실패:", err);
			alert("링크 복사에 실패했어요. lny021102@gmail.com으로 오류를 알려주세요.");
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
			<Modal_copy isOpen={isCopyModalOpen} onClose={closeCopyModal} />
		</FooterWrapper>
	);
}

export default FooterButtons;
