import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import ChrImg from '@/components/ChrImg';
import { CHARACTER } from '@/data/character';

type RoundState = {
  no: number,
  leftId: string,
  rightId: string,
  roundsConsumed: number,
  isDone: boolean,
}

type QuizCoreProps = {
  mainChrId: string,
  targetChrIds: string[],
  totalRounds: number,
};
// Sort using merge-sort method
function QuizCore({ mainChrId, targetChrIds, totalRounds }: QuizCoreProps) {
  const navigate = useNavigate();
  const compareState = useRef(targetChrIds.map((v) => [v]).concat([[]]));
  const [round, setRound] = useState<RoundState>({
    no: 0,
    leftId: '',
    rightId: '',
    roundsConsumed: 0,
    isDone: false,
  });

  const genNextRound = (consumed: number) => {
    console.log("Generating next round...", consumed, compareState.current);
    if (compareState.current.length <= 2) {
      // Sorting done
      setRound({
        no: round.no + 1,
        leftId: '',
        rightId: '',
        roundsConsumed: consumed,
        isDone: true,
      })
    } else {
      setRound({
        no: round.no + 1,
        leftId: compareState.current[0]![0]!,
        rightId: compareState.current[1]![0]!,
        roundsConsumed: consumed,
        isDone: false,
      });
    }
  }

  if (round.no === 0) {
    // Initialization code
    genNextRound(0);
    return null;
  }

  const onSelect = (selected: 'left' | 'right') => {
    const last = compareState.current.length - 1;
    let newConsumed = round.roundsConsumed + 1; // Already done 1 round.
    if (selected === 'left') {
      const leftElem = compareState.current[0]!.shift()!;
      compareState.current[last]!.push(leftElem!);
      if (compareState.current[0]!.length === 0) {
        newConsumed -= 1;
        // No more left section element. Remaining right elements are sorted
        for (const elem of compareState.current[1]!) {
          compareState.current[last]!.push(elem);
          newConsumed += 1; // Skipping 1 round
        }
        // Pop out first two sections
        compareState.current.shift();
        compareState.current.shift();
        // Add empty array to handle next rounds
        compareState.current.push([]);
      }
    } else {
      // Inverted version of the above one
      const rightElem = compareState.current[1]!.shift()!;
      compareState.current[last]!.push(rightElem!);
      if (compareState.current[1]!.length === 0) {
        newConsumed -= 1;
        // No more right section element. Remaining left elements are sorted
        for (const elem of compareState.current[0]!) {
          compareState.current[last]!.push(elem);
          newConsumed += 1; // Skipping 1 round
        }
        // Pop out first two sections
        compareState.current.shift();
        compareState.current.shift();
        // Add empty array to handle next rounds
        compareState.current.push([]);
      }
    }
    genNextRound(newConsumed);
  };

  const mainChr = CHARACTER[mainChrId]!;
  const post = mainChr.finalConsonant ? '과' : '와';

  if (!round.isDone) {
    return (
      <Stack alignItems="center">
        <Text fontWeight="bold">{`${mainChr.name}${post} 더 잘 어울리는 쪽은?`}</Text>
        <Text>{`선택 ${round.no}`}</Text>
        <Text>{`${(100 * round.roundsConsumed / totalRounds).toFixed(2)}% 완료`}</Text>
        <Wrap shouldWrapChildren justify="center" align="center">
          <ChrImg chrId={round.leftId} onClick={() => onSelect('left')} />
          <Text>VS</Text>
          <ChrImg chrId={round.rightId} onClick={() => onSelect('right')} />
        </Wrap>
        <Box pt={8}>
          <Button colorScheme="yellow" onClick={() => navigate('/')}>처음으로</Button>
        </Box>
      </Stack>
    );
  }
  // Done!
  return (
    <Stack alignItems="center">
      <Text fontWeight="bold">{`${mainChr.name}${post}의 커플링`}</Text>
      <Wrap justify="center" align="center" spacing={6}>
        {compareState.current[0]!.map((chId, idx) => {
          const color = (() => {
            if (idx === 0) return 'yellow.500';
            if (idx === 1) return 'gray.500';
            if (idx === 2) return 'yellow.800';
            return 'black';
          })();
          return (
            <WrapItem key={chId} alignItems="center">
              <Text color={color} fontSize="md" pr={2}>{`#${idx + 1}`}</Text>
              <ChrImg chrId={chId} />
            </WrapItem>
          );
        })}
      </Wrap>
      <Box pt={8}>
        <Button colorScheme="yellow" onClick={() => navigate('/')}>처음으로</Button>
      </Box>
    </Stack>
  )
}

export default QuizCore;
