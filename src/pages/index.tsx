import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Button,
  Divider,
  Heading,
  Stack,
  Wrap,
} from '@chakra-ui/react';
import ChrImg from '@/components/ChrImg';
import { CHARACTER_IDS } from '@/data/character';
import { GameMode } from '@/data/gameMode';

// Step 1
type CharacterSelectorProps = {
  onSelect: (chrId: string) => void,
};
function CharacterSelector({ onSelect }: CharacterSelectorProps) {
  return (
    <Stack alignItems="center" spacing={4}>
      <Heading size="md">캐릭터를 선택해주세요</Heading>
      <Wrap shouldWrapChildren justify="center" align="center" spacing={4}>
        {CHARACTER_IDS.map((chId) => (
          <ChrImg key={chId} chrId={chId} onClick={() => onSelect(chId)} />
        ))}
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
  const [step, setStep] = useState(0);
  const [chrId, setChrId] = useState('');
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.ALL);
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
