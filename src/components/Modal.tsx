import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import ReactPortal from './ReactPortal';

import CustomFont from './CustomFont';
import CustomColumn from './CustomColumn';
import CustomRow from './CustomRow';
import CustomButton from './CustomButton';

const ModalOverlay = styled.div`
    position: fixed;
	top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background-color: transparent;
	background-image: url('ModalBack.svg');
	background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 420px;
	padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    gap: 3rem;
`;

interface ModalProps {
	isOpen: boolean;
	onClose: MouseEventHandler<HTMLDivElement>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	// 모달이 열려있을 때만 렌더링
	if (!isOpen) return null;

	return (
		<ReactPortal>
			<ModalOverlay onClick={onClose}>
				<CustomRow $width='100%' $height='auto' $alignitems='flex-start' $justifycontent='center' $gap='1rem'>
					<ModalContainer onClick={(e) => e.stopPropagation()}>

						<CustomColumn $width='100%' $height='auto' $minHeight='none' $alignitems='center' $justifycontent='center' $gap='3rem'>
							<CustomColumn $width='60%' $minHeight='none' $height='60%' $alignitems='flex-start' $justifycontent='center' $gap='0.5rem'>
								<CustomFont $color='black' $font='0.8rem'>ㄴㅇㅇㅇ ㄱㄹㄷ</CustomFont>
								<CustomFont $color='black' $font='0.8rem'>ㄱㅈ ㄹㅋㄹ ㅁㅇㄷ ㄱㄱㅇㄴㄷ.</CustomFont>
								<CustomFont $color='black' $font='0.8rem'>ㅁㄴㅅ ㅂㄱㅅㄴㄷ.</CustomFont>
								<CustomFont $color='black' $font='0.8rem'>ㅎㅇㅇ ㄱㄷㅎ ㅎㄹㄱ</CustomFont>
								<CustomFont $color='black' $font='0.8rem'>ㄷㅅㄱㄹ ㄱㅇㅎㄴㄷ!</CustomFont>
							</CustomColumn>

							<CustomFont $color='black' $font='0.8rem' $fontweight='bold'>- 나영이로부터.</CustomFont>
						</CustomColumn>

					</ModalContainer>
					<CustomButton $backgroundColor='transparent' $width='auto' $height='auto' $padding='0'>
						<CustomFont $color='white' $font='1.5rem'>X</CustomFont>
					</CustomButton>
				</CustomRow>
			</ModalOverlay>
		</ReactPortal>
	);
};

export default Modal;
