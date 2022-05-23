type CharacterMap = {
  [key: string]: {
    groupId: number,
    name: string,
    img: string,
  },
};

export const CHARACTER: CharacterMap = {
  l0001: { groupId: 1, name: '코사카 호노카', img: '//i.idol.st/u/idol/4Kousaka-Honoka-m1dEvp.png' },
  l0002: { groupId: 1, name: '아야세 에리', img: '//i.idol.st/u/idol/1Ayase-Eli-MqG2az.png' },
  l0003: { groupId: 1, name: '미나미 코토리', img: '//i.idol.st/u/idol/9Minami-Kotori-06DzDA.png' },
  l0004: { groupId: 1, name: '소노다 우미', img: '//i.idol.st/u/idol/13Sonoda-Umi-RVB62t.png' },
  l0005: { groupId: 1, name: '호시조라 린', img: '//i.idol.st/u/idol/2Hoshizora-Rin-sgemWZ.png' },
  l0006: { groupId: 1, name: '니시키노 마키', img: '//i.idol.st/u/idol/10Nishikino-Maki-UFQB4E.png' },
  l0007: { groupId: 1, name: '토죠 노조미', img: '//i.idol.st/u/idol/15Toujou-Nozomi-ToXNZh.png' },
  l0008: { groupId: 1, name: '코이즈미 하나요', img: '//i.idol.st/u/idol/3Koizumi-Hanayo-kdVFUI.png' },
  l0009: { groupId: 1, name: '야자와 니코', img: '//i.idol.st/u/idol/18Yazawa-Nico-agidhY.png' },
};
export const CHARACTER_IDS = Object.keys(CHARACTER);
