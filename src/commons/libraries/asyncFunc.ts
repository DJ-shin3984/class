export const wrapAsync = (targetFunction: () => Promise<void>) => () => {
    // 기다릴거면 await 안기다리고 실행하는거면 void
    void targetFunction()
  }