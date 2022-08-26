type CharacterMap = {
  [key: string]: {
    prjId: number,
    name: string,
    img: string,
    finalConsonant?: boolean,
  },
};

export const CHARACTER: CharacterMap = {
  l0001: { prjId: 1, name: '코사카 호노카', img: '//i.idol.st/u/idol/4Kousaka-Honoka-m1dEvp.png' },
  l0002: { prjId: 1, name: '아야세 에리', img: '//i.idol.st/u/idol/1Ayase-Eli-MqG2az.png' },
  l0003: { prjId: 1, name: '미나미 코토리', img: '//i.idol.st/u/idol/9Minami-Kotori-06DzDA.png' },
  l0004: { prjId: 1, name: '소노다 우미', img: '//i.idol.st/u/idol/13Sonoda-Umi-RVB62t.png' },
  l0005: { prjId: 1, name: '호시조라 린', finalConsonant: true, img: '//i.idol.st/u/idol/2Hoshizora-Rin-sgemWZ.png' },
  l0006: { prjId: 1, name: '니시키노 마키', img: '//i.idol.st/u/idol/10Nishikino-Maki-UFQB4E.png' },
  l0007: { prjId: 1, name: '토죠 노조미', img: '//i.idol.st/u/idol/15Toujou-Nozomi-ToXNZh.png' },
  l0008: { prjId: 1, name: '코이즈미 하나요', img: '//i.idol.st/u/idol/3Koizumi-Hanayo-kdVFUI.png' },
  l0009: { prjId: 1, name: '야자와 니코', img: '//i.idol.st/u/idol/18Yazawa-Nico-agidhY.png' },
  l0010: { prjId: 1, name: '키라 츠바사', img: '//i.idol.st/u/idol/46Kira-Tsubasa-yMqjxx.png' },
  l0011: { prjId: 1, name: '토도 에레나', img: '//i.idol.st/u/idol/99Toudou-Erena-l39Dhy.png' },
  l0012: { prjId: 1, name: '유키 안쥬', img: '//i.idol.st/u/idol/111Yuki-Anju-N6q54P.png' },
  s0001: { prjId: 2, name: '타카미 치카', img: '//i.idol.st/u/idol/14Takami-Chika-RUJSlZ.png' },
  s0002: { prjId: 2, name: '사쿠라우치 리코', img: '//i.idol.st/u/idol/12Sakurauchi-Riko-xHBC2K.png' },
  s0003: { prjId: 2, name: '마츠우라 카난', finalConsonant: true, img: '//i.idol.st/u/idol/8Matsuura-Kanan-qlLtYT.png' },
  s0004: { prjId: 2, name: '쿠로사와 다이아', img: '//i.idol.st/u/idol/6Kurosawa-Dia-gjXWOR.png' },
  s0005: { prjId: 2, name: '와타나베 요우', img: '//i.idol.st/u/idol/17Watanabe-You-ohUDHk.png' },
  s0006: { prjId: 2, name: '츠시마 요시코', img: '//i.idol.st/u/idol/16Tsushima-Yoshiko-VytOHY.png' },
  s0007: { prjId: 2, name: '쿠니키다 하나마루', img: '//i.idol.st/u/idol/5Kunikida-Hanamaru-nqbGF1.png' },
  s0008: { prjId: 2, name: '오하라 마리', img: '//i.idol.st/u/idol/11Ohara-Mari-npxzmE.png' },
  s0009: { prjId: 2, name: '쿠로사와 루비', img: '//i.idol.st/u/idol/7Kurosawa-Ruby-UbPDc8.png' },
  s0010: { prjId: 2, name: '카즈노 세이라', img: '//i.idol.st/u/idol/43Kazuno-Sarah-J0mfHD.png' },
  s0011: { prjId: 2, name: '카즈노 리아', img: '//i.idol.st/u/idol/42Kazuno-Leah-FUFPXq.png' },
  n0000: { prjId: 3, name: '타카사키 유우', img: '/yuu.png' },
  n0001: { prjId: 3, name: '우에하라 아유무', img: '//i.idol.st/u/idol/102Uehara-Ayumu-TgB2p1.png' },
  n0002: { prjId: 3, name: '나카스 카스미', img: '//i.idol.st/u/idol/67Nakasu-Kasumi-M5ZCuB.png' },
  n0003: { prjId: 3, name: '오사카 시즈쿠', img: '//i.idol.st/u/idol/70Osaka-Shizuku-4TmRNm.png' },
  n0004: { prjId: 3, name: '아사카 카린', finalConsonant: true, img: '//i.idol.st/u/idol/24Asaka-Karin-fd7iBo.png' },
  n0005: { prjId: 3, name: '미야시타 아이', img: '//i.idol.st/u/idol/62Miyashita-Ai-3rwYaJ.png' },
  n0006: { prjId: 3, name: '코노에 카나타', img: '//i.idol.st/u/idol/50Konoe-Kanata-xB16n7.png' },
  n0007: { prjId: 3, name: '유키 세츠나', img: '//i.idol.st/u/idol/110Yuki-Setsuna-44Ojdt.png' },
  n0008: { prjId: 3, name: '엠마 베르데', img: '//i.idol.st/u/idol/28Emma-Verde-cn5mja.png' },
  n0009: { prjId: 3, name: '텐노지 리나', img: '//i.idol.st/u/idol/97Tennoji-Rina-tZo8rZ.png' },
  n0010: { prjId: 3, name: '미후네 시오리코', img: '//i.idol.st/u/idol/113Mifune-Shioriko-o5YINu.png' },
  n0011: { prjId: 3, name: '미아 테일러', img: '//i.idol.st/u/idol/123Mia-Taylor-88B8V6.png' },
  n0012: { prjId: 3, name: '쇼우 란쥬', img: '//i.idol.st/u/idol/124Lanzhu-ttDPY2.png' },
  ss0001: { prjId: 4, name: '시부야 카논', finalConsonant: true, img: '//i.idol.st/u/idol/118Shibuya-Kanon-v7t9EL.png' },
  ss0002: { prjId: 4, name: '탕 쿠쿠', img: '//i.idol.st/u/idol/119Tang-Keke-DsQVZW.png' },
  ss0003: { prjId: 4, name: '아라시 치사토', img: '//i.idol.st/u/idol/120Arashi-Chisato-NGhy5X.png' },
  ss0004: { prjId: 4, name: '헤안나 스미레', img: '//i.idol.st/u/idol/121Heanna-Sumire-pZiy0V.png' },
  ss0005: { prjId: 4, name: '하즈키 렌', finalConsonant: true, img: '//i.idol.st/u/idol/122Hazuki-Ren-vhPCUT.png' },
  ss0006: { prjId: 4, name: '사쿠라코지 키나코', img: '//i.idol.st/u/idol/172Sakurakoji-Kinako-tlV6DE.png' },
  ss0007: { prjId: 4, name: '요네메 메이', img: '//i.idol.st/u/idol/173Yoneme-Mei-sEg30K.png' },
  ss0008: { prjId: 4, name: '와카나 시키', img: '//i.idol.st/u/idol/174Wakana-Shiki-hYcW9H.png' },
  ss0009: { prjId: 4, name: '오니츠카 나츠미', img: '//i.idol.st/u/idol/175Onitsuka-Natsumi-G6jHPg.png' },
  ss0010: { prjId: 4, name: '히이라기 마오', img: '//i.idol.st/u/idol/133Hiiragi-Mao-yuL7qs.png' },
  ss0011: { prjId: 4, name: '히지리사와 유우나', img: '//i.idol.st/u/idol/134Hijirisawa-Yuna-B8Wlcu.png' },
};
export const CHARACTER_IDS = Object.keys(CHARACTER);
