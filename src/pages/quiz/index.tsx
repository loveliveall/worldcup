import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { CHARACTER, CHARACTER_IDS } from '@/data/character';
import { GameMode } from '@/data/gameMode';
import { shuffleInplace } from '@/utils';

import QuizCore from './QuizCore';

function getTotalRounds(n: number) {
  // Calculate maximum number of comparisons in merge sorting
  const memo: number[] = [0, 0, 1];
  for (let i = 3; i <= n; i++) {
    if (i % 2 === 0) memo.push(2 * memo[i / 2]! + i - 1);
    else memo.push(memo[(i-1) / 2]! + memo[(i+1) / 2]! + i - 1);
  }
  return memo[n]!;
}

function Quiz() {
  const [searchParams] = useSearchParams();
  const chrId = searchParams.get('chr') ?? CHARACTER_IDS[0]!;
  if (!CHARACTER_IDS.includes(chrId)) return null; // Wrong character ID
  const mode = (searchParams.get('mode') ?? GameMode.ALL) as GameMode;
  const targetChrIds = CHARACTER_IDS.filter((chId) => {
    if (chId === chrId) return false;
    if (mode === GameMode.SAMEPRJ) {
      const ch = CHARACTER[chId]!;
      const chr = CHARACTER[chrId]!;
      return ch.prjId === chr.prjId;
    }
    return true;
  });
  shuffleInplace(targetChrIds);
  const totalRounds = getTotalRounds(targetChrIds.length);
  return <QuizCore mainChrId={chrId} targetChrIds={targetChrIds} totalRounds={totalRounds} />;
}

export default Quiz;
