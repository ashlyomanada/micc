import { A as injectConfigProviderContext } from '../virtual/entry.mjs';
import * as vue from 'file:///Users/ccci/Project/node_modules/vue/index.mjs';

var count = 0;
function useId$1(deterministicId, prefix = "reka") {
  var _a;
  if (deterministicId) return deterministicId;
  let id;
  const configProviderContext = injectConfigProviderContext({ useId: void 0 });
  if (configProviderContext.useId) id = configProviderContext.useId();
  else if ("useId" in vue) id = (_a = vue.useId) == null ? void 0 : _a.call(vue);
  else id = `${++count}`;
  return prefix ? `${prefix}-${id}` : id;
}

export { useId$1 as u };
//# sourceMappingURL=useId-BZnJFoR8.mjs.map
