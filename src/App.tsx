import './RecetCss.tsx';

import CustomColumn from './components/CustomColumn.tsx';
import CustomBox from './components/CustomBox.tsx';
import StyledImg from './components/StyledImg.tsx';
import CustomRow from './components/CustomRow.tsx';
import MainButtons from './maincomponents/MainButtons.tsx';
import FooterButtons from './maincomponents/FooterButtons.tsx';

function App() {
  return (
    <CustomBox
      $width="100%"
      $alignitems="center"
      $justifycontent="center"
      $padding="0"
      $backgroundcolor="#9E1823"
      $borderradius="0"
    >
      <CustomColumn
        $width="100%"
        $alignitems="flex-start"
        $justifycontent="flex-start"
        $padding="0"
      >
        <StyledImg src={'Banner_Header.svg'} $width="100%" />

        <CustomRow $width="100%" $alignitems="center" $justifycontent="flex-end">
          <StyledImg src={'Banner_RedCard.svg'} $width="auto" />
        </CustomRow>

        <MainButtons />

        <StyledImg src={'Banner_BlackCard.svg'} $width="100%" />

        <FooterButtons />
      </CustomColumn>
    </CustomBox>
  );
}

export default App;
