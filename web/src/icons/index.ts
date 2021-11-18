import attackSvg from "./icons/attack.svg";
import experienceSvg from "./icons/experience.svg";
import lifeSvg from "./icons/life.svg";
import movementSvg from "./icons/movement.svg";
import rangeSvg from "./icons/range.svg";
import retaliationSvg from "./icons/retaliation.svg";
import shieldSvg from "./icons/shield.svg";

import blessedSvg from "./icons/blessed.svg";
import cursedSvg from "./icons/cursed.svg";
import disarmedSvg from "./icons/disarmed.svg";
import immobilizedSvg from "./icons/immobilize.svg";
import poisonedSvg from "./icons/poisoned.svg";
import muddledSvg from "./icons/muddled.svg";
import pullSvg from "./icons/pull.svg";
import pushSvg from "./icons/push.svg";
import piercingSvg from "./icons/piercing.svg";
import invisibilitySvg from "./icons/invisibility.svg";
import stunSvg from "./icons/stun.svg";
import woundedSvg from "./icons/wounded.svg";
import targetSvg from "./icons/target.svg";

import fireSvg from "./icons/fire.svg";
import iceSvg from "./icons/ice.svg";
import lightSvg from "./icons/light.svg";
import windSvg from "./icons/wind.svg";
import nightSvg from "./icons/shadow.svg";
import natureSvg from "./icons/nature.svg";

export type Icon = string;

export namespace Elements {
  export const Fire: Icon = fireSvg;
  export const Ice: Icon = iceSvg;
  export const Light: Icon = lightSvg;
  export const Dark: Icon = nightSvg;
  export const Wind: Icon = windSvg;
  export const Nature: Icon = natureSvg;
}

export namespace Stats {
  export const Attack: Icon = attackSvg;
  export const Experience: Icon = experienceSvg;
  export const Life: Icon = lifeSvg;
  export const Movement: Icon = movementSvg;
  export const Range: Icon = rangeSvg;
  export const Retaliation: Icon = retaliationSvg;
  export const Shield: Icon = shieldSvg;
}

export namespace Effects {
  export const Blessed: Icon = blessedSvg;
  export const Cursed: Icon = cursedSvg;
  export const Disarmed: Icon = disarmedSvg;
  export const Immobilized: Icon = immobilizedSvg;
  export const Muddled: Icon = muddledSvg;
  export const Poisoned: Icon = poisonedSvg;
  export const PreferredTarget: Icon = targetSvg;
  export const Pull: Icon = pullSvg;
  export const Push: Icon = pushSvg;
  export const Piercing: Icon = piercingSvg;
  export const Invisible: Icon = invisibilitySvg;
  export const Stun: Icon = stunSvg;
  export const Wounded: Icon = woundedSvg;
}