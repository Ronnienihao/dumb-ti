export function getPersonalityCode(scores: { E: number; S: number; M: number; V: number }): string {
  const E = scores.E >= 0 ? "H" : "R";
  const S = scores.S >= 0 ? "G" : "F";
  const M = scores.M >= 0 ? "D" : "W";
  const V = scores.V >= 0 ? "M" : "S";
  const key = `${E}${S}${M}${V}`;
  const map: Record<string, string> = {
    HGDM: "STAR", HGDS: "STAN", HGWM: "HELP", HGWS: "BOSS",
    HFDM: "CORE", HFDS: "CLWN", HFWM: "MESS", HFWS: "QUIT",
    RGDM: "SLAY", RGDS: "DELU", RGWM: "BRAT", RGWS: "TRSH",
    RFDM: "POET", RFDS: "CAPY", RFWM: "VILN", RFWS: "PLNT",
  };
  return map[key] ?? "PLNT";
}
