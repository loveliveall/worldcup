import React from 'react';
import { Navigate } from 'react-router-dom';
import {
  Button,
  Divider,
  Heading,
  Image,
  Stack,
  Wrap,
} from '@chakra-ui/react';
import { CHARACTER, CHARACTER_IDS } from '@/data/character';
import { GameMode } from '@/data/gameMode';

// Step 1
type CharacterSelectorProps = {
  onSelect: (chrId: string) => void,
};
function CharacterSelector({ onSelect }: CharacterSelectorProps) {
  return (
    <Stack alignItems="center" spacing={4}>
      <Heading size="md">캐릭터를 선택해주세요</Heading>
      <Wrap shouldWrapChildren justify="center" spacing={4}>
        {CHARACTER_IDS.map((chId) => {
          const ch = CHARACTER[chId]!;
          return (
            <Image
              key={chId}
              w="80px"
              borderRadius="50%"
              cursor="pointer"
              _hover={{
                opacity: 0.7,
              }}
              src={ch.img}
              alt={ch.name}
              onClick={() => onSelect(chId)}
            />
          );
        })}
      </Wrap>
    </Stack>
  );
}

// Step 2
type ModeSelectorProps = {
  onSelect: (mode: GameMode) => void,
  stepBack: () => void,
};
function ModeSelector({ onSelect, stepBack, }: ModeSelectorProps) {
  return (
    <Stack alignItems="center" spacing={4}>
      <Heading size="md">질문 범위를 선택해주세요</Heading>
      <Button colorScheme="blue" onClick={() => onSelect(GameMode.ALL)}>전체</Button>
      <Button colorScheme="blue" onClick={() => onSelect(GameMode.SAMEPRJ)}>동일 프로젝트</Button>
      <Divider color="black" />
      <Button colorScheme="yellow" onClick={stepBack}>이전으로</Button>
    </Stack>
  );
}

function Index() {
  const [step, setStep] = React.useState(0);
  const [chrId, setChrId] = React.useState('');
  const [gameMode, setGameMode] = React.useState<GameMode>(GameMode.ALL);
  const onChrSelect = (cId: string) => {
    setChrId(cId);
    setStep(1);
  };
  const onModeSelect = (mode: GameMode) => {
    setGameMode(mode);
    setStep(2);
  };
  const stepBack = () => {
    setStep((prev) => prev - 1);
  }

  switch (step) {
    case 0:
      return <CharacterSelector onSelect={onChrSelect} />;
    case 1:
      return <ModeSelector onSelect={onModeSelect} stepBack={stepBack} />;
    case 2:
      return <Navigate to={`/quiz?chr=${chrId}&mode=${gameMode}`} />;
  }
  return null;
}

export default Index;
