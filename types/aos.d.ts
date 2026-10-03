declare module 'aos' {
  export interface AOSOptions {
    once?: boolean;
    easing?: string;
    duration?: number;
    offset?: number;
  }

  const AOS: {
    init: (options?: AOSOptions) => void;
    refresh: () => void;
    refreshHard: () => void;
    update: (mountedElem?: Element | string) => void;
    removeFrom: (elem: Element | string) => void;
    calculateOffset: (elem: Element, offset?: number) => number;
    lockScroll: (disable?: boolean) => void;
  };
  export default AOS;
}
