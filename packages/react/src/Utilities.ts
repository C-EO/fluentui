import './version';
export {
  Async,
  AutoScroll,
  // eslint-disable-next-line deprecation/deprecation
  BaseComponent,
  Customizations,
  // eslint-disable-next-line deprecation/deprecation
  Customizer,
  CustomizerContext,
  DATA_IS_SCROLLABLE_ATTRIBUTE,
  DATA_PORTAL_ATTRIBUTE,
  DelayedRender,
  EventGroup,
  FabricPerformance,
  FocusRects,
  FocusRectsContext,
  FocusRectsProvider,
  GlobalSettings,
  IsFocusVisibleClassName,
  KeyCodes,
  Rectangle,
  SELECTION_CHANGE,
  Selection,
  SelectionDirection,
  SelectionMode,
  addDirectionalKeyCode,
  addElementAtIndex,
  allowOverscrollOnElement,
  allowScrollOnElement,
  anchorProperties,
  appendFunction,
  arraysEqual,
  asAsync,
  assertNever,
  assign,
  audioProperties,
  baseElementEvents,
  baseElementProperties,
  buttonProperties,
  calculatePrecision,
  canUseDOM,
  classNamesFunction,
  colGroupProperties,
  colProperties,
  composeComponentAs,
  composeRenderFunction,
  createArray,
  createMemoizer,
  createMergedRef,
  css,
  customizable,
  disableBodyScroll,
  divProperties,
  doesElementContainFocus,
  elementContains,
  elementContainsAttribute,
  enableBodyScroll,
  extendComponent,
  filteredAssign,
  find,
  findElementRecursive,
  findIndex,
  findScrollableParent,
  fitContentToBounds,
  flatten,
  focusAsync,
  focusFirstChild,
  formProperties,
  format,
  getChildren,
  getDistanceBetweenPoints,
  getDocument,
  getElementIndexPath,
  getFirstFocusable,
  getFirstTabbable,
  getFirstVisibleElementFromSelector,
  getFocusableByIndexPath,
  getId,
  getInitials,
  getLanguage,
  getLastFocusable,
  getLastTabbable,
  getNativeElementProps,
  getNativeProps,
  getNextElement,
  getParent,
  getPreviousElement,
  getPropsWithDefaults,
  getRTL,
  getRTLSafeKeyCode,
  getRect,
  // eslint-disable-next-line deprecation/deprecation
  getResourceUrl,
  getScrollbarWidth,
  getVirtualParent,
  getWindow,
  hasHorizontalOverflow,
  hasOverflow,
  hasVerticalOverflow,
  hoistMethods,
  hoistStatics,
  htmlElementProperties,
  iframeProperties,
  // eslint-disable-next-line deprecation/deprecation
  imageProperties,
  imgProperties,
  initializeComponentRef,
  // eslint-disable-next-line deprecation/deprecation
  initializeFocusRects,
  inputProperties,
  isControlled,
  isDirectionalKeyCode,
  isElementFocusSubZone,
  isElementFocusZone,
  isElementTabbable,
  isElementVisible,
  isElementVisibleAndNotHidden,
  isIE11,
  isIOS,
  isMac,
  isVirtualElement,
  labelProperties,
  liProperties,
  mapEnumByName,
  memoize,
  memoizeFunction,
  merge,
  mergeAriaAttributeValues,
  mergeCustomizations,
  mergeScopedSettings,
  mergeSettings,
  MergeStylesShadowRootProvider_unstable,
  useAdoptedStylesheet_unstable,
  MergeStylesRootProvider_unstable,
  modalize,
  nullRender,
  olProperties,
  omit,
  on,
  optionProperties,
  portalContainsElement,
  precisionRound,
  // eslint-disable-next-line deprecation/deprecation
  raiseClick,
  removeDirectionalKeyCode,
  removeIndex,
  replaceElement,
  resetControlledWarnings,
  resetIds,
  resetMemoizations,
  safeRequestAnimationFrame,
  safeSetTimeout,
  selectProperties,
  // eslint-disable-next-line deprecation/deprecation
  setBaseUrl,
  setFocusVisibility,
  // eslint-disable-next-line deprecation/deprecation
  setLanguage,
  setMemoizeWeakMap,
  setPortalAttribute,
  setRTL,
  // eslint-disable-next-line deprecation/deprecation
  setSSR,
  setVirtualParent,
  setWarningCallback,
  shallowCompare,
  shouldWrapFocus,
  styled,
  tableProperties,
  tdProperties,
  textAreaProperties,
  thProperties,
  toMatrix,
  trProperties,
  unhoistMethods,
  useCustomizationSettings,
  useFocusRects,
  values,
  videoProperties,
  warn,
  warnConditionallyRequiredProps,
  warnControlledUsage,
  warnDeprecations,
  warnMutuallyExclusive,
} from '@fluentui/utilities';
export type {
  FitMode,
  IAsAsyncOptions,
  IBaseProps,
  ICancelable,
  IChangeDescription,
  IChangeEventCallback,
  // eslint-disable-next-line deprecation/deprecation
  IClassNames,
  IClassNamesFunctionOptions,
  IComponentAs,
  IComponentAsProps,
  ICssInput,
  ICustomizableProps,
  ICustomizations,
  ICustomizerContext,
  ICustomizerProps,
  IDeclaredEventsByName,
  IDelayedRenderProps,
  IDelayedRenderState,
  IDictionary,
  IDisposable,
  IEventRecord,
  IEventRecordList,
  IEventRecordsByName,
  IFitContentToBoundsOptions,
  IFocusRectsContext,
  IObjectWithKey,
  IPerfData,
  IPerfMeasurement,
  IPerfSummary,
  // eslint-disable-next-line deprecation/deprecation
  IPoint,
  IPropsWithStyles,
  IReactProps,
  IRectangle,
  IRefObject,
  IRenderComponent,
  IRenderFunction,
  ISelection,
  ISelectionOptions,
  ISelectionOptionsWithRequiredGetKey,
  ISerializableObject,
  ISettings,
  ISettingsFunction,
  ISettingsMap,
  ISize,
  IStyleFunction,
  IStyleFunctionOrObject,
  IVirtualElement,
  IWarnControlledUsageParams,
  // eslint-disable-next-line deprecation/deprecation
  Omit,
  Point,
  RefObject,
  // eslint-disable-next-line deprecation/deprecation
  Settings,
  // eslint-disable-next-line deprecation/deprecation
  SettingsFunction,
  StyleFunction,
} from '@fluentui/utilities';
