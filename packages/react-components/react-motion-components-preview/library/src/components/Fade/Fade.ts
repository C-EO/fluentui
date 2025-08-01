import {
  motionTokens,
  createPresenceComponent,
  PresenceMotionFn,
  createPresenceComponentVariant,
} from '@fluentui/react-motion';
import { fadeAtom } from '../../atoms/fade-atom';
import { FadeParams } from './fade-types';

/**
 * Define a presence motion for fade in/out
 *
 * @param duration - Time (ms) for the enter transition (fade-in). Defaults to the `durationNormal` value (200 ms).
 * @param easing - Easing curve for the enter transition (fade-in). Defaults to the `curveEasyEase` value.
 * @param exitDuration - Time (ms) for the exit transition (fade-out). Defaults to the `duration` param for symmetry.
 * @param exitEasing - Easing curve for the exit transition (fade-out). Defaults to the `easing` param for symmetry.
 */
export const fadePresenceFn: PresenceMotionFn<FadeParams> = ({
  duration = motionTokens.durationNormal,
  easing = motionTokens.curveEasyEase,
  exitDuration = duration,
  exitEasing = easing,
}) => {
  return {
    enter: fadeAtom({ direction: 'enter', duration, easing }),
    exit: fadeAtom({ direction: 'exit', duration: exitDuration, easing: exitEasing }),
  };
};

/** A React component that applies fade in/out transitions to its children. */
export const Fade = createPresenceComponent(fadePresenceFn);

export const FadeSnappy = createPresenceComponentVariant(Fade, { duration: motionTokens.durationFast });

export const FadeRelaxed = createPresenceComponentVariant(Fade, { duration: motionTokens.durationGentle });
